"use strict";

let ul = document.querySelector(".list");
let li = document.getElementById("items");
let form = document.getElementById("form");
let itemList = document.getElementById("form-text");
let btn = document.getElementById("btn");

const addLi = function (text) {
  let newItem = text;
  let newLi = ul.appendChild(
    document.createElement("LI").appendChild(document.createTextNode(text))
      .parentNode
  );

  //   let newBtn = (newLi.appendChild(document.createElement("button")).innerText =
  //     "done");
  //   newBtn.addEventListener("click", function () {});
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let formText = new addLi(document.getElementById("form-text").value);
});
console.log(li.childNodes);
