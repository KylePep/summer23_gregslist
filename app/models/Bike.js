import { generateId } from "../utils/generateId.js"

export class Bike {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.price = data.price
    this.color = data.color
    this.gears = data.gears
    this.hasBothTires = data.hasBothTires
    this.imgUrl = data.imgUrl
  }

  get cardTemplate() {
    return `
    <div class="col-10 m-auto mb-3">
    <section  class="row m-auto text-bg-light py-3 elevation-5">
      <div class="d-flex">
        <div class= "">
          <img class="houseImg"
            src="${this.imgUrl}"
            alt="${this.name}">
        </div>
        <div class="px-2">
          <h2>
            The ${this.name}
          </h2>
          <h3>
            color: ${this.color}, number of gears: ${this.gears}
          </h3>
          <p></p>
          <h4>Price: $${this.price}</h4>
        </div>
      </div>
      
    </section>
    </div>
    `
  }
}