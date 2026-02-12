//takes in the mockarray
import { mockArray } from "./mockarray.js";

//getting elements from html
const sortField = document.getElementById("search-sort-field");
const sortOrderField = document.getElementById("search-sort-order");
const makeField = document.getElementById("search-make-field");
const modelField = document.getElementById("search-model-field");
const styleField = document.getElementById("search-style-field");

//initial variable set
var sortBy = sortField.value;
var sortOrder = sortOrderField.value;
var make = makeField.value;
var model = modelField.value;
var bodyStyle = styleField.value;

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

function updateSearch() {
    //create new array which is a copy of mockaray
    var newSearchArray = [...mockArray];
    //by price
    if (sortBy == "price") {
        //if ascending
        if (sortOrder == "asc") {
            newSearchArray.sort((a, b) => a.price - b.price);
        }
        //if descedning
        else {
            newSearchArray.sort((a, b) => b.price - a.price);
        }
    }
    //by year
    else {
        //if ascending
        if (sortOrder == "asc") {
            newSearchArray.sort((a, b) => a.year - b.year);
        }
        //if descending
        else {
            newSearchArray.sort((a, b) => b.year - a.year);
        }
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
        if (removeThis == true) {
            newSearchArray.splice(i,1);
        }
    }
    //returns the array
    displayVehicles(newSearchArray);
    return newSearchArray;
}

//for displaying the array
//recieve the div
const displayDiv = document.getElementById("search-results");
function displayVehicles(vehiclesToDisplay) {
    //clear the div
    displayDiv.innerHTML = '';
    //loop through each element of the search array
    for (var i = 0; i<vehiclesToDisplay.length;i++) {

        //make an a tag so its clickable
        const carA = document.createElement('a');
        carA.style.display = 'block';
        //this assigns the width for the entire result box
        carA.style.width = '60%';
        //this should be changed to the appropriate link by uncommenting line 121
        carA.href = "https://en.wikipedia.org/wiki/Lockheed_S-3_Viking";
        //carA.href = vehiclesToDisplay[i].pageLink;
        //make a div with its attributes
        const carDiv = document.createElement("div");
        carDiv.id = (vehiclesToDisplay[i].brand + i);
        const textBlock = document.createElement("div");
        textBlock.style.flexDirection = 'column';

        //image
        //I DO NOT KNOW HOW THIS FUNCTIONS, BUT IT DOES!
        const imageComponent = document.createElement('img');
        console.log(vehiclesToDisplay[i].imgURL);
        console.log(vehiclesToDisplay[i]);
        imageComponent.src = vehiclesToDisplay[i].imgURL;

        var imageDiv = document.createElement('div');
        imageDiv.style.display = "flex";
        imageDiv.style.flexDirection = 'row';
        //THIS CANNOT GO ABOVE 14!
        imageComponent.style.height = "14vw";
        imageComponent.style.width = "20vw";
        imageDiv.appendChild(imageComponent);
        carDiv.appendChild(imageDiv);

        //type
        const typePara = document.createElement('p');
        const typeText = document.createTextNode("Type: " + vehiclesToDisplay[i].type);
        typePara.append(typeText);
        textBlock.appendChild(typePara);

        //Brand
        const brandPara = document.createElement('p');
        const brandText = document.createTextNode("Brand: " + vehiclesToDisplay[i].brand);
        brandPara.append(brandText)
        textBlock.appendChild(brandPara);

        //Model
        const modelPara = document.createElement('p');
        const modelText = document.createTextNode("Model: " + vehiclesToDisplay[i].model);
        modelPara.append(modelText)
        textBlock.appendChild(modelPara);

        //year
        const yearPara = document.createElement('p');
        const yearText = document.createTextNode("Year: " + vehiclesToDisplay[i].year);
        yearPara.append(yearText)
        textBlock.appendChild(yearPara);

        //seats
        const seatsPara = document.createElement('p');
        const seatsText = document.createTextNode("Number of seats: " + vehiclesToDisplay[i].seats);
        seatsPara.append(seatsText);
        textBlock.appendChild(seatsPara);

        //price
        const pricePara = document.createElement('p');
        const priceText = document.createTextNode("Price: " + vehiclesToDisplay[i].price);
        pricePara.append(priceText);
        textBlock.appendChild(pricePara);

        //add the image
        //lines below should be uncommented when the images are added

        //lines above should be uncommented when images are added
        carDiv.appendChild(textBlock);
        carA.appendChild(carDiv);


        displayDiv.appendChild(carA);
    }
}


//this needs to be called 1 time at the start
updateSearch();
//THIS FUNCTION NEEDS TO BE CALLED INSIDE OF SEARCH.HTML!!!!
export {updateSearch}