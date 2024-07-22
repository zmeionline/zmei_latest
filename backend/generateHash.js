const bcrypt = require("bcryptjs");

// Parola pe care vrei să o hash-ui
const plaintextPassword = "dracu123";

// Numărul de runde de hashing (saltRounds)
const saltRounds = 10;

// Funcția care creează hash-ul
bcrypt.hash(plaintextPassword, saltRounds, (err, hash) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Parola: ", plaintextPassword);
  console.log("Hash-ul generat: ", hash);
});
