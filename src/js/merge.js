import fs from 'fs';
import { } from './lib';

import calaEvents from '../../data/exported/cala-US.json';
import usEvents from '../../data/exported/events-US.json';

let noCala = usEvents.filter((event) => {
    return !(event["Date Submitted"] == "" && event["Owner SubRegion"] == "CALA")
});

console.log(noCala);

let globalEvents = calaEvents.concat(noCala);
let ids = {};
let newJson = [];

for (let event of globalEvents) {
    let newEvent = {};
    const region = event["Owner SubRegion"];
    ids[region] = ids[region] == null ? 0 : ids[region] + 1;
    newEvent = event;
    newEvent["Id"] = `${event["Owner SubRegion"].toUpperCase().replace(' ', '-')}-${ids[region]}`;
    newJson.push(newEvent);
}

const content = JSON.stringify(newJson, null, 2);

fs.writeFile("./data/exported/events.json", content, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("file updated all events");
});