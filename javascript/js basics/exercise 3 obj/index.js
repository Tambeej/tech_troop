const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const name = "bob";
const lowerName = name.toLowerCase();

const reservationKey = Object.keys(reservations).find(
  key => key.toLowerCase() === lowerName
);
if (reservationKey) {
  if (reservations[reservationKey].claimed == false) {
    console.log(`Welcome, ${name}`);
  } else {
    console.log("Hmm, someone already claimed this reservation");
  }
} else {
  reservations[name] = { claimed: false };
  console.log("added a reservation for you");
}
