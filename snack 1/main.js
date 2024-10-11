//inizializzo un array bidimensionale 
const bikes = [
    {
        nome: 'Trek Emonda SLR 9',
        peso: 6.8,
    },
    {
        nome: 'Specialized S-Works Tarmac SL7',
        peso: 7.2,
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
let peso_minore = 100;
for (let i = 0; i < bikes.length; i++){
    for(let key in bikes[i]){
        if (key ==='peso'){
            if(bikes[i][key] < peso_minore){
                peso_minore = bikes[i][key];
            }
           
        }
    }
}

document.body.innerHTML = `<h1>La bici più leggera pesa ${peso_minore} kg.`