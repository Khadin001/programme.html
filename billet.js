
let age = prompt("Saisir votre age:");

age = parseInt(age);

let Ticket;

if (age <= 12) {
    Ticket = 10;
} else if (age >= 13 && age <= 17) {
    Ticket = 15;
} else {
    Ticket = 20;
}

console.log("Le prix du ticket est " + Ticket + " $");