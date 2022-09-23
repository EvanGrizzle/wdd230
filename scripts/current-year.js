let d = new Date();
let year = d.getFullYear();

let yearElement = document.getElementById(".current-year")
document.querySelector(yearElement).textContent = year;