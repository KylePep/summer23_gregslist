import { AppState } from "../AppState.js"
import { Bike } from "../models/Bike.js"

class BikesService {
  createBike(bikeData) {
    const newBike = new Bike(bikeData)
    AppState.bikes.push(newBike)
    AppState.emit('bikes')

  }
  constructor() {

  }
}

export const bikesService = new BikesService()