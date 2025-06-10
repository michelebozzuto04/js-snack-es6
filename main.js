/* // Snack 1
/* Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore. 

const bikes = [
    {
        name: "Mountain Bike",
        weight: 2
    },
    {
        name: "Mountain Bike",
        weight: 3
    },
    {
        name: "Mountain Bike",
        weight: 4
    },
    {
        name: "Mountain Bike",
        weight: 6
    },
    {
        name: "Mountain Bike",
        weight: 3
    },
    {
        name: "Mountain Bike",
        weight: 6
    },
    {
        name: "Mountain Bike",
        weight: 4
    },
    {
        name: "Mountain Bike",
        weight: 7
    },
]

minWeight = bikes[0];

for (let i = 0; i < bikes.length; i++) {
    const thisBike = bikes[i];
    if (minWeight.weight > thisBike.weight) {
        minWeight = thisBike;
    }
}

console.log(`La bici con il peso minore è: ${minWeight.name} peso: ${minWeight.weight}`); */

/* Snack 2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const teams = [
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Real Madrid",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0,
    }
]
const nomeFalli = [];

for (let i = 0; i < teams.length; i++) {
    thisTeam = teams[i];
    thisTeam.puntiFatti = Math.ceil(Math.random() * 1000);
    thisTeam.falliSubiti = Math.ceil(Math.random() * 1000);
    nomeFalli[i] = { nome: thisTeam.nome, falliSubiti: thisTeam.falliSubiti };
}

console.log(teams);
console.log(nomeFalli);
