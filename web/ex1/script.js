import { reservations, getReservation } from "./model.js";

// Reflects the data into UI - THIS SHOULD BE IN UI MODULE
function reciveReservationData() {
  const currentGuest = document.querySelector("#inputVal").value;
  const msgContainer = document.getElementById("msg");
  msgContainer.innerHTML = "";


  const guestMsg = document.createElement("h3");
  if (getReservation(currentGuest) == true) {
    guestMsg.textContent = `Hmm, someone already claimed this reservation`;
  } else if (getReservation(currentGuest) == false) {
    guestMsg.textContent = `Welcome, ${currentGuest}`;
  } else {
    guestMsg.textContent = "You have no reservation";
  }
    msgContainer.appendChild(guestMsg);

}

// CONTROLLER
addEventListener("DOMContentLoaded", () => {
  document.querySelector("#btnSrch").addEventListener("click", () => {
    reciveReservationData();
  });
  
});
