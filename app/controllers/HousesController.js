import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

function _drawHouses() {
  let template = ''
  let houses = AppState.houses.forEach(h => {
    template += h.CardTemplate
  })
  setHTML('houseListing', template)
}
export class HousesController {
  constructor() {
    _drawHouses()
    console.log('HousesController loaded');
  }
}