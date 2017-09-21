import fs from 'fs';
import {splitBrands, updateAbrv, toAbr} from './lib';
import brandsAbrev from '../../data/config/cala-brands';
import newAbrev from '../../data/config/new-abrv';
import events from '../../data/src/cala.json';

for (let event of events) {
    event["Brand"] = toAbr(splitBrands(event["Brand"]), brandsAbrev);
    // event["Brand"] = updateAbrv(event["Brand"]).toString();
    event["Brand"] = event["Brand"].toString();
}

const content = JSON.stringify(events, null, 2);

fs.writeFile("./data/exported/cala-updated.json", content, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("file updated with abreviations");
});