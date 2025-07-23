export const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

export function getReservation(name) {
  return reservations[name]?.claimed ?? null;
}
