"use strict";

let ul = document.querySelector(".list");
let li = document.getElementById("items");
let form = document.getElementById("form");
let itemList = document.getElementById("form-text");
let btn = document.getElementById("btn");

const addLi = function (text) {
  /// user list item element
  let newItem = text;
  let newLi = document.createElement("LI");
  let newText = document.createTextNode(`✏️ ${newItem}`);
  newLi.setAttribute("id", "newLi");
  newLi.appendChild(newText);
  li.appendChild(newLi);

  // item button element
  let newBtn = document.createElement("button");
  newBtn.innerText = "❌";
  newBtn.setAttribute("id", "button");
  newLi.appendChild(newBtn);

  // list item event
  newLi.addEventListener("click", () => {
    newLi.style.textDecoration = "line-through";
  });

  // button event
  newBtn.addEventListener("click", () => {
    newLi.parentNode.removeChild(newLi);
  });
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let formText = new addLi(document.getElementById("form-text").value);
  document.getElementById("form-text").value = "";
});
