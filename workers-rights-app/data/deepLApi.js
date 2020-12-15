// /*
// This file contains some experimentation with the deepLAPI.
// Not critical to app! Will move file elsewhere eventually.
// */

// const fetch = require('node-fetch');

// /*
// Structure of res:
// res:  undefined
// {
//   translations: [ { detected_source_language: 'EN', text: 'Esto es una prueba' } ]
// }
// */

// // let res = getTranlation("Hello!");
// // console.log(res);

// var data = require('./translation-partial.json');
// getAllTranslations();

// async function getAllTranslations() {
//     var c = 0;
//     for(var key in data) {
//         if(!data[key]["es"]) {  // if no translation already
//             let englishText = data[key]["en"];
//             let spanishText = await getTranlation(englishText);
//             data[key]["es"] = spanishText;
//         } 
//         c += 1;
//         if(c == 100) { break } ;
//     }

//     saveDataToJsonFile(data, "data/complete-translation-vf.json");
// }



// // var obj = {
// //     translations: [ { detected_source_language: 'EN', text: 'Esto es una prueba.' } ]
// // };
// // console.log(obj["translations"][0]["text"]);


// // function translate(toBeTranslated) {
// //     let body = {
// //         "auth_key": "d9f8fec2-8c65-ee8f-ebc4-3f0eb36af637",
// //         "text": "This is a test",
// //         "target_lang": "ES",
// //          "source_lang": "EN"
// //     };
// //     console.log(JSON.stringify(body));
// //     return "";
// //     //return getTranlation(body);
// // }

// async function getTranlation(phrase) {
//     const response = await fetch("https://api.deepl.com/v2/translate", {
//         body: "auth_key=d9f8fec2-8c65-ee8f-ebc4-3f0eb36af637&text=" + phrase + "&source_lang=EN&target_lang=ES",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded"
//         },
//         method: "POST"
//       });
//     const jsonData = await response.json();

//     return jsonData["translations"][0]["text"];
// }

// function getTranlationOld(phrase) {
//     fetch("https://api.deepl.com/v2/translate", {
//         body: "auth_key=d9f8fec2-8c65-ee8f-ebc4-3f0eb36af637&text=" + phrase + "&source_lang=EN&target_lang=ES",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded"
//         },
//         method: "POST"
//       })
//       .then(response => response.json())
//       .then(data => {
//           console.log(data);
//           console.log(data["translations"][0]["text"]);
//           return data["translations"][0]["text"]; // return just translated text
//         })
//       .catch((error) => {
//           console.log(error);
//         });
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


// /*
// Promise { <pending> }
// (node:33590) UnhandledPromiseRejectionWarning: FetchError: invalid json response body at https://api.deepl.com/v2/translate reason: Unexpected end of JSON input
//     at /Users/manukastratta/Box Sync/STANFORD/courses/COURSES/SPRING-2020/CS52/OFFICIAL/wagetheft/workers-rights-app/node_modules/node-fetch/lib/index.js:272:32
//     at processTicksAndRejections (internal/process/task_queues.js:97:5)
// (node:33590) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 2)
// (node:33590) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.*/