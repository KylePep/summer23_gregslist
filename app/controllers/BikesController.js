import { AppState } from "../AppState.js"
import { bikesService } from "../services/BikesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"

function _drawBikes() {
  let template = ''
  let bikes = AppState.bikes
  bikes.forEach(b => template += b.cardTemplate)
  setHTML('bikesListing', template)
}

export class BikesController {
  constructor() {
    _drawBikes()
    console.log('bikes controller')
    AppState.on('bikes', _drawBikes)
  }

  createBike(event) {
    event.preventDefault()

    const form = event.target

    const bikeData = getFormData(form)

    bikesService.createBike(bikeData)
    form.reset()
  }

}