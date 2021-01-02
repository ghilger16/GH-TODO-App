"use strict";

/// element list
let ul = document.querySelector(".list");
let li = document.getElementById("items");
let form = document.getElementById("form");

// creates list item element with button
const addLi = function (text) {
  /// user list item element
  let newItem = text;
  let newLi = document.createElement("LI");
  let newText = document.createTextNode(`✏️ ${newItem}`);
  newLi.setAttribute("id", "newLi");
  newLi.appendChild(newText);
  li.appendChild(newLi);

  const span = document.createElement("span");
  newLi.appendChild(span);

  // item button element
  let newBtn = document.createElement("button");
  newBtn.innerText = "❌";
  newBtn.setAttribute("id", "button");
  newLi.appendChild(newBtn);
  span.appendChild(newBtn);

  // list item event
  let isChecked = false;
  newLi.addEventListener("click", () => {
    isChecked = !isChecked;
    isChecked === true
      ? (newLi.style.textDecoration = "line-through")
      : (newLi.style.textDecoration = "none");
  });

  // button event
  newBtn.addEventListener("click", () => {
    newLi.parentNode.removeChild(newLi);
  });
};

// form event that performs addLi funciton to user's input
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let todoText = document.getElementById("form-text");
  if (todoText.value === "") {
    alert("Please fill out the input field before submitting");
  } else {
    addLi(todoText.value);
    todoText.value = "";
  }
});
