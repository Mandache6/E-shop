document.addEventListener("DOMContentLoaded", function () {
var produkty = '[{ "Prdukt": "Eggroll", "cena": 414 },{ "Prdukt": "Compound - Raspberry", "cena": 400 },{ "Prdukt": "Steel Wool", "cena": 488 },{ "Prdukt": "Calypso - Strawberry Lemonade", "cena": 291 },{ "Prdukt": "Coffee - Almond Amaretto", "cena": 410 },{ "Prdukt": "Bacardi Limon", "cena": 457 },{ "Prdukt": "Ham - Cooked", "cena": 384 },{ "Prdukt": "Chinese Foods - Chicken Wing", "cena": 159 },{ "Prdukt": "Veal - Provimi Inside", "cena": 182 },{ "Prdukt": "Wine - Delicato Merlot", "cena": 341 },{ "Prdukt": "Pepper - Jalapeno", "cena": 221 },{ "Prdukt": "Appetizer - Spring Roll, Veg", "cena": 457 },{ "Prdukt": "Flower - Carnations", "cena": 348 }{ "Prdukt": "Sauce - Plum", "cena": 228 },{ "Prdukt": "Muffin Orange Individual", "cena": 253 },{ "Prdukt": "Coffee - Hazelnut Cream", "cena": 330 },{ "Prdukt": "Chicken - Ground", "cena": 215 },{ "Prdukt": "Wasabi Powder", "cena": 114 },{ "Prdukt": "Lettuce - Baby Salad Greens", "cena": 313 },{ "Prdukt": "Rabbit - Saddles", "cena": 419 },{ "Prdukt": "Wine - Ej Gallo Sonoma", "cena": 209 },{ "Prdukt": "Olives - Black, Pitted", "cena": 337 },{ "Prdukt": "Longos - Chicken Wings", "cena": 375 },{ "Prdukt": "Cake - Bande Of Fruit", "cena": 396 },{ "Prdukt": "Jam - Blackberry, 20 Ml Jar", "cena": 20 },{ "Prdukt": "Trueblue - Blueberry 12x473ml", "cena": 428 },{ "Prdukt": "Pork - Sausage Casing", "cena": 53 }{ "Prdukt": "Hand Towel", "cena": 475 },{ "Prdukt": "Chicken - Whole", "cena": 371 },{ "Prdukt": "Truffle Cups - Brown", "cena": 210 }]';
let objekty = JSON.parse(produkty);

for (let i = 0; i < objekty.length; i++) {
    let kontejner = document.createElement("div");
    let produkt = document.createElement("span");
    let cena = document.createElement("p");
    kontejner.style.display = "flex";
    kontejner.style.flexDirection = "column";
    kontejner.style.justifyContent = "space-evenly";
    kontejner.style.width = "30%";
    kontejner.style.height = "40vh";
    kontejner.style.border = "1px solid black";
    produkt.innerHTML += objekty[i].Prdukt;
    cena.innerHTML += objekty[i].Cena + " Kč";
    document.body.appendChild(kontejner);
    kontejner.appendChild(produkt);
    kontejner.appendChild(cena);
}
console.log(objekty);

});

