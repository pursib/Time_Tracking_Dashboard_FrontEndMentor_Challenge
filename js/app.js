let timeframe = "weekly"; //default value
const container = document.querySelector(".container");
let regularCards; //Place holder for all cards(work,play,study,exercise,social,selfcare)

//1.Initialize menu
let menu = document.querySelectorAll(".menu-link");
menu.forEach((element) => {
  element.addEventListener("click", menuOnClick);
});

//2. Get JSON data and create cards
let data = {};
//------Functions
function menuOnClick(event) {
  menu.forEach((element) => element.classList.remove("menu-active"));
  event.target.classList.add("menu-active");
  timeframe = event.target.innerText.toLowerCase();

  updateCards(timeframe);
}

function updateCards(timeframe) {}
