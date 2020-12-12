"use strict";

let ul = document.querySelector(".list");
let li = document.getElementById("item");

const addToList = function (a) {
  let newItem = a;
  let newLi = document.createElement("LI");
  let text = document.createTextNode(newItem);
  newLi.appendChild(text);
  ul.appendChild(newLi);
};

addToList("something to do");

let formText = document.querySelector('input[type="text"]');

formText.addEventListener("keydown", addToList());
