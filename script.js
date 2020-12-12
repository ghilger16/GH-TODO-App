"use strict";

let ul = document.querySelector(".list");
let li = document.getElementById("item");
let form = document.getElementById("form");

const addToList = function (a) {
  let newItem = a;
  let newLi = document.createElement("LI");
  let text = document.createTextNode(newItem);
  newLi.appendChild(text);
  ul.appendChild(newLi);
};

let enterText = form.addEventListener("submit", function (e) {
  if (e.key === "Enter") {
    let formText = document.getElementById("form-text").value;
    addToList(formText);
  }
});

// const getFormText = function () {
//   let formText = document.getElementById("form-text").value;
//   addToList(formText);
// };
