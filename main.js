// Snack 1
/* Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore. */

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

console.log(`La bici con il peso minore è: ${minWeight.name} peso: ${minWeight.weight}`);