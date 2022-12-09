// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById("go-btn");
let menuEl = document.getElementById("menu");
let outputEl = document.getElementById("output");

let contacts = loadContacts();
displayContacts();

// Go Btn - Menu Listener
goBtnEl.addEventListener("click", goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === "display-all") {
    displayContacts();
  } else if (selection === "add") {
    addContact();
  } else if (selection === "remove") {
    removeContact();
  } else if (selection === "display-name") {
    displayByName();
  } else if (selection === "display-country") {
    displayByCountry();
  }
}

// MENU FUNCTIONS
function displayContacts() {
  let outputStr = "";
  for (let i = 0; i < contacts.length; i++) {
    outputStr += `${contacts[i].name},${contacts[i].phone}, ${contacts[i].country},${contacts[i].email}<br>`;
  }
  outputEl.innerHTML = outputStr;
}

function addContact() {
  let inputName = prompt("Enter contact details: name");
  let inputPhone = prompt("Enter contact details: phone #");
  let inputCountry = prompt("Enter contact details: country");
  let inputEmail = prompt("Enter contact details: email");
  contacts.push(newContact(inputName, inputPhone, inputCountry, inputEmail));
  outputEl.innerHTML = "Contact has been added!";
  saveContacts();
}

function removeContact() {
  let index = +prompt("Enter number of task:");
  if (index >= 0 && index < contacts.length) {
    contacts.splice(index, 1);
    saveContacts();
    displayContacts();
  } else alert("Invalid task number");
}

function displayByName() {
  let nameContact = prompt("Enter contact name:");
  let outputStr = "";
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name === nameContact) {
      outputStr += `${contacts[i].name},${contacts[i].phone},${contacts[i].country},${contacts[i].email} `;
    }
  }
  outputEl.innerHTML = outputStr;
}

function displayByCountry() {
  let countryContact = prompt("Enter contact country:");
  let outputStr = "";
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].country === countryContact) {
      outputStr +=
        outputStr += `${contacts[i].name},${contacts[i].phone},${contacts[i].country},${contacts[i].email} `;
    }
  }
  outputEl.innerHTML = outputStr;
}

function saveContacts() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function loadContacts() {
  let tasksStr = localStorage.getItem("contacts");
  return JSON.parse(tasksStr) ?? [];
}
function newContact(name, phone, country, email) {
  return {
    name: name,
    phone: phone,
    country: country,
    email: email,
  };
}
