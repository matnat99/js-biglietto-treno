/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
 Questo richiederà un minimo di ricerca.*/



//1- Chiedi all' utente di inserire il numero di chilometri che vuole percorrere
const numKm = Number(prompt("Inserisci il numero di km da percorrere"))

//2- Chiedi all' utente di inserire la sua età
const age = Number( prompt("Inserisci la tua età"))

//3- Calcola il prezzo del biglietto in base ai km (0.21€ al km)
const priceKm = 0.21
let totalPrice = numKm * priceKm

/*4- SE l'età del utente è minore di 18 allora dai lo sconto del 20%, ALTRIMENTI SE l'età l'utente è maggiore di 65 allora dai il 40% di sconto
     -alert "il tuo sconto equivale al"
     ALTRIMENTI non dare nessuno sconto*/
if (age < 18){
    alert("Hai diritto a uno sconto del 20%")
    totalPrice = (totalPrice / 100) * 80
} else if (age >= 65){
    alert("Hai diritto a uno sconto del 40%")
    totalPrice = (totalPrice / 100) * 60
}

/*5- Output del prezzo finale viene arrotondato a due decimali
     -alert "il prezzo finale del tuo biglietto è "*/
     alert(`Il prezzo totale del viaggio è: €${totalPrice.toFixed(2)}`)

