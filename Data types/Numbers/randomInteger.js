function randomInteger(min, max) {
  let rand = Math.random() * (max - min + 1) + min - 0.5;
  return Math.round(rand);
}