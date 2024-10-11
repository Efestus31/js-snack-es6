// Creazione di un array di oggetti per le squadre di calcio
const squadre = [
    {
        nome: 'Juventus',
        punti: getRandomInt(1,9),
        falli: getRandomInt(1,9),
    },
    {
        nome: 'Inter',
        punti: getRandomInt(1,9),
        falli: getRandomInt(1,9),
    },
    {
        nome: 'AC Milan',
        punti: getRandomInt(1,9),
        falli: getRandomInt(1,9),
    },
    {
        nome: 'Napoli',
        punti: getRandomInt(1,9),
        falli: getRandomInt(1,9),
    },
    {
        nome: 'Roma',
        punti: getRandomInt(1,9),
        falli: getRandomInt(1,9),
    },
];
//funzione numeri casuali
function getRandomInt() {
    return Math.floor((Math.random() * 10) + 1);
}

const falli = [];
console.log(squadre);
for(let i = 0; i < squadre.length; i++){
   falli.push({
    nome : squadre[i].nome,
    falli: squadre[i].falli
   })
}
console.log(falli);

// //Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.