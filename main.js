function calcolabiglietto(){
// creare variabile nome e cognome
var identity = document.getElementById("nomecognome").value;
document.getElementById('stampanome').innerHTML = identity;
// creare variabile km
var km = document.getElementById("km").value;
// creare variabile età
var age = document.getElementById("eta").value;
// creare variabile costo km senza sconto
var costoperkm;
var nomeofferta = "standard";
// moltiplicare il numero di km x 0.21 euro
costoperkm = (km * 0.21);
// controllare eta se maggiore di 65 o minore di 18
// se minore di 18 applicare uno sconto del 20

// se maggiore di 65 applicare uno sconto del 40
if (age < 18) {
  costoperkm = (costoperkm - ((costoperkm * 20)/100));
  nomeofferta = "Biglietto Ridotto";
}
else if (age > 65){
    costoperkm = (costoperkm - ((costoperkm * 40)/100));
    nomeofferta = "Biglietto Ridotto";
}
document.getElementById('stampacosto').innerHTML = Math.floor(costoperkm) + "&euro;";
document.getElementById('stampaofferta').innerHTML = nomeofferta;
document.getElementById('stampacodice').innerHTML = "58964";
document.getElementById('stampacarrozza').innerHTML = "5";
document.getElementsByClassName("riquadrodue")[0].style.display = "block";
}
function azzeraivalori(){
  document.getElementsByClassName("riquadrodue")[0].style.display = "none";
  document.getElementById('stampacosto').innerHTML = "";
  document.getElementById('stampaofferta').innerHTML = "";
  document.getElementById('stampacodice').innerHTML = "";
  document.getElementById('stampacarrozza').innerHTML = ""
  document.getElementById("km").value = "";
  document.getElementById("eta").value = "18";
  document.getElementById("nomecognome").value="";

}
