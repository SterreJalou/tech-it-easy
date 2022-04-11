function listTelevisionBrand (inventory) {

    const televisionBrands = inventory.map((inventory) => {
        return inventory.brand;
    })

    const totalTelevisionBrands = document.getElementById('total-television-brands');
    totalTelevisionBrands.innerHTML = televisionBrands.join(`<li>`);

}

listTelevisionBrand(inventory)
