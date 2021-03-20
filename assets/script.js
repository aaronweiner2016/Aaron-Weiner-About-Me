var toggle = document.querySelector("#nav-toggle");
var menu = document.querySelector("#nav-menu");

toggle.addEventListener("click", function () {
    // If the menu is showing
    if (menu.classList.contains("is-active")) {
        menu.classList.remove("is-active");
        toggle.classList.remove("is-active");
    } else {
        // if the menu is not showing
        menu.classList.add("is-active");
        toggle.classList.add("is-active");
    }
})

var plannerModalBtn = document.querySelector("#planner-modal-btn");
var plannerModal = document.querySelector("#planner-modal");
var exitPlanner = document.querySelector("#exit-planner");

plannerModalBtn.addEventListener("click", function(){
    plannerModal.classList.add("is-active");
});

exitPlanner.addEventListener("click", function(){
    plannerModal.classList.remove("is-active");
});

var stockModalBtn = document.querySelector("#stock-modal-btn");
var stockModal = document.querySelector("#stock-modal");
var exitStock = document.querySelector("#exit-stock");

stockModalBtn.addEventListener("click", function(){
    stockModal.classList.add("is-active");
});

exitStock.addEventListener("click", function(){
    stockModal.classList.remove("is-active");
});

var weatherModalBtn = document.querySelector("#weather-modal-btn");
var weatherModal = document.querySelector("#weather-modal");
var exitWeather = document.querySelector("#exit-weather");

weatherModalBtn.addEventListener("click", function(){
    weatherModal.classList.add("is-active");
});

exitWeather.addEventListener("click", function(){
    weatherModal.classList.remove("is-active");
});