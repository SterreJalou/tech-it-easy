// Opdracht 1a.

const typeTelevision = inventory.map((inventory) => {
    return inventory.type;
})

console.log(typeTelevision);

// Opdracht 1b.

const soldTelevision = inventory.filter((inventory) => {

    if(inventory.originalStock === inventory.sold) {
        return true;
    }
})

console.log(soldTelevision);

// Opdracht 1c.

const ambilight = inventory.filter((inventory) => {

    if(inventory.options.ambiLight === true) {
        return true;
    }
})

console.log(ambilight);


// Opdracht 1d.

inventory.sort((a,b) => {
    return a.price - b.price;
})

console.log(inventory.map((inventory) => {
    return inventory.price
}))

