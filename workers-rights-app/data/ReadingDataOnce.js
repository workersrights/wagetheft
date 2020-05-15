import * as firebase from 'firebase';
import firebaseConfig from '../constants/ApiKeys';
import RightsCategory from "../models/rightsCategory";
import SubRight from '../models/subRight';
 
var loadedRightsCategories = [];
var loadedSubRights = [];
var loadedOrganizations = [];

// TODO: organizations
// TODO: learn mores

function constructSubrights(db) {
    var ref = db.ref('subrights/');
    var tempSubrights = [];

    ref.once("value").then(function(snapshot) {
        //console.log(snapshot.val());
        snapshot.forEach(function(data) {
            var temp = new SubRight(
                "data.val().id", // no id in the firebase data for now...
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
        // tempSubrights.forEach(function(sub) {
        //     console.log(sub.organizations);
        // });
        loadedSubRights = tempSubrights;
        //console.log("\n");        
    });
}

function constructRightsCategories(db) {
    var ref = db.ref('rights-categories/');
    var tempRightsCategories = [];

    ref.once("value").then(function(snapshot) {
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

        loadedRightsCategories = tempRightsCategories;
        //console.log(loadedRightsCategories);
        console.log("\n");        
    });
}

if (!firebase.apps.length) { // only load once
    firebase.initializeApp(firebaseConfig);
}

// Get a reference to the database service
var db = firebase.database();

// Import rights categories
constructRightsCategories(db);

// Importe subrights
constructSubrights(db);

class ImportedData {
    constructor() {
    }
  
    static count = 0;
    
    static increaseCount() {
      this.count += 1;
    }
  
    static getCount() {
      return this.count;
    }
  }
  
ImportedData.increaseCount();
console.log(Animal.getCount());
ImportedData.increaseCount();
console.log(Animal.getCount());