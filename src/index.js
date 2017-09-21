import './scss/styles.scss';
import {splitBrands, updateAbrv, toAbr} from './js/lib';

import brandsAbrev from '../data/config/cala-brands';
import newAbrev from '../data/config/new-abrv';
import events from '../data/src/cala.json';

const root = document.getElementById('root');

for (let event of events) {
    event["originalBrands"] = splitBrands(event["Brand"]);
    event["Brand"] = updateAbrv(toAbr(splitBrands(event["Brand"]), brandsAbrev), newAbrev);

    root.innerHTML += `
    <div id="event-${event["Id"]}" class="event">
      <small>${event["Id"]}</small>
      <p class="top">${event["originalBrands"]} <span class="count">${event["originalBrands"].length}/${event["Brand"].length}</span></p>
      <p class="bottom">${event["Brand"]}</p>
      </div>
    `;
}