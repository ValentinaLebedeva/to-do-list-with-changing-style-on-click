const form = document.querySelector("#addForm");
const itemsList = document.querySelector("#items");
const search = document.querySelector("#search");

// Additing a new item
form.addEventListener("submit", addItem);

// function for additing a new item
function addItem(event) {
  event.preventDefault();

  //getting text from input form 
  let newItemInput = document.querySelector("#newItemText");
  let newItemText = newItemInput.value;

  // creating element for a new item 
  let newElement = document.createElement("li");
  newElement.className = "list__item";

  // additing text to a new item
  let newTextNode = document.createTextNode(newItemText);
  newElement.appendChild(newTextNode);

  // creating "delete" button
  let deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  deleteBtn.className = "list__btn";
  deleteBtn.dataset.action = "delete";
  newElement.appendChild(deleteBtn);

  // additing a new item to the list
  itemsList.prepend(newElement);

  // clearing input for the next item 
  newItemInput.value = "";
}

// deleting an item from the list 
itemsList.addEventListener("click", removeItem);

function removeItem(event) {
  if (event.target.getAttribute("data-action") == "delete") {
    if (confirm("Delete duty?")) {
      event.target.parentNode.remove();
    }
  }
}

//filter of the list
search.addEventListener("keyup", searchItems);

function searchItems(event) {
  let searchedText = event.target.value.toLowerCase();

  // Getting all items from the list
  let items = itemsList.querySelectorAll("li");

  items.forEach(function (item) {
    let itemText = item.firstChild.textContent.toLowerCase();

    // checking seaching input in the list
    if (itemText.indexOf(searchedText) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

/* changing style of the page */
const btnStyle = document.querySelector(".different-look-btn");
const backgrounds = ["bird", "blur", "lights", "rain"];
let index = 1;
btnStyle.addEventListener("click", changeStyle);

function changeStyle() {
  setStyle();
  if (index >= (backgrounds.length - 1)) {
    index = 0;
  } else {
    index++;
  }
  return index;
}

function setStyle() {
  const mainBackground = document.querySelector(".background");
  const wrapper = document.querySelector(".wrapper");
  const addBtn = document.querySelector(".btn");
  const headerTitle = document.querySelector(".header__title");
  const listTitle = document.querySelector(".list__title");

  mainBackground.style.background = `url("${backgrounds[index]}.jpg") center no-repeat`;
  mainBackground.style.backgroundSize = 'cover';

  btnStyle.style.backgroundColor = `var(--${backgrounds[index]})`;
  addBtn.style.backgroundColor = `var(--${backgrounds[index]})`;

  wrapper.style.fontFamily = `var(--font-${backgrounds[index]})`;
  btnStyle.style.fontFamily = `var(--font-${backgrounds[index]})`;
  addBtn.style.fontFamily = `var(--font-${backgrounds[index]})`;

  headerTitle.style.color = `var(--title-${backgrounds[index]})`;
  listTitle.style.color = `var(--title-${backgrounds[index]})`;
}