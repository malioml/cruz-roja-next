var counter = '9999999';

window.onload = function () {
  var counterElem = document.querySelector("#counter");
  if (counterElem) {
    counterElem.innerHTML = counter;
  }
};