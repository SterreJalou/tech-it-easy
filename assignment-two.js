// Opdracht 2a.

let totalSold = 0;

for(let i = 0; i < inventory.length; i++) {
    totalSold += inventory[i].sold
}

console.log(totalSold);

// Opdracht 2b.

const totalItemsSold = document.getElementById('total-sold');
totalItemsSold.innerHTML = `
  <h3>Televisions sold<h3>
  <h2>${totalSold}</h2>
`;

// Opdracht 2c.

let totalStock = 0;

for(let i = 0; i < inventory.length; i++) {
    totalStock += inventory[i].originalStock
}

console.log(totalStock);

// Opdracht 2d.

const totalItemsStock = document.getElementById('total-stock');
totalItemsStock.innerHTML = `
  <h3>Televisions in stock<h3>
  <h2>${totalStock}</h2>
`;
// Opdracht 2e.

let totalToBeSold = 0;

for(let i = 0; i < inventory.length; i++) {
    totalToBeSold = totalStock - totalSold;
}

console.log(totalToBeSold);

const totalItemsToBeSold = document.getElementById("total-to-be-sold");
totalItemsToBeSold.innerHTML = `
  <h3>Televisions to be sold<h3>
  <h2>${totalToBeSold}</h2>
`;









