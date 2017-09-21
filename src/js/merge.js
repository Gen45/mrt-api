import fs from 'fs';
import { } from './lib';

import calaEvents from '../../data/exported/cala-US.json';
import usEvents from '../../data/src/us.json';

let noCala = usEvents.filter((event) => {
    return !(event["Date Submitted"] == "" && event["Owner SubRegion"] == "CALA")
});

console.log(noCala);

let globalEvents = calaEvents.concat(noCala);

// for (let event of events) {
//     event["Brand"] = toAbr(splitBrands(event["Brand"]), brandsAbrev);
//     // event["Brand"] = updateAbrv(event["Brand"]).toString();
//     event["Brand"] = event["Brand"].toString();
// }

const content = JSON.stringify(globalEvents, null, 2);

fs.writeFile("./data/exported/events.json", content, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("file updated all events");
});