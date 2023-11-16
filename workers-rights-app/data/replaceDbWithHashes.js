// /*
// This file takes an existing JSON file of data and replaces the relevant english strings by HASHES; the new
// file with hashes is then saved as a new JSON file.
// The hashes are stored, mapped to the corresponding english string, and then converted to a JSON file.
// I uploaded the json file manually to Firebase for simplicity... ONLY NEEDED TO BE DONE ONCE. NEVER AGAIN.
// */

// var data = require('./workers-rights-46c43-export.json');
// var keyToEnglish = {};

// rightsCategoriesWork();
// subrightsWork();
// learnMoresWork();

// //console.log(data["learn-mores"]);

// // Write result to file
// saveDataToJsonFile(data, "data/workers-data-with-hashes-vf.json");
// saveDataToJsonFile(keyToEnglish, "data/translation-vf.json");


// function rightsCategoriesWork() {
//     let rightsCategories = data["rights-categories"];
//     for(var key in rightsCategories) {
//         // Store english phrases
//         let description = rightsCategories[key]["description"];
//         let title = rightsCategories[key]["title"];
//         let subtitle = rightsCategories[key]["subtitle"];

//         // Get hashes
//         let descriptionHash = stringToHash(description);
//         let titleHash = stringToHash(title);
//         let subtitleHash = stringToHash(subtitle);

//         // Store hash/phrase in keyToEnglish
//         keyToEnglish[descriptionHash] = {"en": description};
//         keyToEnglish[titleHash] = {"en": title};
//         keyToEnglish[subtitleHash] = {"en": subtitle};

//         // Modify JSON object to have hash instead, persists
//         rightsCategories[key]["description"] = descriptionHash;
//         rightsCategories[key]["title"] = titleHash;
//         rightsCategories[key]["subtitle"] = subtitleHash;
//     }
// }

// function subrightsWork() {
//     /*
//     English text strings concerned: description, title
//     */
//     let subrights = data["subrights"];
//     for(var key in subrights) {
//         // Store english phrases
//         let description = subrights[key]["description"];
//         let title = subrights[key]["title"];

//         // Get hashes
//         let descriptionHash = stringToHash(description);
//         let titleHash = stringToHash(title);

//         // Store hash/phrase in keyToEnglish
//         keyToEnglish[descriptionHash] = {"en": description};
//         keyToEnglish[titleHash] = {"en": title};

//         // Modify JSON object to have hash instead, persists
//         subrights[key]["description"] = descriptionHash;
//         subrights[key]["title"] = titleHash;
//     }
// }

// function learnMoresWork() {
//     /*
//     English text strings concerned: title, objects in informationChunks
//     */
//     let learnmores = data["learn-mores"];
//     for(var key in learnmores) {
//         let title = learnmores[key]["title"];
//         let titleHash = stringToHash(title);
//         keyToEnglish[titleHash] = {"en": title};
//         learnmores[key]["title"] = titleHash;

//         for(var elem in learnmores[key]["informationChunks"]) { // eg. 0, 1, 2
//             for(var chunk in learnmores[key]["informationChunks"][elem]) { // eg. header, body
//                 let chunkText = learnmores[key]["informationChunks"][elem][chunk]; // actual text
//                 let chunkTextHash = stringToHash(chunkText);
//                 keyToEnglish[chunkTextHash] = {"en": chunkText};
//                 learnmores[key]["informationChunks"][elem][chunk] = chunkTextHash;
//             }
//         }
//     }
// }



// // rightsCategories["-M7W8AQ5MB3_fGtnD3oi"] = "Hello"; // chance persists in data variable!!
// // console.log(rightsCategories);
// // console.log(data["rights-categories"]);

// // https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
// function stringToHash(string) {  
//     var hash = 0; 
//     if (string.length == 0) return hash; 
        
//     for (i = 0; i < string.length; i++) { 
//         char = string.charCodeAt(i); 
//         hash = ((hash << 5) - hash) + char; 
//         hash = hash & hash; 
//     } 
        
//     return hash.toString(); 
// } 

// function saveDataToJsonFile(data, filename) {
//     const fs = require('fs');
//     fs.writeFile(filename, JSON.stringify(data), function(err) {
//         if(err) {
//             return console.log(err);
//         }
//         console.log("The file was saved!");
//     }); 
// }