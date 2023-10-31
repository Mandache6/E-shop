document.addEventListener("DOMContentLoaded", function () {
let produkty = '[{ "Produkt": "Eggroll", "cena": 414 },{ "Produkt": "Compound - Raspberry", "cena": 400 },{ "Produkt": "Steel Wool", "cena": 488 },{ "Produkt": "Calypso - Strawberry Lemonade", "cena": 291 },{ "Produkt": "Coffee - Almond Amaretto", "cena": 410 },{ "Produkt": "Bacardi Limon", "cena": 457 },{ "Produkt": "Ham - Cooked", "cena": 384 },{ "Produkt": "Chinese Foods - Chicken Wing", "cena": 159 },{ "Produkt": "Veal - Provimi Inside", "cena": 182 },{ "Produkt": "Wine - Delicato Merlot", "cena": 341 },{ "Produkt": "Pepper - Jalapeno", "cena": 221 },{ "Produkt": "Appetizer - Spring Roll, Veg", "cena": 457 },{ "Produkt": "Flower - Carnations", "cena": 348 }{ "Produkt": "Sauce - Plum", "cena": 228 },{ "Produkt": "Muffin Orange Individual", "cena": 253 },{ "Produkt": "Coffee - Hazelnut Cream", "cena": 330 },{ "Produkt": "Chicken - Ground", "cena": 215 },{ "Produkt": "Wasabi Powder", "cena": 114 },{ "Produkt": "Lettuce - Baby Salad Greens", "cena": 313 },{ "Produkt": "Rabbit - Saddles", "cena": 419 },{ "Produkt": "Wine - Ej Gallo Sonoma", "cena": 209 },{ "Produkt": "Olives - Black, Pitted", "cena": 337 },{ "Produkt": "Longos - Chicken Wings", "cena": 375 },{ "Produkt": "Cake - Bande Of Fruit", "cena": 396 },{ "Produkt": "Jam - Blackberry, 20 Ml Jar", "cena": 20 },{ "Produkt": "Trueblue - Blueberry 12x473ml", "cena": 428 },{ "Produkt": "Pork - Sausage Casing", "cena": 53 }{ "Produkt": "Hand Towel", "cena": 475 },{ "Produkt": "Chicken - Whole", "cena": 371 },{ "Produkt": "Truffle Cups - Brown", "cena": 210 }]';
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
    produkt.innerHTML += objekty[i].Produkt;
    cena.innerHTML += objekty[i].Cena + " Kč";
    document.body.appendChild(kontejner);
    kontejner.appendChild(produkt);
    kontejner.appendChild(cena);
}
console.log(objekty);

});

