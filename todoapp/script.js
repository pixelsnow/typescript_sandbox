var form = document.querySelector("#item-form");
var itemInput = document.querySelector("#item");
var list = document.querySelector("#list");
var clearBtn = document.querySelector("#clear-button");
var clearDoneBtn = document.querySelector("#clear-done");
// Deletes an item
var deleteItem = function (e) {
    var index = +e.currentTarget.id;
    itemsArray.splice(index, 1);
    updateLocalAndHTML();
};
// Toggles chechbox of an item
var crossItem = function (e) {
    var index = +e.currentTarget.id.slice(4);
    itemsArray[index].done = !itemsArray[index].done;
    updateLocalAndHTML();
};
// Adds an item to HTML
var renderItem = function (item, index) {
    var li = document.createElement("li");
    if (item.done)
        li.classList.add("done");
    var input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", "item".concat(index));
    if (item.done)
        input.checked = true;
    var label = document.createElement("label");
    label.setAttribute("for", "item".concat(index));
    label.textContent = item.text;
    var btn = document.createElement("button");
    btn.setAttribute("id", "".concat(index));
    btn.classList.add("delete-item");
    btn.innerHTML = "<span class=\"material-icons\">\n  close</span>";
    // Event listeners
    input.addEventListener("change", crossItem);
    btn.addEventListener("click", deleteItem);
    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(btn);
    list.appendChild(li);
};
// Add all items to HTML
var renderList = function () {
    // Clear the HTML
    while (list.firstChild)
        list.removeChild(list.firstChild);
    // Toggle clear buttons visibility
    if (itemsArray.length) {
        // Possible improvement: use buttons-container
        clearBtn.classList.remove("hidden");
        clearDoneBtn.classList.remove("hidden");
    }
    else {
        clearBtn.classList.add("hidden");
        clearDoneBtn.classList.add("hidden");
    }
    // Render all items
    itemsArray.forEach(function (item, index) {
        renderItem(item, index);
    });
};
// Adds an item to the list
var addItem = function (e) {
    e.preventDefault();
    // Add item to itemsArray
    itemsArray.push({ text: itemInput.value, done: false });
    // Update localStorage and HTML
    updateLocalAndHTML();
    form.reset();
};
// Clears the list
var clearList = function () {
    // Clear array
    itemsArray = [];
    // Update localStorage and HTML with itemsArray
    updateLocalAndHTML();
};
// Clears items that are checked
var clearDone = function () {
    // Remove checked items from itemsArray
    itemsArray = itemsArray.filter(function (item) { return !item.done; });
    // Update localStorage and HTML with itemsArray
    updateLocalAndHTML();
};
// Updates localStorage and HTML with data from itemsArray
var updateLocalAndHTML = function () {
    localStorage.setItem("items", JSON.stringify(itemsArray));
    renderList();
};
/* EVENT LISTENERS */
form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearList);
clearDoneBtn.addEventListener("click", clearDone);
/* ACTION */
// Fetch list items from localStorage
var itemsArray = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
// Render list to page
renderList();
