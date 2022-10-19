/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

//functions
function generateNumberRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


//Visualizzare in pagina 5 numeri casuali
//Creo un array vuoto 
const numbersArray = [];

//riempio l'array con numeri casuali
while (numbersArray.length !== 5) {
    const elementArray = generateNumberRandom(1, 100);
    if (!numbersArray.includes(elementArray)){
        numbersArray.push(elementArray)
    }
}
console.log(numbersArray);

//stampo i numeri nella dom

//seleziono elemento della dom
const ulElement = document.querySelector('.numberList');

//creo elemento li e inserisco il numero presente nel arrey
let liElement;
for (let i = 0; i < numbersArray.length; i++) {
    liElement = `<li>${numbersArray[i]} </li>`
    ulElement.innerHTML += liElement;
}

//Dopo 30 secondi i numeri scompaiono
setTimeout( function tempoRimanente() {
    ulElement.innerHTML = '';
}, 10000)


