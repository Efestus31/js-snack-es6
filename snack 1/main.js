//inizializzo un array bidimensionale 
const bikes = [
    {
        nome: 'Specialized S-Works Tarmac SL7',
        peso: 7.2,
    },
    {
        nome: 'Trek Emonda SLR 9',
        peso: 6.8,
    },
    {
        nome: 'Canyon Ultimate CF SLX',
        peso: 7.1,
    },
    {
        nome: 'Bianchi Oltre XR4',
        peso: 7.4,
    },
    {
        nome: 'Giant TCR Advanced SL',
        peso: 7.3,
    },
]
let bici_leggera = bikes[0];
for (let i = 1; i < bikes.length; i++){
 if (bikes[i].peso < bici_leggera.peso){
    bici_leggera = bikes[i];
 }
}

document.body.innerHTML = `<h1>La bici più leggera è ${bici_leggera.nome} e pesa ${bici_leggera.peso} kg.</h1>`