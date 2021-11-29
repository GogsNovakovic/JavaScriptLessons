// EXAMPLE #1 - Funkcije i Varijable

var prvi_broj = 1; 
var drugi_broj = 1;

// Definicija funkcije
// Kod definicije funkcije, ako predajemo neke argumente, ne moramo ih nazvati isto kao i varijable koje su gore definirane.
// 1. Kod definicije funkcije, potrebno je koristiti ključnu riječ "function", kako bi JS znao da mora kreirati funkciju.
// 2. Nakon ključne riječi "function", potrebno je dati ime funkcije.
// 3. Moraju se otvoriti uglate zagrade i po potrebni, nekada to nije potrebno, predati argumenta nad kojima želimo nešto raditi.
// 4. Otvaraju se vitičaste zagrade koje definiraju blok/scope te funkcije.
function zbrajanje(x, y) { 
    console.log("Rezultat zbrajanje je: ", x + y); // konkatenacija stringa i integera.
}

// Poziv funkcije.
// Poanta je da kod poziva funkcije predaš točan naziv varijable.
// 1. Kod pozivanja funkcije, dovoljno ju je pozvati SAMO PO NJENOM IMENU i eventualno, ako je potrebno, predati ispravne argumente u uglate zagrade.

// EXAMPLE #1 - PRVA VJEŽBA
// Napraviti funkciju koja prima dva argumenta i radi oduzimanje.
// Potrebno je definirati dva nova broja, vrijednosti biraš sam.
// Napiši definiciju funkcije, njen poziv, ispravno predaj argumente i rezultat ispiši u konzolu.
// => Lupaj Gorane.

var jedinica = 8;
var dvojka = 4;
function oduzimanje(s, t) {
    console.log("Goran se boji jako programiranja:", s - t);
}  
oduzimanje(jedinica, dvojka);

// EXAMPLE #1 - DRUGA VJEŽBA
// Napraviti funkcija koja prima 3 argumenta i radi množenje.
// Kreiraj nove tri varijable, vrijednosti sam odaberi.
// Napiši definiciju funkcije, njen poziv, ispravno predaj argumente i rezultat ispiši u konzolu.

var prva = 2;
var druga = 3;
var treća = 4;  
function množenje (a,b,c) {
    console.log("još se više bojim programiranja", a*b*c);
}
množenje(prva, druga, treća);

// Sažetak

// 1. JS loosely typed i ne treba definirati podatkovni tip.
// 2. Funkcionira na temelju funkcionalnog programiranja.
// 3. // Kod definicije funkcije, ako predajemo neke argumente, ne moramo ih nazvati isto kao i varijable koje su gore definirane.
    // 3.1. Kod definicije funkcije, potrebno je koristiti ključnu riječ "function", kako bi JS znao da mora kreirati funkciju.
    // 3.2. Nakon ključne riječi "function", potrebno je dati ime funkcije.
    // 3.3. Moraju se otvoriti uglate zagrade i po potrebni, nekada to nije potrebno, predati argumenta nad kojima želimo nešto raditi.
    // 3.4. Otvaraju se vitičaste zagrade koje definiraju blok/scope te funkcije.
// 4. Poanta je da kod poziva funkcije predaš točan naziv varijable.
    // 4.1. Kod pozivanja funkcije, dovoljno ju je pozvati SAMO PO NJENOM IMENU i eventualno, ako je potrebno, predati ispravne argumente u uglate zagrade.
// 5. Možemo spajati tekstove i brojeve sa zarezom te ispisati u konzoli.