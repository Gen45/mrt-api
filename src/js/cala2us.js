import fs from 'fs';
// import {indent} from './lib';

import events from '../../data/exported/cala-updated.json';

let newJson = [];

for (let event of events) {
    let newEvent = {
    "Id": event["Id"],
    "Date Submitted": "",
    "Owner": event["Submitted By:"],
    "Owner SubRegion": "CALA",
    "Campaign Group": "",
    "Market Scope": "",
    "Destination - Featured Market": event["Markets Impacted"],
    "Market - more": "",
    "Ongoing Campaign": "",
    "Program Type": "",
    "Offer": event["Promotion Type"],
    "Segment": event["Consumer Target (Leisure, Group, Business Transient) "],
    "Campaign Name": event["Promotion/Campaign Name"],
    "Description": event["Objective and Description (Stakeholder facing promotion description)"],
    "Sell Start Date": event["In-Market Start Date"],
    "Sell End Date": event["In-Market End Date"],
    "Stay Start Date": event["In-Market Start Date"],
    "Stay End Date": event["In-Market End Date"],
    "Brand": event["Brand"],
    "Events": event["Events"],
    "Media": event["Media"],
    "Content": event["Content"],
    "Direct Mail": event["Direct Mail"],
    "Email": event["Email"],
    "On Property": event["On Property"],
    "Brand-dot-Com": (event["M.Com"] || event["SPG.com"]) ? "x" : null,
    "Loyalty ": (event["Marriott Rewards"] || event["SPG Loyalty"] || event["The Ritz-Carlton Rewards"]) ? "x" : null,
    "PR": event["PR"],
    "Social": event["Social"],
    "Other Channels": event["Other Channels"] || ""};
    
    newJson.push(newEvent);
}

const content = JSON.stringify(newJson, null, 2);

fs.writeFile("./data/exported/cala-US.json", content, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("US format cala file  saved");
});