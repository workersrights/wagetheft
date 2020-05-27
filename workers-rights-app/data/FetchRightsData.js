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
    static count = 0;
    
    // Setters
    static setRightsCategories(data) {
        this.rightsCategories = data;
        console.log(this.rightsCategories[5]);
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
    static increaseCount() {
        this.count += 1;
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
    static getCount() {
        return this.count;
    }

    static async importAllData() {
        if (!firebase.apps.length) { // only load once
            firebase.initializeApp(firebaseConfig);
        }
        // Get a reference to the database service
        var db = firebase.database();
        
        // Fetch rights categories
        arr1 = await constructRightsCategories(db);
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
    var ref = db.ref('learn-mores/');
    var tempLearnMores = [];

    return ref.once("value").then(function(snapshot) {
        snapshot.forEach(function(data) {
            var temp = new learnMore(
                data.val().id,
                data.val().title,
                data.val().image,
                data.val().informationChunks
            )
            tempLearnMores.push(temp);
        });
        return tempLearnMores;      
    });
}

function constructOrgs(db) {
    var ref = db.ref('organizations/');
    var tempOrgs = [];

    return ref.once("value").then(function(snapshot) {
        //console.log(snapshot.val());
        snapshot.forEach(function(data) {
            var temp = new Organization(
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
    var ref = db.ref('subrights/');
    var tempSubrights = [];

    return ref.once("value").then(function(snapshot) {
        snapshot.forEach(function(data) {
            var temp = new SubRight(
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
    var ref = db.ref('rights-categories/');
    var tempRightsCategories = [];

    return ref.once("value").then(function(snapshot) {
        snapshot.forEach(function(data) {
            var temp = new RightsCategory(
                data.val().id,
                data.val().title,
                data.val().image,
                data.val().subtitle,
                data.val().description
            );
            tempRightsCategories.push(temp);
        });
        return tempRightsCategories;  
    });
}