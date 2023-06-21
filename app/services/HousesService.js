import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { saveState } from "../utils/Store.js"

function _saveHouses() {
  saveState('houses', AppState.houses)
}

class HousesService {
  constructor() {

  }
  deleteHouse(houseId) {
    let houses = AppState.houses
    let foundHouse = houses.findIndex(h => h.id == houseId)
    houses.splice(foundHouse, 1)
    AppState.emit('houses')

    _saveHouses()
  }

  createHouse(houseData) {
    const newHouse = new House(houseData)
    console.log(`🏠`, newHouse)
    AppState.houses.push(newHouse)
    AppState.emit('houses')

    _saveHouses()
  }
}

export const housesService = new HousesService()