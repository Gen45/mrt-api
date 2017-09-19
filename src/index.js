require('./styles.scss');
// var fs = require('fs');
var events = require('./cala');
var brandsAbrev = require('./cala-brands.js');

// var brands = JSON.parse(fs.readFileSync('../lib/brands.json', 'utf8'));

// var inputFile = 'events.json'; //process.argv[2];
// var outputFile = 'events-transformed.json';
// var field = process.argv[3];
// var eventNumber = process.argv[4];

// var events = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
// var transform = JSON.stringify(events)

// fs.writeFile(outputFile, transform, function(err) {
//     if(err) {
//         return console.log(err);
//     }

//     console.log("The file was saved!");
// });

// var toAbr = (brands) => {
//     for (var i = 0; i < brands.length; i++) {
//         return brandsAbrev[brands[i]] + ((brands.length > 1) ? ("," + toAbr(brands.splice(1))) : "");
//     }
// }
// console.log(brandsAbrev);

var toAbr = (brands) => {
    var abrevs = [];
    for (var i = 0; i < brands.length; i++) {
        abrevs[i] = brandsAbrev[brands[i]];
    }
    return abrevs;
}

// var toAbr = (b) => {
//     console.log(b);
//     return brandsAbrev[b[0]] + ((b.length > 1) ? ("," + toAbr(b.splice(1))) : "");
// }

// var toAbr = ( brands ) => {
//   return brands.reduce((list, brand) => {
//     return `${list}, ${brandsAbrev[brand]}`;
//   })
// }

for (var i = 0; i < events.length; i++) {

    events[i]["Brand"] = events[i]["Brand"].replace(/,\s/g, ',').split(',');
    events[i]["originalBrands"] = events[i]["Brand"]
    events[i]["Brand"] = toAbr(events[i]["Brand"]);

    // document.write(`<p>${events[i]["Brand"]}</p>`);

    document.write(`
    <div>
      <small>${events[i]["Id"]}</small>
      <p class="top">${events[i]["originalBrands"]} <span class="count">${events[i]["Brand"].length}</span></p>
      <p class="bottom">${events[i]["Brand"]}</p>
    </div>
    `);
}