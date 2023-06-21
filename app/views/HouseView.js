export const HouseView = /*html*/`
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      List you house!
    </button>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Fill out this form</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">



          <form onsubmit="app.HousesController.createHouse(event)">

          <div class="mb-3">
            <label  class="form-label">image URL:</label>
            <input name="imgUrl" type="text" class="form-control" id="imgUrl" required>
          </div>

          <div class="mb-3">
            <label  class="form-label">House Name</label>
            <input name="name" type="text" class="form-control" id="name" required>
          </div>
          

          <div class="mb-3">
            <label for="year" class="form-label">Year</label>
            <input name="year" type="number" class="form-control" id="year" required>
          </div>

          <div class="mb-3">
            <label for="bedrooms" class="form-label">Bedrooms</label>
            <input name="bedrooms" type="number" class="form-control" id="bedrooms" required>
          </div>

          <div class="mb-3">
            <label for="bathrooms" class="form-label">Bathrooms</label>
            <input name="bathrooms" type="number" class="form-control" id="bathrooms" required>
          </div>
      
          <div class="mb-3">
            <label for="sqft" class="form-label">Sqft</label>
            <input name="sqft"type="number" class="form-control" id="sqft" required>
          </div>

          <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <input name="price" type="number" class="form-control" id="price" required>
          </div>

          <div class="mb-3">
            <label for="description" class="form-label">description</label>
            <input type="text-area" class="form-control" id="description" name= "description">
          </div>


          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="isHuanted" name="isHaunted">
            <label class="form-check-label" for="isHuanted">Haunted</label>
          </div>

          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
        </form>



          </div>
        </div>
      </div>
    </div>

    <div id="houseListing" class="container-fluid">
      <section  class="row">
        <div class="col-10 m-auto text-bg-primary d-flex py-3">
          <div>
            <img class="houseImg"
              src="https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="haunted house">
          </div>
          <div class="px-2">
            <h2>
              Name Year
            </h2>
            <h3>
              SqFt Bedrooms Bathrooms
            </h3>
            <p>Description: Lorem ipsum dolor sit amet.</p>
            <h4>Price</h4>
          </div>
        </div>
      </section>
    </div>
`