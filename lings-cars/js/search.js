//takes in the mockarray
import { mockArray } from "./mockarray";

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
  updateSearch();
});

sortOrderField.addEventListener("change", () => {
  sortOrder = sortOrderField.value;
  updateSearch();
});

makeField.addEventListener("input", () => {
  make = makeField.value;
  updateSearch();
});

modelField.addEventListener("input", () => {
  model = modelField.value;
  updateSearch();
});

styleField.addEventListener("change", () => {
  bodyStyle = styleField.value;
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
        if (make && newSearchArray[i].brand !== make) {
            removeThis = true;
        }

        if (model && newSearchArray[i].model !== model) {
            removeThis = true;
        }

        if (bodyStyle && newSearchArray[i].bodyStyle !== bodyStyle) {
            removeThis = true;
        }
        if (removeThis) {
            newSearchArray.splice(i,1);
        }
    }
    //returns the array
    return newSearchArray;

}
