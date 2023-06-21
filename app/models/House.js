import { generateId } from "../utils/generateId.js"

export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
    this.isHaunted = data.isHaunted;
  }

  get CardTemplate() {
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
            The ${this.name}, ${this.year}
          </h2>
          <h3>
            Sqft: ${this.sqft} Bedrooms: ${this.bedrooms} Bathrooms: ${this.bathrooms}
          </h3>
          <p>${this.description}</p>
          <h4>Price: $${this.price}</h4>
          <button onclick="app.HousesController.deleteHouse('${this.id}')" class="btn btn-danger">Remove Listing</button>
        </div>
      </div>
      ${this.ComputeIsHaunted}
    </section>
    </div>
    `
  }

  get ComputeIsHaunted() {
    if (this.isHaunted) {
      return `
      <div class="text-bg-dark text-center p-1">
        <p class="mb-0">~~👻 Haunted 👻~~</p>
      </div>
      `
    } {
      return ``
    }
  }

}