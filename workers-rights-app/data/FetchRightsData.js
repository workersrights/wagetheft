import * as firebase from "firebase";
import firebaseConfig from "../constants/MyApiKeys";
import RightsCategory from "../models/rightsCategory";
import SubRight from "../models/subRight";
import learnMore from "../models/learnMore";
import buildOrg from "../models/Organization/organizationBuilder";

export default class ImportedData {
  constructor() {}

  static rightsCategories = [];
  static subRights = [];
  static organizations = [];
  static learnMores = [];

  // Setters
  static setRightsCategories(data) {
    this.rightsCategories = data;
  }
  static setSubRights(data) {
    this.subRights = data;
  }
  static setOrganizations(data) {
    this.organizations = data;
  }
  static setLearnMores(data) {
    this.learnMores = data;
  }

  // Getters
  static getRightsCategories() {
    return this.rightsCategories;
  }
  static getSubRights() {
    return this.subRights;
  }
  static getOraganizations() {
    return this.organizations;
  }
  static getLearnMores() {
    return this.learnMores;
  }

  static async importAllData(lang) {
    if (!firebase.apps.length) {
      // only load once
      firebase.initializeApp(firebaseConfig);
    }
    // Get a reference to the database service
    var db = firebase.database();

    // Set correct language for data
    const supportedLanguages = ["en", "es"];
    if (!supportedLanguages.includes(lang)) {
      lang = "en"; // if not supported language, default to english
    }

    // Get correct strings for given language
    // i.e. construct mapping like "1317869524" --> "Getting Hired" if selected language is English
    let hashToPhrase = await constructHashToPhrase(db, lang);

    // Fetch rights categories
    arr1 = await constructRightsCategories(db, hashToPhrase);
    arr1.sort((catA, catB) => (catA.id > catB.id ? 1 : -1)); // sort by cat id
    ImportedData.setRightsCategories(arr1);

    // Fetch subrights
    arr2 = await constructSubrights(db, hashToPhrase);
    ImportedData.setSubRights(arr2);

    // Fetch organizations
    arr3 = await constructOrgs(db);
    ImportedData.setOrganizations(arr3);

    // Fetch learn mores
    arr4 = await constructLearnMores(db, hashToPhrase);
    ImportedData.setLearnMores(arr4);

    return; // return after all fetches are done
  }
}

/*
Function that constructs mapping from hash to phrase in the language selected by the user
(or defaulted to English if translation not available). Returns an array that looks like
this: {"1317869524": "Getting Hired", "-936704732": "Safety & Healthy"} for easy lookup.
*/
function constructHashToPhrase(db, lang) {
  let ref = db.ref("translation");
  var hashToPhrase = {};

  return ref.once("value").then(function (snapshot) {
    snapshot.forEach(function (data) {
      if (snapshot.child(data.key + "/" + lang).exists()) {
        // if lang translation exists
        hashToPhrase[data.key] = data.val()[lang];
      } else {
        // if no translation, default to english
        // console.log("Lang doesn't exist! Defaulting to english.");
        hashToPhrase[data.key] = data.val()["en"];
      }
    });
    return hashToPhrase;
  });
}

function constructRightsCategories(db, hashToPhrase) {
  let ref = db.ref("rights-categories/");
  var tempRightsCategories = [];

  return ref.once("value").then(function (snapshot) {
    snapshot.forEach(function (data) {
      let img = getCategoryIcon(data); // get correct icon for ctegory
      let temp = new RightsCategory(
        data.key,
        hashToPhrase[data.val().title], // get language sentence from hash
        img,
        hashToPhrase[data.val().subtitle],
        hashToPhrase[data.val().description]
      );
      tempRightsCategories.push(temp);
    });
    return tempRightsCategories;
  });
}

/*
Function that takes in json object of informationChunks containing hashes in the chunks,
and returns a new version of informationChunks that contains the actual text instead of hashes.
*/
function getInformationChunksWithoutHashes(informationChunks, hashToPhrase) {
  for (var elem in informationChunks) {
    // eg. 0, 1, 2
    for (var chunk in informationChunks[elem]) {
      // eg. header, body
      let chunkHash = informationChunks[elem][chunk];
      informationChunks[elem][chunk] = hashToPhrase[chunkHash]; // replace by true string!
    }
  }

  return informationChunks;
}

function constructLearnMores(db, hashToPhrase) {
  let ref = db.ref("learn-mores/");
  var tempLearnMores = [];

  return ref.once("value").then(function (snapshot) {
    snapshot.forEach(function (data) {
      let temp = new learnMore(
        data.key,
        hashToPhrase[data.val().title],
        getInformationChunksWithoutHashes(
          data.val().informationChunks,
          hashToPhrase
        ) // data.val().informationChunks
      );
      tempLearnMores.push(temp);
    });
    return tempLearnMores;
  });
}

function constructOrgs(db) {
  let ref = db.ref("organizations/");
  var tempOrgs = [];

  return ref.once("value").then(function (snapshot) {
    snapshot.forEach(function (data) {
      const org = buildOrg(
        data.key,
        data.val().abbrev,
        data.val().addresses,
        data.val().description,
        data.val().image,
        data.val().name,
        data.val().website
      );
      tempOrgs.push(org);
    });
    return tempOrgs;
  });
}

function constructSubrights(db, hashToPhrase) {
  let ref = db.ref("subrights/");
  var tempSubrights = [];

  return ref.once("value").then(function (snapshot) {
    snapshot.forEach(function (data) {
      let temp = new SubRight(
        data.key,
        data.val().categoryIDs,
        hashToPhrase[data.val().title],
        data.val().img,
        data.val().learnMores,
        hashToPhrase[data.val().description],
        data.val().organizations
      );
      tempSubrights.push(temp);
    });
    return tempSubrights;
  });
}

// need to do this because require() needs a static string passed in...
// using the data.val().image itself doesn't work...
// eg. require("../images/" + data.val().image) throws an error
// https://stackoverflow.com/questions/30854232/react-native-image-require-module-using-dynamic-names
// using variables with dynamic content doesn't work either
function getCategoryIcon(data) {
  var img;
  if (data.val().image == "hiring-icon.png") {
    img = require("../images/hiring-icon.png");
  } else if (data.val().image == "mistreatment-icon.png") {
    img = require("../images/mistreatment-icon.png");
  } else if (data.val().image == "payments-icon.png") {
    img = require("../images/payments-icon.png");
  } else if (data.val().image == "health-icon.png") {
    img = require("../images/health-icon.png");
  } else if (data.val().image == "unions-icon.png") {
    img = require("../images/unions-icon.png");
  } else if (data.val().image == "unemployment-icon.png") {
    img = require("../images/unemployment-icon.png");
  } else if (data.val().image === "timeoff-icon.png") {
    img = require("../images/timeoff-icon.png");
  }
  return img;
}
