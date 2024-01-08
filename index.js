
document.addEventListener("DOMContentLoaded", function () {
    var produkt = '[{"id":1,"auto":"Chevrolet","cena":448213,"rokvyroby":1994}, {"id":2,"auto":"Saab","cena":126543,"rokvyroby":1996}, {"id":3,"auto":"Subaru","cena":814574,"rokvyroby":1989}, {"id":4,"auto":"Audi","cena":859804,"rokvyroby":2005}, {"id":5,"auto":"Subaru","cena":216789,"rokvyroby":1988}, {"id":6,"auto":"Mercedes-Benz","cena":722737,"rokvyroby":2012}, {"id":7,"auto":"Cadillac","cena":277370,"rokvyroby":2009}, {"id":8,"auto":"Toyota","cena":239034,"rokvyroby":1995}, {"id":9,"auto":"Toyota","cena":847956,"rokvyroby":2010}, {"id":10,"auto":"Mercedes-Benz","cena":412716,"rokvyroby":2010}, {"id":11,"auto":"Nissan","cena":564199,"rokvyroby":1998}, {"id":12,"auto":"Chevrolet","cena":606373,"rokvyroby":2005}, {"id":13,"auto":"Pontiac","cena":508509,"rokvyroby":1992}, {"id":14,"auto":"Dodge","cena":491788,"rokvyroby":2009}, {"id":15,"auto":"Mitsubishi","cena":279053,"rokvyroby":2001}, {"id":16,"auto":"Lincoln","cena":546823,"rokvyroby":2007}, {"id":17,"auto":"GMC","cena":109680,"rokvyroby":1992}, {"id":18,"auto":"Chevrolet","cena":916225,"rokvyroby":1997}, {"id":19,"auto":"Ford","cena":769834,"rokvyroby":1985}, {"id":20,"auto":"BMW","cena":764793,"rokvyroby":2010}, {"id":21,"auto":"Toyota","cena":284265,"rokvyroby":1999},{"id":22,"auto":"Jaguar","cena":196324,"rokvyroby":2001},{"id":23,"auto":"Volvo","cena":665274,"rokvyroby":2013}, {"id":24,"auto":"Kia","cena":348419,"rokvyroby":2013}, {"id":25,"auto":"Mazda","cena":148363,"rokvyroby":1998}, {"id":26,"auto":"Jaguar","cena":157685,"rokvyroby":2013}, {"id":27,"auto":"Mazda","cena":488752,"rokvyroby":1993},  {"id":28,"auto":"Bentley","cena":803793,"rokvyroby":2009}, {"id":29,"auto":"Audi","cena":159860,"rokvyroby":1987},{"id":30,"auto":"Ford","cena":968533,"rokvyroby":2010}]';
    let objekty = JSON.parse(produkt);
    let sekceprodukty = document.getElementById("hlavni");
    let razeniCenaVzestupne = document.getElementById("razeniCenaVzestupne");
    let razeniCenaSestupne = document.getElementById("razeniCenaSestupne");
    let filtrButton = document.getElementById("filtr");
    let minCena = document.getElementById("minCena");
    let maxCena = document.getElementById("maxCena");

    for (let i = 0; i < objekty.length; i++) {
        let kontejner = document.createElement("article");
        kontejner.id = "produkt";
        let id = document.createElement("p");
        let auto = document.createElement("span");
        let cena = document.createElement("p");
        let rokvyroby = document.createElement("p");
        let button = document.createElement("button");
        let nakup = document.createElement("button");
        button.innerText = "Koupit";
        button.id = "nakup"; 
        localStorage.setItem("produkt" + i, objekty[i].Produkt);
        nakup.innerText = "Koupit";
        nakup.id = "nakup"; 
        nakup.addEventListener("click", function () {
            alert("Koupeno");
            localStorage.getItem("produkt" + i); 
            console.log(localStorage.getItem("produkt" + i)); 
        });
        id.innerHTML += objekty[i].id;
        auto.innerHTML += objekty[i].auto;
        cena.innerHTML += objekty[i].cena + " Kč";
        rokvyroby.innerHTML += objekty[i].rokvyroby + "";
        sekceprodukty.append(kontejner);
        kontejner.append(id);
        kontejner.append(auto);
        kontejner.append(cena);
        kontejner.append(rokvyroby);
        kontejner.append(nakup);
      

        filtrButton.addEventListener("click", function () {   
            let minimalniCena = minCena.value;
            let maximalniCena = maxCena.value;
            if (objekty[i].cena >= minimalniCena && objekty[i].cena <= maximalniCena) {
              
            } else {
                kontejner.style.display = "none";
            }
        });

        razeniCenaVzestupne.addEventListener("click", function () {
            objekty.sort(function (a, b) {
                return a.cena - b.cena;
            });
            produkt.innerHTML = objekty[i].Produkt;
            cena.innerHTML = objekty[i].cena + " Kč";
        });

        razeniCenaSestupne.addEventListener("click", function () {
            objekty.sort(function (a, b) {
                return b.cena - a.cena;
            });
            produkt.innerHTML = objekty[i].Produkt;
            cena.innerHTML = objekty[i].cena + " Kč";
        });

        if (localStorage) {
            localStorage.produkt = objekty[i].Produkt;
        }

    } 


}); 