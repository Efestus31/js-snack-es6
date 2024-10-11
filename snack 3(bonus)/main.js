
//funzione per accettare un array e due indici
function estraiIntervallo(array, a, b) {
    if (a < 0 || b >= array.length || a > b) {
        console.error('Indici non validi: assicurati che 0 <= a < b < lunghezza dellarray.');
        return []; 
    }
    return array.slice(a, b + 1);
}

const arr = [10, 20, 30, 40, 50, 60];

//caso valido
const risultato = estraiIntervallo(arr, 2, 4);
console.log(risultato); 


const risultatoErrore = estraiIntervallo(arr, 2, 6); 
console.log(risultatoErrore); //errore in console