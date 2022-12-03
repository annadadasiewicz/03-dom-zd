// zadanie 1.

const films = [
  {
    title: "Jeszcze dalej niż północ",
    rating: 10,
  },
  {
    title: "Żądło",
    rating: 9,
  },
  {
    title: "Johny",
    rating: 10,
  },
  {
    title: "Wesele",
    rating: 7,
  },
];

for (let film of films) {
  if (film.rating > 8) {
    console.log(`Film "${film.title}" ma ocenę ${film.rating}.`);
  }
}

// Zadanie 2

let a = 2;
let b = 4;
function multiply() {
  let result = a * b;
  console.log(result);
}
multiply();

// Zadanie 3

let person1 = 180;
let person2 = 179;
function whoIsTaller() {
  if (person1 > person2) console.log("Osoba pierwsza jest wyższa");
  else console.log("Osoba druga jest wyższa");
}
whoIsTaller();

// Zadanie 4

function findTheBestMovie() {
  for (let film of films) {
    if (film.rating > 9) {
      console.log(`Moim ulubionym filmem jest "${film.title}.`);
    }
  }
}
findTheBestMovie();
