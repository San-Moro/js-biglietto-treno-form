// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// INPUT
// km
const userKmInput = document.getElementById("user-km");


// Age
const userAgeInput = document.getElementById("user-age");


// Button
const calculateBtn = document.getElementById("calculate-btn")

calculateBtn.addEventListener("click" , function() {
    // al click prendo i valori degli input
    const userKm = userKmInput.value;
    console.log(userKm);

    const userAge = userAgeInput.value;
    console.log(userAge);

    // calculate base price
    const basePrice = userKmInput.value * 0.21;
    console.log(basePrice);

    // PROCESSING

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
    // svuoto input
    userKmInput.value = "";
    userAgeInput.value = "";
})