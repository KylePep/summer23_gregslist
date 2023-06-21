export const BikesView =/*html*/ `
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



      <form onsubmit="app.BikesController.createBike(event)">

      <div class="mb-3">
        <label  class="form-label">image URL:</label>
        <input name="imgUrl" type="text" class="form-control" id="imgUrl" required>
      </div>

      <div class="mb-3">
        <label  class="form-label">Bike Name</label>
        <input name="name" type="text" class="form-control" id="name" required>
      </div>
      
      <div class="mb-3">
        <label  class="form-label">Bike color</label>
        <input name="color" type="text" class="form-control" id="color" required>
      </div>

      <div class="mb-3">
        <label for="price" class="form-label">Price</label>
        <input name="price" type="number" class="form-control" id="price" required>
      </div>

      <div class="mb-3">
        <label for="gears" class="form-label">gears</label>
        <input type="number" class="form-control" id="description" name= "gears">
      </div>


      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="hasBothTires" name="isHaunted">
        <label class="form-check-label" for="hasBothTires">Has both tires</label>
      </div>

      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
    </form>

      </div>
    </div>
  </div>
</div>
  <div id= "bikesListing">
  
  </div>
`