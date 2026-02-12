import { mockArray } from "./mockarray.js";

function getURLParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function createCarCard(car) {

  // Fallback image if missing
  const safeImg = car.imgURL || "./assets/images/cars/placeholder.png";

  return `
    <article class="car-card" aria-label="${car.brand} ${car.model} details">
      <div class="car-card__media">
        <img
          src="${safeImg}"
        />
      </div>

      <div class="car-card__body">
        <h1 class="car-card__title">${car.brand} ${car.model}</h1>
        <ul class="car-card__meta">
          <li><strong>Type:</strong> ${car.type}</li>
          <li><strong>Body style:</strong> ${car.bodystyle}</li>
          <li><strong>Year:</strong> ${car.year}</li>
          <li><strong>Seats:</strong> ${car.seats}</li>
          <li><strong>Lease type:</strong> ${car.leaseType}</li>
        </ul>
        <div class="car-card__price">
          <span class="car-card__price-label">Price:</span>
          <span class="car-card__price-value">£${Number(car.price).toLocaleString("en-GB")}</span>
        </div>
      </div>
    </article>
  `;
}

function injectCarData() {
    /* Get the car with the id corresponding to the URL parameter*/
    const id = getURLParam("id");
    const vehicle = mockArray.find(v => v.id == id);

    const carData = createCarCard(vehicle);

    var carContainer = document.getElementById("car-data-container");
    carContainer.innerHTML = carData;
}

injectCarData();