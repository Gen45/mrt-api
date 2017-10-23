import fs from 'fs';
import { } from './lib';

import calaEvents from '../../data/exported/cala-US.json';
import usEvents from '../../data/exported/events-US.json';

let noCala = usEvents.filter((event) => {
    return !(event["Date Submitted"] == "" && event["Owner SubRegion"] == "CALA")
});

console.log(noCala);

let globalEvents = calaEvents.concat(noCala);

const content = JSON.stringify(globalEvents, null, 2);

fs.writeFile("./data/exported/events.json", content, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("file updated all events");
});