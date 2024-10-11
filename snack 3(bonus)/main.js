
//funzione per accettare un array e due indici
function estraiIntervallo(array, a, b) {
    if (a < 0 || b >= array.length || a > b) {
        console.error('Indici non validi: assicurati che 0 <= a < b < lunghezza dellarray.');
        return []; 
    }
    return array.slice(a, b + 1);
}