import {splitBrands, updateAbrv, toAbr} from './lib';
import './styles.scss';

import brandsAbrev from '../data/cala-brands';
import newAbrev from '../data/new-abrv';
import events from '../data/cala.json';

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