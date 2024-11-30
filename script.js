/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
 Questo richiederà un minimo di ricerca.*/



// 1- Chiedi all'utente di inserire il numero di chilometri che vuole percorrere
let numKm;
do {
    const input = prompt("Inserisci il numero di km da percorrere");
    if (input === null) {
        alert("Operazione annullata.");
        numKm = null; // Imposta numKm a null per gestire l'uscita
        break; // Esce dal ciclo
    }
    numKm = Number(input);
    if (isNaN(numKm) || numKm <= 0) {
        alert("Per favore inserisci un numero valido di Km");
    }
} while (isNaN(numKm) || numKm <= 0);

// Controlla se l'utente ha annullato l'operazione
if (numKm === null) {
    console.log("Programma terminato dall'utente.");
} else {
    // 2- Chiedi all'utente di inserire la sua età
    let age;
    do {
        const input = prompt("Inserisci la tua età");
        if (input === null) {
            alert("Operazione annullata.");
            age = null; // Imposta age a null per gestire l'uscita
            break; // Esce dal ciclo
        }
        age = Number(input);
        if (isNaN(age) || age <= 0) {
            alert("Per favore inserisci un'età valida");
        }
    } while (isNaN(age) || age <= 0);

    // Controlla se l'utente ha annullato l'operazione
    if (age === null) {
        console.log("Programma terminato dall'utente.");
    } else {
        // 3- Calcola il prezzo del biglietto in base ai km (0.21€ al km)
        const priceKm = 0.21;
        let totalPrice = numKm * priceKm;

        // 4- Applica eventuali sconti in base all'età
        if (age < 18) {
            alert("Hai diritto a uno sconto del 20%");
            totalPrice *= 0.8; 
        } else if (age >= 65) {
            alert("Hai diritto a uno sconto del 40%");
            totalPrice *= 0.6; 
        }

        // 5- Output del prezzo finale, arrotondato a due decimali
        alert(`Il prezzo finale del tuo biglietto è: €${totalPrice.toFixed(2)}`);
    }
}