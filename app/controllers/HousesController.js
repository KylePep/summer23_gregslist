import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
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
    AppState.on('houses', _drawHouses)
  }

  async deleteHouse(houseId) {
    const wantsToDelete = await Pop.confirm('Do you really want to delete this listing?')

    if (!wantsToDelete) {
      return
    }

    housesService.deleteHouse(houseId)
  }

  createHouse(event) {
    event.preventDefault()
    console.log('Did the form submit?');
    const form = event.target

    const houseData = getFormData(form)

    houseData.isHaunted = houseData.isHaunted == 'on' ? true : false

    housesService.createHouse(houseData)
    form.reset()
  }

}