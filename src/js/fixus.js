import fs from 'fs';
import { updateAbrv, splitBrands, fixDate, bool2X } from './lib';
import { oldAbrev } from '../../data/config/abrvs';
import currentEvents from '../../data/src/us-current.json';
import newEvents from '../../data/src/us-new.json';

let i = 0;
let newJson = [];
let events = currentEvents.concat(newEvents);
console.log(events);

for (let event of events) {

    let newEvent = {};
    newEvent["Id"] = `${event["Owner SubRegion"].toUpperCase().replace(' ', '-')}-${i++}`;
    newEvent = Object.assign(newEvent, event);
    newEvent["Owner SubRegion"] = newEvent["Owner SubRegion"].toUpperCase().replace(' ', '-');
    newEvent["Sell Start Date"] = fixDate(newEvent["Sell Start Date"]);
    newEvent["Sell End Date"] = fixDate(newEvent["Sell End Date"]);
    newEvent["Stay Start Date"] = fixDate(newEvent["Stay Start Date"]);
    newEvent["Stay End Date"] = fixDate(newEvent["Stay End Date"]);
    newEvent["Brand"] = updateAbrv(splitBrands(event["Brand"]), oldAbrev).toString();
    newEvent["Events"] = bool2X(newEvent["Events"]);
    newEvent["Media"] = bool2X(newEvent["Media"]);
    newEvent["Content"] = bool2X(newEvent["Content"]);
    newEvent["Direct Mail"] = bool2X(newEvent["Direct Mail"]);
    newEvent["Email"] = bool2X(newEvent["Email"]);
    newEvent["On Property"] = bool2X(newEvent["On Property"]);
    newEvent["Brand-dot-Com"] = bool2X(newEvent["Brand-dot-Com"]);
    newEvent["Loyalty"] = bool2X(newEvent["Loyalty"]);
    newEvent["PR"] = bool2X(newEvent["PR"]);
    newEvent["Social"] = bool2X(newEvent["Social"]);
    newEvent["Other Channels"] = event["Other Channels"] || "";
    
    newJson.push(newEvent);
}

const content = JSON.stringify(newJson, null, 2);

fs.writeFile("./data/exported/events-US.json", content, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("US FILE PEPIATED");
});