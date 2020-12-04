import * as firebase from "firebase";
// import firebaseConfig from "../constants/MyApiKeys";
import firebaseConfig from "../constants/MyApiKeysTest";
import RightsCategory from "../models/rightsCategory";
import SubRight from "../models/subRight";
import Organization from "../models/organization";
import learnMore from "../models/learnMore";

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
    if(!supportedLanguages.includes(lang)) {
      lang = "en"; // if not supported language, default to english
    }

    // Fetch rights categories
    arr1 = await constructRightsCategories(db, lang);
    arr1.sort((catA, catB) => (catA.id > catB.id ? 1 : -1)); // sort by cat id
    ImportedData.setRightsCategories(arr1);

    // Fetch subrights
    arr2 = await constructSubrights(db, lang);
    ImportedData.setSubRights(arr2);

    // Fetch organizations
    arr3 = await constructOrgs(db, lang);
    ImportedData.setOrganizations(arr3);

    // Fetch learn mores
    arr4 = await constructLearnMores(db, lang);
    ImportedData.setLearnMores(arr4);

    return; // return after all fetches are done
  }
}

function constructLearnMores(db, lang) {
  let ref = db.ref(lang + "/learn-mores/");
  var tempLearnMores = [];

  return ref.once("value").then(function (snapshot) {
    snapshot.forEach(function (data) {
      let temp = new learnMore(
        data.key,
        data.val().title,
        data.val().informationChunks
      );
      tempLearnMores.push(temp);
    });
    return tempLearnMores;
  });
}

function constructOrgs(db, lang) {
  let ref = db.ref(lang + "/organizations/");
  var tempOrgs = [];

  return ref.once("value").then(function (snapshot) {
    snapshot.forEach(function (data) {
      let temp = new Organization(
        data.key,
        data.val().name,
        data.val().abbrev,
        data.val().image,
        data.val().description,
        data.val().rights
      );
      tempOrgs.push(temp);
    });
    return tempOrgs;
  });
}

function constructSubrights(db, lang) {
  let ref = db.ref(lang + "/subrights/");
  var tempSubrights = [];

  return ref.once("value").then(function (snapshot) {
    snapshot.forEach(function (data) {
      let temp = new SubRight(
        data.val().id,
        data.val().categoryIds,
        data.val().title,
        data.val().img,
        data.val().emoji,
        data.val().learnMores,
        data.val().description,
        data.val().organizations
      );
      tempSubrights.push(temp);
    });
    return tempSubrights;
  });
}

function constructRightsCategories(db, lang) {
  let ref = db.ref(lang + "/rights-categories/");
  var tempRightsCategories = [];

  return ref.once("value").then(function (snapshot) {
    snapshot.forEach(function (data) {
      let img = getCategoryIcon(data); // get correct icon for ctegory
      let temp = new RightsCategory(
        data.val().id,
        data.val().title,
        img,
        data.val().subtitle,
        data.val().description
      );
      tempRightsCategories.push(temp);
    });
    return tempRightsCategories;
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
  }
  return img;
}
