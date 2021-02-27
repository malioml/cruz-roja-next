var counter = 'XXXXXX';

window.onload = function () {
  var counterElem = document.querySelector("#counter");
  if (counterElem) {
    counterElem.innerHTML = counter;
  }
};