
const WALK_SPEED = 3.6;
const BICYCLE_SPEED = 20.1;
const CAR_SPEED = 70;
const PLANE_SPEED = 800;


/*
 * @params distance -> integer
 * @params speed -> integer
 * @return time -> string
 */

function calculateTime(distance, speed) {
    let result = distance / speed;

    let hours = Math.floor(result);
    result = (result - hours) * 60;

    let minute = Math.floor(result);
    result = (result - minute) * 60;

    let seconds = Math.floor(result);

    return `${hours} soat ${minute} minut ${seconds} sekund`
}




var myFormEl = document.querySelector(".myForm");
var distanceInputEl = document.querySelector(".distance");

var walkEl = document.querySelector(".walk");
var bicycleEl = document.querySelector(".bicycle");
var carEl = document.querySelector(".car");
var planeEl = document.querySelector(".plane");



myFormEl.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("Form is ready");

    let masofa = distanceInputEl.value - 0;
    walkEl.textContent = calculateTime(masofa, WALK_SPEED);
    bicycleEl.textContent = calculateTime(masofa, BICYCLE_SPEED);
    carEl.textContent = calculateTime(masofa, CAR_SPEED);
    planeEl.textContent = calculateTime(masofa, PLANE_SPEED);

})
