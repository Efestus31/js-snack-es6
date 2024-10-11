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

console.log(squadre);

