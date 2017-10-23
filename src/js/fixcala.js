import fs from 'fs';
import {splitBrands, updateAbrv, toAbr, fixDate} from './lib';
import brandsAbrev from '../../data/config/cala-brands';
import newAbrev from '../../data/config/abrvs';
import events from '../../data/src/cala.json';

for (let event of events) {
    event["Brand"] = toAbr(splitBrands(event["Brand"]), brandsAbrev);
    event["Brand"] = event["Brand"].toString();
    event["In-Market Start Date"] = fixDate(event["In-Market Start Date"]);
    event["In-Market End Date"] = fixDate(event["In-Market End Date"]);
}

const content = JSON.stringify(events, null, 2);

fs.writeFile("./data/exported/cala-updated.json", content, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("file updated with abreviations");
});

