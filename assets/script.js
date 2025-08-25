import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase, push, ref } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js"

// LEAVE A MESSAGE SECTION
const firebaseConfig = {
  databaseURL: "https://niuniugrace-917a4-default-rtdb.firebaseio.com/"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "messages")
const sendButton = document.getElementById("send-btn")
let confirmationEl = document.getElementById("confirmation-el")
let inputEl = document.getElementById("input-el")
let myMessages = []

sendButton.addEventListener("click", function(){
  if (myMessages.length === 100){
    confirmationEl.innerHTML = "Inbox full (100 messages). Try again later!"
  }
  else if(inputEl.value){
    confirmationEl.innerHTML = "Message sent!"
    push(referenceInDB, inputEl.value)
    inputEl.value = ""
  }
  else {
    confirmationEl.innerHTML = "Write something to send!"
  }
})

// VLOG/BLOG NAVIGATION 
function openMenuOption(evt, menuOption) { 
  let i
  let x = document.getElementsByClassName("menu-option")
  let tablinks

  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none"
  }

  tablinks = document.getElementsByClassName("tablink")

  for (let i=0; i < x.length; i++) {
    // deactivates current all tabs
    tablinks[i].className = tablinks[i].className.replace(" menu-option-active", "")
  }

  // activate clicked tab and display its contents
  document.getElementById(menuOption).style.display = "block"
  evt.currentTarget.className += " menu-option-active"
}