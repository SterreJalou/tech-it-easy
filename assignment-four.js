// Opdracht 4a.
 function televisionInfo(array) {
    const tvInfo = document.getElementById("television-information")
    return tvInfo.innerHTML =
        `<p>${array.brand} ${array.type} - ${array.name}</br>
            ${televisionPrice(array.price)}</br>
            ${televisionSize(array.availableSizes)}</p>`

}

// Opdracht 4b.
televisionInfo(inventory[3])

function televisionPrice(price) {
    return "€" + price + ",-"
}

// Opdracht 4c & 4d.
function televisionSize(arraySizes) {
    for (let i = 0; i < arraySizes.length; i++) {
        arraySizes[i] = arraySizes[i] + "inch (" + (arraySizes[i] * 2.25) + " cm) "
    }
    return arraySizes.join(" | ")
}

// Opdracht 4e.

function allTelevisions(array){
    const allTelevisionElement = document.getElementById('all-televisions');
    let $html = '';
    for (let i = 0; i < array.length; i++) {
        $html = $html + ` ${televisionInfo(array[i])} </br>`
        $html = $html + ` ${televisionSize(array[i].availableSizes)} </br>`
        $html = $html + ` | ${array[i].refreshRate} | ${array[i].screenType} | ${array[i].screenQuality} </br>`
    }
    return allTelevisionElement.innerHTML = $html;
}
allTelevisions(inventory);