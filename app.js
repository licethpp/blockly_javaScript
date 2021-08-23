//Programmeur
console.log("programmeren")
console.log("Programmeren")
console.log("is")
console.log("plezant.")
//comentarios

console.log("Programmeren"); // Ik toon Programmeren
console.log("is"); // Ik toon is
console.log("plezant."); // Ik toon plezant.
//sumas
console.log(5+2)
//mayo, meno,igual
console.log(5 > 3)
console.log(4.6 <= 5)
console.log("limonada "<" bier" )
//  variables  
const voornaam="liceth"
const kinderen= 2
const gehuwd= true
console.log(voornaam,kinderen,gehuwd) 
 //condiciones 
 
" use strict"
const lengte = Number(prompt("lengte"))
const breedte = Number(prompt("breedte"))
console.log(lengte * breedte);
//cambios de variable

"use strict"
const temperatuur = Number(prompt("Temperatuur"))
if (temperatuur <= 0) { 
console.log("Het vriest.");
console.log("Je doet beter een dikke jas aan.")
 }
 else{
     console.log("usa una chaqueta suave")
 }
 "use strict"
 const temperatuur = Number(prompt("Temperatuur"))
 console.log(temperatuur <= 0 ? "Dikke jas nodig." : "Lichte jas volstaat.");
 const aantal= Number(prompt("aantal limonades"))
let total= 3 * aantal
if (aantal > 10){
    total*=0.95
}
console.log(total)

//SWITCH

const hoeveelste = Number(prompt("De hoeveelste ben je"));
switch (hoeveelste) { 
case 1: 
console.log("Gouden medaille.") 
break; 
case 2:
console.log("Zilveren medaille.")
break;
case 3:
console.log("Bronzen medaille.")
break;
default: 
console.log("Geen medaille.")}

"use strict"
const code= prompt("codigo de pais")
switch(code){
    case "b":console.log("belgica")
    break;
    case "nl":console.log("nederland")
    break;
    case"fr": console.log("francia")
    break;
    default:console.log("onbekend")}
    
    //while
  

    "use strict";
    let totaal = 0;
    let gestort = Number(prompt("Gestort bedrag (0 om te stoppen)"))
    while (gestort !== 0) { 
    totaal += gestort;
    console.log(totaal);
    gestort = Number(prompt("Gestort bedrag (0 om te stoppen)"))
    } 
    console.log("Eindopbrengst:", totaal);

    //for

    "use strict"
    for(let contador = 1; contador <=10; contador++){
        console.log(contador)}

  "use strict"
   const numero = Number(prompt("numero"))
   for( let numero2 =1; numero2 <=10; numero2++){
       console.log(numero * numero2)
   }
   //NESTEN

   "use strict"

   const temperatura = Number(prompt("temperatura"))
   if (temperatura <=0) {
       if (temperatura < -40){
           console.log("permanese en casa")
       }
       else{
           console.log("ponte una chaqueta gruesa")
       }
   }

   "use strict"

   let adultos=0
   let niños=0
   let edad=Number(prompt("edad (0 para parar)"))
   while( edad !==0){

       if (edad >= 18){
        adultos++
       }
       else{
           niños++
       }
       edad=Number(prompt("edad (0 para parar)")) 
   }
   console.log("total adultos", adultos)
   console.log("total de niños",niños)

    "use strict"
    const trabajo= prompt("tienes trabajo (si/no")
    if (trabajo === "si"){
        console.log("trabajo de plazer")
    }
    else{
        const curso=prompt("quieres seguir un curso (si/no)")
        if(curso=== "si"){
            console.log("en cuentras un curso en www.vdab.be/opleidingen ")
        }
        else{
            console.log("encuentras vacantes en op www.vdab.be/jobs" )
        }
    }
    //OR EN AND 

    "use strict"
    const edad =Number(prompt("edad"))
    if (edad < 7 || edad > 80 ){
        console.log("precio:5")
    }
    else{
        console.log("precio:10")
    }
const peso =Number(prompt("peso en kilo"))
const estatura=Number(prompt("estatura en metro"))
const mpc=peso/ (estatura * estatura)
if( mpc >= 18.5 && mpc <=25){
    console.log("ok")
}
else {
    console.log("no ok")

 let descuento=0
 let edad=Number(prompt("edad (0 para parar)"))
 while (edad !==0){
     if (edad < 7 || edad > 80) {
         descuento++
     }
     edad=Number(prompt("edad (0 para parar)"))
 }
 console.log(" total de vesitadores con descuento de ",descuento )

 //FUNCTIES

 function keuze() { 
    let antwoord = prompt("Maak uw keuze (+ voor som, - voor verschil)"); 
    while (antwoord !== "+" && antwoord !== "-") {
    antwoord = prompt("Verkeerde keuze, probeer opnieuw.");
    }
    return antwoord;
}
 const getal1=30
 const getal2=10
 const bewerking = keuze(); 
console.log("We hebben voor u de getallen ", getal1, " en ", getal2);
if (bewerking === "+") {
console.log("De som is ", getal1 + getal2);
} else {
console.log("Het verschil is ", getal1 - getal2);
}

// Even
function even  (getal)
{
    return getal % 2===0
}

//ARRAY
const voornamen = [ "Aeneas", "Alissia", "Anaïs" ]; 
console.log(voornamen[0]); 
voornamen[0] = "Alexandra"; 
for (const voornaam of voornamen) { 
console.log(voornaam);
}

//Temperaturen
"use strict"
const vriesTemperaturen = [];
let temperatuur = Number(prompt("Temperatuur"));
while (temperatuur !== 777) {
if (temperatuur <= 0) {
vriesTemperaturen.push(temperatuur);
}
temperatuur = Number(prompt("Temperatuur"));
}
for (const temperatuur of vriesTemperaturen) {
console.log(temperatuur);


}
"use strict";
const personen = [];
let naam = prompt("Naam");
while (naam !== "stop") {
personen.push({
naam: naam,
gewicht: Number(prompt("Gewicht")),
lengte: Number(prompt("Lengte"))
})
naam = prompt("Naam");
}
for (const persoon of personen) {
console.log(persoon.naam, persoon.gewicht/(persoon.lengte*persoon.lengte));
}

"use strict";
const naam = prompt("Naam");
for (const letter of naam) { 
console.log(letter);}

"use strict";
const naam = prompt("Naam");
console.log("Je naam bevat", naam.length, "letters.");
"use strict"
const voornaam = "Alexandra";
console.log(voornaam.startsWith("An")); 
console.log(voornaam.includes("dr")); 
console.log(voornaam.endsWith("dra"));
"use strict";
const woord = prompt("Woord");
const zoekLetter = prompt("Letter");
let aantal = 0;
for (const letter of woord) {
if (letter === zoekLetter) {
aantal++;
}
}
console.log(`${zoekLetter} komt ${aantal} keer voor in ${woord}`);

"use strict";
const woord = prompt("Woord");
let palindroom = true;
for (let volgnummer=0;volgnummer<woord.length / 2 && palindroom;volgnummer++) {
if (woord[volgnummer] !== woord[woord.length - volgnummer - 1]) {
palindroom = false;
}
}
if (palindroom) {
console.log(`${woord} is een palindroom.`)
} else {
console.log(`${woord} is geen palindroom.`)
}
"use strict";
const prijsVanEenAppel = 0.34;
const aantalAppels = 7;
let teBetalen = prijsVanEenAppel * aantalAppels;
teBetalen = Number(teBetalen.toFixed(2)); 
console.log(teBetalen);
const prijsVanEenPeer = 0.32;
const aantalPeren = 9;
teBetalen += prijsVanEenPeer * aantalPeren; 
console.log(teBetalen.toFixed(2));

"use strict";
[
{ naam: "Georges", spaargeld: 1500 },
{ naam: "Jules", spaargeld: 700 },
{ naam: "Jacques", spaargeld: 2000 }
].filter(persoon => persoon.spaargeld > 1000)
.forEach(persoon => console.log(persoon.naam, persoon.spaargeld));


"use strict";
//Landen
const landen = tikLanden();
if (landen.length !== 0) {
const gemiddelde = berekenGemiddelde(landen);
console.log("Gemiddelde:", gemiddelde);
toonLandenOnderGemiddelde(landen, gemiddelde);
toonLandenBovenGemiddelde(landen, gemiddelde);
}
function tikLanden() {
const landen = [];
let naam = prompt("Naam");
while (naam !== "stop") {
landen.push({ naam: naam, oppervlakte: Number(prompt("Oppervlakte")) });
naam = prompt("Naam");
}
return landen;
}
function berekenGemiddelde(landen) {
return landen.map(land => land.oppervlakte)
.reduce((totaal, oppervlakte) => totaal + oppervlakte) / landen.length;
}
function toonLandenOnderGemiddelde(landen, gemiddelde) {
console.log("Onder gemiddelde:");
landen.filter(land => land.oppervlakte < gemiddelde)
.forEach(land => console.log(land.naam, land.oppervlakte));
}
function toonLandenBovenGemiddelde(landen, gemiddelde) {
console.log("Boven gemiddelde:");
landen.filter(land => land.oppervlakte > gemiddelde)
.forEach(land => console.log(land.naam, land.oppervlakte));
}

let getal1 = Number(prompt("getal1"))
let getal2 =Number(prompt("getal2"));
const personen = tikPersonen();
if (personen.length !== 0) {
const kleinsteLengte = berekenKleinsteLengte(personen);
console.log("Kleinste lengte:", kleinsteLengte);
toonPersonenMetLengte(personen, kleinsteLengte);
const grootsteLengte = berekenGrootsteLengte(personen);
console.log("Grootste lengte:", grootsteLengte);
toonPersonenMetLengte(personen, grootsteLengte);
}


//personen
function tikPersonen() {
const personen = [];
let naam = prompt("Naam");
while (naam !== "stop") {
personen.push({ naam: naam, lengte: Number(prompt("Lengte")) });
naam = prompt("Naam");
}
return personen;
}
function berekenKleinsteLengte(personen) {
return personen.map(persoon => persoon.lengte)
.reduce((kleinste, lengte) => kleinste < lengte ? kleinste : lengte);
}
function berekenGrootsteLengte(personen) {
return personen.map(persoon => persoon.lengte)
.reduce((grootste, lengte) => grootste > lengte ? grootste : lengte);
}
function toonPersonenMetLengte(personen, lengte) {
personen.filter(persoon => persoon.lengte === lengte)
.forEach(persoon => console.log(persoon.naam, persoon.lengte));
}

//artikels
"use strict"
 
const fullartikels = tikartikels();
if(fullartikels.length > 0)
{
    let zoeknaam = prompt("zoek Artikel Naam")
    zoeknaam(zoeknaam);
    let getal1 = Number(prompt("getal1"))
let getal2 =Number(prompt("getal2"))
filterverkoopprijs(getal1,getal2);

berekenGemiddelde(fullartikels);
}
"use strict"
function tikartikels() {
let artikels = []
let Artikel =prompt("Artikel Naam (stopen)")
while (Artikel !=="stopen"){
artikels.push({ naam:Artikel,aankoopprijs: Number(prompt("Aankoopprijs")),verkoopprijs :  Number(prompt("verkoopprijs")) });
Artikel = prompt("Artikel Naam (stopen)")
}
console.log(artikels)
return artikels;
}
 

function zoeknaam(zoeknaam) {
artikels.filter(a => a.naam == zoeknaam)
.forEach(a => console.log(a.naam));
}

 function filterverkoopprijs(getal1,getal2) {
if( getal2 < getal1)
console.error("error")
else{

artikels.filter(a => (a.verkoopprijs > getal1 && a.verkoopprijs < getal2) || ( a.verkoopprijs == getal1 || a.verkoopprijs == getal2))
.forEach(a => console.log(a.naam));}
 }

function berekenGemiddelde(artikels) {
    return artikels.map(a => a.verkoopprijs)
    .reduce((totaal, verkoopprijs) => totaal + verkoopprijs) / artikels.length;
}}
