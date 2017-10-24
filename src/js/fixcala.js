import fs from 'fs';
import {splitBrands, updateAbrv, toAbr, fixDate, empty, invertDate, fromRow} from './lib';
import brandsAbrev from '../../data/config/cala-brands';
import eventsSRC from '../../data/src/cala.json';

let events = fromRow(eventsSRC, 'CALA');

var i = 1;
for (let event of events) {
    event["Id"] = "CALA-" + i++;
    event["Region"] = "CALA";
    event["Brand"] = empty(event["Brand"]) ? "NONE" : event["Brand"];
    event["Brand"] = toAbr(splitBrands(event["Brand"]), brandsAbrev);
    event["Brand"] = event["Brand"].toString();
    event["In-Market Start Date"] = invertDate(fixDate(event["In-Market Start Date"]));
    event["In-Market End Date"] = invertDate(fixDate(event["In-Market End Date"]));
}

const content = JSON.stringify(events, null, 2);

fs.writeFile("./data/exported/cala-updated.json", content, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("file updated with abreviations");
});