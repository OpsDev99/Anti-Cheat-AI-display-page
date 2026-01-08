let searchButton = document.getElementById("searchbar");
let inputSearch = document.getElementById("search");
searchButton.addEventListener("click", function () {
  inputSearch.style.visibility = "visible";
  inputSearch.style.width = "80px";
  inputSearch.style.marginRight = "20px";
  inputSearch.style.transition = "1.5s";
});

const divContainer = document.getElementById("plan-container");
const normalButton = document.getElementById("standard-button");
const proButton = document.getElementById("pro-button");

if (divContainer) {
  divContainer.addEventListener("click", function (event) {
    let clickedElement = event.target;
    if (clickedElement.id === "standard-button") {
      alert("You standard");
    } else if (clickedElement.id === "pro-button") alert("You pro");
  });
}
