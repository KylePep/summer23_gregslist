import { Car } from "./models/Car.js"
import { House } from "./models/House.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./models/Car.js').Car[]} */
  cars = loadState('cars', [Car])

  /** @type {import('./models/House.js').House[]} */

  // {
  //   this.id = data.id || generateId()
  //   this.year = data.year
  //   this.name = data.name
  //   this.bedrooms = data.bedrooms
  //   this.bathrooms = data.bathrooms
  //   this.sqft = data.sqft
  //   this.price = data.price
  //   this.description = data.description
  //   this.imgUrl = data.imgUrl
  // }


  houses = [
    new House({ year: 1985, name: 'jefiston', bedrooms: 3, bathrooms: 1, sqft: 1000, price: 1000000, description: 'A whole house', imgUrl: 'https://plus.unsplash.com/premium_photo-1679002511417-6fbc566712aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' }),
    new House({ year: 2020, name: 'borgihoosh', bedrooms: 6, bathrooms: 2, sqft: 20000, price: 100, description: "Haunted by the ghost of that one guy you didn't like at the park that one time", imgUrl: 'https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' })
  ]

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
