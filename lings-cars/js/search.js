//takes in the mockarray
import { mockArray } from "./mockarray.js";

//getting elements from html
const sortField = document.getElementById("search-sort-field");
const sortOrderField = document.getElementById("search-sort-order");
const makeField = document.getElementById("search-make-field");
const modelField = document.getElementById("search-model-field");
const styleField = document.getElementById("search-style-field");
const leaseField = document.getElementById('search-lease-field');

//initial variable set
var sortBy = sortField.value;
var sortOrder = sortOrderField.value;
var make = makeField.value;
var model = modelField.value;
var bodyStyle = styleField.value;
var lease = leaseField.value;

// listeners which check for when someone updates the box
sortField.addEventListener("change", () => {
  sortBy = sortField.value;
  console.log("Sort Field Updated")
  updateSearch();
});

sortOrderField.addEventListener("change", () => {
  sortOrder = sortOrderField.value;
  console.log("Sort Order Updated")
  updateSearch();
});

makeField.addEventListener("input", () => {
  make = makeField.value;
  console.log("Make Updated");
  updateSearch();
});

modelField.addEventListener("input", () => {
  model = modelField.value;
  console.log("Model Updated");
  updateSearch();
});

styleField.addEventListener("change", () => {
  bodyStyle = styleField.value;
  console.log("Style Updated")
  updateSearch();
});

leaseField.addEventListener("change", () => {
  lease = leaseField.value;
  console.log("Lease Updated")
  updateSearch();
});

function updateSearch() {
    //create new array which is a copy of mockaray
    var newSearchArray = [...mockArray];

    // Sort Field
    if (sortBy == "price") {
        newSearchArray.sort((a, b) => a.price - b.price);
    }
    else if (sortBy == "year") {
            newSearchArray.sort((a, b) => a.year - b.year);
    }

    // Sort Order
    if (sortOrder == "desc") {
        newSearchArray.reverse()
    }

    //loop backwards so that removing the object doesnt screw with indexing
    for (var i = newSearchArray.length-1 ;i>=0;i--) {
        //filters based on model, only filters when someone has data in the field
        var removeThis = false;
        if (make && (newSearchArray[i].brand != make)) {
            removeThis = true;
        }

        if (model && (newSearchArray[i].model != model)) {
            removeThis = true;
        }

        if (bodyStyle != "all" && (newSearchArray[i].bodystyle != bodyStyle)) {
            removeThis = true;
        }
        console.log(lease);
        if (lease != "all" && (newSearchArray[i].leaseType != lease)){
            removeThis = true;
        }
        if (removeThis == true) {
            newSearchArray.splice(i,1);
        }
    }
    //returns the array
    displayVehicles(newSearchArray);
    return newSearchArray;
}
//for updating the link
function createURL (vehicleArray,id) {

    //find the index 
    for (var i = 0; i<vehicleArray.length;i++) {
        if (vehicleArray[i].id == id) {
            var vehicleIndex = i;
            break;
        }
    }
    //make the URL
    var url = "./vehicle.html?id=";
    url = url.concat(vehicleArray[vehicleIndex].id)
    return url;
}

//for displaying the array
//recieve the div
const displayDiv = document.getElementById("search-results");
function displayVehicles(vehiclesToDisplay) {
    //clear the div
    displayDiv.innerHTML = '';
    //loop through each element of the search array
    vehiclesToDisplay.forEach((car, i) => {
        
        // clickable wrapper
        const carA = document.createElement('a');
        carA.href = createURL(vehiclesToDisplay,car.id) || "#";
        carA.className = "car-card";   //link to class

        // car image
        const img = document.createElement('img');
        img.src = car.imgURL || "./assets/images/placeholder-car.png";

        // title
        const title = document.createElement('h3');
        title.textContent = `${car.brand} ${car.model}`;

        // info row
        const info = document.createElement('p');
        info.textContent = `${car.year} • ${car.type} • ${car.seats} seats`;

        // price monthly)
        const price = document.createElement('h2');
        price.textContent = `£${car.price}/mo`;

        // assembly of constants
        carA.append(img, title, info, price);
        displayDiv.appendChild(carA);
        
    }); 
}


//this needs to be called 1 time at the start
updateSearch();
//THIS FUNCTION NEEDS TO BE CALLED INSIDE OF SEARCH.HTML!!!!
export {updateSearch}