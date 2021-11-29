/* IF Uvjete */

// IF uvjeti su mehanizmi u programiranju s kojima provjeravamo validnost određenih vrijednosti.
// Nakon provjere, IF uvjet vraća vrijednost true (da je uvjet ispravan/istinit) ili false (da usporedna nije ispravna/neistinita)

// Provjeru u JavaScriptu radimo s dva operatora.
// == i ===
// == -> Provjerava samo vrijednost.
// === -> Provjerava i tip podatke uz vrijednost.

// IF se koristi/poziva sa ključnom riječi "if", koja se uvijek piše malim slovom.
// Nakon toga se uvjet koji hoćemo provjeriti, piše u oblim zagradama.
// Blok koda koji hoćemo da se izvrši, ako je uvjet ispravan/istinit, piše se u vitičastim zagradama.

/* EXAMPLE 1 */

var vrijednost_prva = 2;

if(vrijednost_prva === 2) {
    console.log("Isti su.");
} else {
    console.log("vrijednost_prva je jednaka broju 2");
}

/* EXAMPLE 2 */

/* IF ELSE Uvjet */

// IF ELSE uvjet se samo prošireno IF uvjet.

var vrijednost_druga = 34;

if(vrijednost_druga > torba) {
    console.log("Dva je veće od tri.");
} 
else if(vrijednost_druga < 3) {
    console.log("Dva je manje od tri.");
} 
else {
    console.log("Dva je jednako 3.");
}

/* Vježba 1 */

// Napraviti provjeru dva broja. 
// Kreiraj dva brojeva.
// Ako su brojevi isti, ispisati to u konzoli, ako nisu, ispisati riječ banana.

var vreća = 1;
var torba = 2; 

if(vreća === torba){
    console.log("konzola");
}
else{
    console.log("banana");
}