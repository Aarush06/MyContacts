// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById('go-btn');
let menuEl = document.getElementById('menu');
let outputEl = document.getElementById('output');

let contacts = loadContacts()
displayContacts();

// Go Btn - Menu Listener
goBtnEl.addEventListener('click', goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === 'display-all') {
    displayContacts();
  } else if (selection === 'add') {
    addContact();
  } else if (selection === 'remove') {
    removeContact();
  } else if (selection === 'display-name') {
    displayByName();
  } else if (selection === 'display-country') {
    displayByCountry();
  }
}

// MENU FUNCTIONS
function displayContacts() {
  let outputStr = ""
  for (let i = 0; i < contacts.length; i++) {
    outputStr += `${contacts[i]}<hr>`
  }
  outputEl.innerHTML = outputStr;
}

function addContact() {
  let addContactPrompt = prompt("Enter contact details: email,name,phone number, country");
  contacts.push(addContactPrompt);
  outputEl.innerHTML = ("Contact has been added!")
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
  let nameContact = prompt("Enter contact name:")
  let outputStr = "";
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name === nameContact) {
      outputStr += `${contacts[i]}`
    }
  }
}

function displayByCountry() {
  console.log('Display by Country');
}

function saveContacts() {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

function loadContacts() {
  let tasksStr = localStorage.getItem('contacts');
  return JSON.parse(tasksStr) ?? [];
}
