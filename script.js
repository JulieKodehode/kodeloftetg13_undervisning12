/*
Oppgave 1:
Lage 3 variabler, med de tre primær-datatypene.
Variabel som heter userName
Variabel som heter userAge
Variabel som heter userPresent
*/

/*
const = variabel nøkkelord
userName = variabel navn
= = er lik / lagres som
"Julie" = string verdi
; = full stopp / ferdig med linjen
*/
const userName = "Julie";

const userAge = 16;

const userPresent = true;

function myFunction() {
  console.log("Beskjed fra inni en funksjon");
}

myFunction();

// Hentet et element fra HTML med selektor
const buttonElement = document.querySelector("button");
console.log(buttonElement);

// Setter en hendelse som kaller en funksjon lenger oppe
buttonElement.addEventListener("click", myFunction);

// Hentet et element far HTML med en class
const classButton = document.querySelector(".norskKnapp");
console.log(classButton);

// Setter opp en hendelse som har en anonym funksjon inni seg
classButton.addEventListener("click", function () {
  console.log("Hei fra anonym funksjon!");
});

// Hentet et element fra HTML med en id
const idButton = document.querySelector("#pushButton");
console.log(idButton);

// Setter opp en hendelse som har en anonym pil funskjon inni seg
idButton.addEventListener("click", () => {
  console.log("Hei fra pil funskjon!");
});
