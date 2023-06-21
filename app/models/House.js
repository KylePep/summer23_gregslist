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
  }

  get CardTemplate() {
    return `
      <div class="col-10 m-auto text-bg-primary d-flex py-3">
        <div>
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
        </div>
      </div>
    `
  }

}