"use strict";

const form = document.querySelector("#item-form");
const itemInput = document.querySelector("#item");
const list = document.querySelector("#list");
const clearBtn = document.querySelector("#clear-button");
const clearDoneBtn = document.querySelector("#clear-done");

// Deletes an item
const deleteItem = (e) => {
  const index = +e.currentTarget.id;
  itemsArray.splice(index, 1);
  updateLocalAndHTML();
};

// Toggles chechbox of an item
const crossItem = (e) => {
  const index = +e.currentTarget.id.slice(4);
  itemsArray[index].done = !itemsArray[index].done;
  updateLocalAndHTML();
};

// Adds an item to HTML
const renderItem = (item, index) => {
  const li = document.createElement("li");
  if (item.done) li.classList.add("done");

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", `item${index}`);
  if (item.done) input.checked = true;

  const label = document.createElement("label");
  label.setAttribute("for", `item${index}`);
  label.textContent = item.text;

  const btn = document.createElement("button");
  btn.setAttribute("id", `${index}`);
  btn.classList.add("delete-item");
  btn.innerHTML = `<span class="material-icons">
  close</span>`;

  // Event listeners
  input.addEventListener("change", crossItem);
  btn.addEventListener("click", deleteItem);

  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(btn);

  list.appendChild(li);
};

// Add all items to HTML
const renderList = () => {
  // Clear the HTML
  while (list.firstChild) list.removeChild(list.firstChild);
  // Toggle clear buttons visibility
  if (itemsArray.length) {
    // Possible improvement: use buttons-container
    clearBtn.classList.remove("hidden");
    clearDoneBtn.classList.remove("hidden");
  } else {
    clearBtn.classList.add("hidden");
    clearDoneBtn.classList.add("hidden");
  }
  // Render all items
  itemsArray.forEach((item, index) => {
    renderItem(item, index);
  });
};

// Adds an item to the list
const addItem = (e) => {
  e.preventDefault();
  // Add item to itemsArray
  itemsArray.push({ text: itemInput.value, done: false });
  // Update localStorage and HTML
  updateLocalAndHTML();
  form.reset();
};

// Clears the list
const clearList = () => {
  // Clear array
  itemsArray = [];
  // Update localStorage and HTML with itemsArray
  updateLocalAndHTML();
};

// Clears items that are checked
const clearDone = () => {
  // Remove checked items from itemsArray
  itemsArray = itemsArray.filter((item) => !item.done);
  // Update localStorage and HTML with itemsArray
  updateLocalAndHTML();
};

// Updates localStorage and HTML with data from itemsArray
const updateLocalAndHTML = () => {
  localStorage.setItem("items", JSON.stringify(itemsArray));
  renderList();
};

/* EVENT LISTENERS */

form.addEventListener("submit", addItem);

clearBtn.addEventListener("click", clearList);

clearDoneBtn.addEventListener("click", clearDone);

/* ACTION */

// Fetch list items from localStorage
let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

// Render list to page
renderList();
