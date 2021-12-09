// Definiramo varijable u koje ćemo pohraniti vrijednosti.
let firstNumber;
let secondNumber;

// Kreiramo funkciju koja će dohvatiti podatke sa polja za unost.
// getElementById je funkcija u JS koja kao parametar prima id od polja za unos.
// Sa .value dodatkom dohvaćamo vrijednost koju korisnik upiše.
function DohvatiPodatke() {
    firstNumber = document.getElementById("firstNumber").value;
    secondNumber = document.getElementById("secondNumber").value;
}

// Kreiramo funkciju koja će zbrojiti dvije vrijednosti.
function Zbrajanje() {
    // Koristimo parseInt() funkciju za pretvaranje vrijednosti koje je korisnik unio u polja iz string tipa u number tip.
    // To je potrebno da ih možemo zbrojiti a ne konkatenirati tj. spojiti samo skupa.
    let zbroj = parseInt(firstNumber) + parseInt(secondNumber);
    // Ispišemo broj u element sa id-em display
    // Koristimo innerHTML da zapišemo vrijednost u element.
    // Ispišemo ga pomoću += jer element s id-em display već ima neku vrijednost u sebi i mi samo želimo na tu vrijednost nadodati zbroj.
    document.getElementById('display').innerHTML += zbroj;
}

function Oduzimanje() {
    let razlika = parseInt(firstNumber) - parseInt(secondNumber);
    document.getElementById('display').innerHTML += razlika;
}

function Množenje() {
    
}

function Dijeljenje() {

}