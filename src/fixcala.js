var fs = require('fs');

var events = require('../data/cala');
var brandsAbrev = require('../data/cala-brands.js');
var newAbrev = require('../data/new-abrv.js');

var updateAbrv = (brands) => {
    for (var abrevs = [], i = 0; i < brands.length; i++) {
        abrevs[i] = newAbrev[brands[i]];
    }
    return abrevs;
}

var toAbr = (brands) => {
    for (var abrevs = [], i = 0; i < brands.length; i++) {
        abrevs = abrevs.concat(brandsAbrev[brands[i]]);
    }
    return abrevs;
}

var splitBrands = (brands) => {
    return brands.replace(/,\s/g, ',').split(',');
}

for (var i = 0; i < events.length; i++) {

    events[i]["Brand"] = toAbr(splitBrands(events[i]["Brand"]));
    events[i]["Brand"] = updateAbrv(events[i]["Brand"]).toString();
}

const content = JSON.stringify(events);

fs.writeFile("../data/data-updated.json", content, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 