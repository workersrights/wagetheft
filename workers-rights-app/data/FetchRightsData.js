import * as firebase from 'firebase';
import firebaseConfig from '../constants/MyApiKeys';
import RightsCategory from "../models/rightsCategory";
import SubRight from '../models/subRight';
import Organization from '../models/organization';
import learnMore from '../models/learnMore';
 
export default class ImportedData {
    constructor() { }
  
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

    static async importAllData() {
        if (!firebase.apps.length) { // only load once
            firebase.initializeApp(firebaseConfig);
        }
        // Get a reference to the database service
        var db = firebase.database();
        
        // Fetch rights categories
        arr1 = await constructRightsCategories(db);
        arr1.sort((catA, catB) => (catA.id > catB.id) ? 1 : -1); // sort by cat id
        ImportedData.setRightsCategories(arr1);

        // Fetch subrights 
        arr2 = await constructSubrights(db);
        ImportedData.setSubRights(arr2);

        // Fetch organizations
        arr3 = await constructOrgs(db);
        ImportedData.setOrganizations(arr3);

        // Fetch learn mores 
        arr4 = await constructLearnMores(db);
        ImportedData.setLearnMores(arr4);

        return; // return after all fetches are done
    }
}

function constructLearnMores(db) {
    let ref = db.ref('learn-mores/');
    var tempLearnMores = [];

    return ref.once("value").then(function(snapshot) {
        snapshot.forEach(function(data) {
            let temp = new learnMore(
                data.val().id,
                data.val().title,
                data.val().informationChunks
            )
            tempLearnMores.push(temp);
        });
        return tempLearnMores;      
    });
}

function constructOrgs(db) {
    let ref = db.ref('organizations/');
    var tempOrgs = [];

    return ref.once("value").then(function(snapshot) {
        //console.log(snapshot.val());
        snapshot.forEach(function(data) {
            let temp = new Organization(
                data.val().id,
                data.val().title,
                data.val().image,
                data.val().description,
                data.val().link,
                data.val().rights
            )
            tempOrgs.push(temp);
        });
        return tempOrgs;        
    });
}

function constructSubrights(db) {
    let ref = db.ref('subrights/');
    var tempSubrights = [];

    return ref.once("value").then(function(snapshot) {
        snapshot.forEach(function(data) {
            let temp = new SubRight(
                data.val().id, 
                data.val().categoryIds,
                data.val().title,
                data.val().img,
                data.val().emoji,
                data.val().learnMores,
                data.val().description,
                data.val().organizations
            )
            tempSubrights.push(temp);
        });
        return tempSubrights;      
    });
}

function constructRightsCategories(db) {
    let ref = db.ref('rights-categories/');
    var tempRightsCategories = [];

    return ref.once("value").then(function(snapshot) {
        snapshot.forEach(function(data) {
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
    if(data.val().image == "hiring-icon.png") {
        img = require("../images/hiring-icon.png");
    } else if(data.val().image == "mistreatment-icon.png") {
        img = require("../images/mistreatment-icon.png");
    } else if(data.val().image == "payments-icon.png") {
        img = require("../images/payments-icon.png");
    } else if(data.val().image == "health-icon.png") {
        img = require("../images/health-icon.png");
    } else if(data.val().image == "unions-icon.png") {
        img = require("../images/unions-icon.png");
    } else if(data.val().image == "unemployment-icon.png") {
        img = require("../images/unemployment-icon.png");
    } 
    return img;
}