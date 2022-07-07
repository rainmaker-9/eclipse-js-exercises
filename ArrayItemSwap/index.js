let firstArray = ["Volvo", "Saab", "Opel", "Audi"];
let secondArray = [];
const firstArrayEle = document.getElementById("firstArray");
const secondArrayEle = document.getElementById("secondArray");
const moveToFirst = document.getElementById("moveToFirst");
const moveToSecond = document.getElementById("moveToSecond");

window.onload = function () {
  loadArrays();
};

function loadArrays() {
  populateArray(firstArray, firstArrayEle);
  populateArray(secondArray, secondArrayEle);
}

function populateArray(array, target) {
  target.innerHTML = "";
  if (array && target && array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      let listItem = document.createElement("option");
      listItem.value = listItem.textContent = array[i];
      target.appendChild(listItem);
    }
  }
}

moveToFirst.addEventListener("click", (e) => {
  if (
    secondArrayEle.options.length > 0 &&
    secondArrayEle.selectedOptions.length > 0
  ) {
    Array.from(secondArrayEle.selectedOptions).forEach((option) => {
      secondArray = secondArray.filter((item) => item !== option.value);
      firstArray.push(option.value);
    });
    loadArrays();
  }
});

moveToSecond.addEventListener("click", (e) => {
  if (
    firstArrayEle.options.length > 0 &&
    firstArrayEle.selectedOptions.length > 0
  ) {
    Array.from(firstArrayEle.selectedOptions).forEach((option) => {
      firstArray = firstArray.filter((item) => item !== option.value);
      secondArray.push(option.value);
    });
    loadArrays();
  }
});
