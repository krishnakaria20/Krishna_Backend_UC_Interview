const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const surnames = ["White", "Pinkman", "Fring", "Schrader", "Salamanca", "Ehrmantraut", "Goodman"];
let lastPicked = "";

function getSurname() {
  let pick = surnames[Math.floor(Math.random() * surnames.length)];
  while (pick === lastPicked) {
    pick = surnames[Math.floor(Math.random() * surnames.length)];
  }
  lastPicked = pick;
  return pick;
}

function makeAlias(name, charCount) {
  const firstName = name.split(" ")[0];
  const shortName = firstName.slice(0, charCount);
  const surname = getSurname();
  return shortName + " " + surname;
}

rl.question("Enter your name: ", (name) => {
  rl.question("How many letters to use (default 4): ", (input) => {
    const charCount = parseInt(input) || 4;
    console.log("\nHere are some alias options for you:");
    for (let i = 1; i <= 3; i++) {
      console.log(i + ". " + makeAlias(name, charCount));
    }
    rl.close();
  });
});