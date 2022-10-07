// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// INPUT
// km
const userKm = parseInt(prompt("Quanti km deve percorrere il passeggero?"));
// Age
const userAge = parseInt(prompt("Quanti anni ha il passeggero?"));

console.log(userKm, typeof(userKm));
console.log(userAge, typeof(userAge));

// PROCESSING
// calculate base price
const basePrice = userKm * 0.21;
console.log(basePrice);

// SE age < 18
//     - discount 20%
// Altrimenti SE age > 65
//     - discount 40%
// Altrimenti
//     -base price

let discount = 0;
if (userAge < 18) {
    // discount 20%;
    discount = 20;
} else if (userAge > 65) {
    // discount 40%;
    discount = 40;
} else {
    discount = 0;
}

console.log(discount);

// finalPrice
// (basePrice * discount / 100)
const finalPrice = basePrice - (basePrice * discount / 100);

console.log(finalPrice);


// OUTPUT
document.getElementById("result").innerHTML = `
<h3> Il Prezzo Base è € ${basePrice.toFixed(2)} </h3>
<p>Lo sconto è del ${discount}%</p>
<h2> Il Prezzo Finale da pagare è € ${finalPrice.toFixed(2)} </h2>
`