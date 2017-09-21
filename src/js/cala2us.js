import fs from 'fs';
import {} from './lib';

import events from '../../data/exported/cala-updated.json';

let newJson = [];

for (let event of events) {
    let newEvent = {};
    newEvent["Id"] = event["Id"];
    newEvent["Date Submitted"] = "";
    newEvent["Owner"] = event["Submitted By:"];
    newEvent["Owner SubRegion"] = "CALA";
    newEvent["Campaign Group"] = event[""];
    newEvent["Market Scope"] = event[""];
    newEvent["Destination - Featured Market"] = event["Markets Impacted"];
    newEvent["Market - more"] = event[""];
    newEvent["Ongoing Campaign"] = event[""];
    newEvent["Program Type"] = event[""];
    newEvent["Offer"] = event["Promotion Type"];
    newEvent["Segment"] = event["Consumer Target (Leisure, Group, Business Transient) "];
    newEvent["Campaign Name"] = event["Promotion/Campaign Name"];
    newEvent["Description"] = event["Objective and Description (Stakeholder facing promotion description)"];
    newEvent["Sell Start Date"] = event["In-Market Start Date"];
    newEvent["Sell End Date"] = event["In-Market End Date"];
    newEvent["Stay Start Date"] = event["In-Market Start Date"];
    newEvent["Stay End Date"] = event["In-Market End Date"];
    newEvent["Brand"] = event["Brand"];
    newEvent["Events"] = event["Events"];
    newEvent["Media"] = event["Media"];
    newEvent["Content"] = event["Content"];
    newEvent["Direct Mail"] = event["Direct Mail"];
    newEvent["Email"] = event["Email"];
    newEvent["On Property"] = event["On Property"];
    newEvent["Brand-dot-Com"] = (event["M.Com"] || event["SPG.com"]) ? "x" : null;
    newEvent["Loyalty "] = (event["Marriott Rewards"] || event["SPG Loyalty"] || event["The Ritz-Carlton Rewards"]) ? "x" : null;
    newEvent["PR"] = event["PR"];
    newEvent["Social"] = event["Social"];
    newEvent["Other Channels"] = event["Other Channels"];
    
    newJson.push(newEvent);
}

const content = JSON.stringify(newJson);

fs.writeFile("./data/exported/cala-US.json", content, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("US format cala file  saved");
});



















	