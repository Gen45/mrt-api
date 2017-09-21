import fs from 'fs';
import {splitBrands, updateAbrv, toAbr} from './lib';
import brandsAbrev from '../data/cala-brands';
import newAbrev from '../data/new-abrv';
import events from '../data/cala.json';

for (let event of events) {
    event["Brand"] = updateAbrv(toAbr(splitBrands(event["Brand"]), brandsAbrev), newAbrev).toString();
}

const content = JSON.stringify(events);

fs.writeFile("./data/data-updated.json", content, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 