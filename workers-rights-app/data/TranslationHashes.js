var data = require('./workers-rights-46c43-export.json');
var keyToEnglish = {};

rightsCategoriesWork();

console.log(keyToEnglish);
keyToEnglishJson = JSON.stringify(keyToEnglish);
console.log(keyToEnglishJson);
saveDataToJsonFile(keyToEnglish, "data/translation.json");


// Write result to file
saveDataToJsonFile(data, "data/workers-data-v2.json");


function rightsCategoriesWork() {
    let rightsCategories = data["rights-categories"];
    for(var key in rightsCategories) {
        // Store english phrases
        let description = rightsCategories[key]["description"];
        let title = rightsCategories[key]["title"];
        let subtitle = rightsCategories[key]["subtitle"];

        // Get hashes
        let descriptionHash = stringToHash(description);
        let titleHash = stringToHash(title);
        let subtitleHash = stringToHash(subtitle);

        // Store hash/phrase in keyToEnglish
        keyToEnglish[descriptionHash] = {"en": description};
        keyToEnglish[titleHash] = {"en": title};
        keyToEnglish[subtitleHash] = {"en": subtitle};

        // Modify JSON object to have hash instead, persists
        rightsCategories[key]["description"] = descriptionHash;
        rightsCategories[key]["title"] = titleHash;
        rightsCategories[key]["subtitle"] = subtitleHash;
    }
}





// rightsCategories["-M7W8AQ5MB3_fGtnD3oi"] = "Hello"; // chance persists in data variable!!
// console.log(rightsCategories);
// console.log(data["rights-categories"]);

// https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
function stringToHash(string) {  
    var hash = 0; 
    if (string.length == 0) return hash; 
        
    for (i = 0; i < string.length; i++) { 
        char = string.charCodeAt(i); 
        hash = ((hash << 5) - hash) + char; 
        hash = hash & hash; 
    } 
        
    return hash.toString(); 
} 

function saveDataToJsonFile(data, filename) {
    const fs = require('fs');
    fs.writeFile(filename, JSON.stringify(data), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
}