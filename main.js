// finestra introduttiva
alert("Buongiorno e benvenuti in TreniTreni, le farò qualche domanda per calcolare il prezzo del suo biglietto. In base al suo chilometraggio e  alla sua età avrà il suo prezzo personalizzato. La ringrazio per averci scelti. Prema ok per continuare ");
// creare variabile nome e cognome
var identity;
// creare variabile km
var km;
// creare variabile età
var age;
// creare variabile costo km senza sconto
var costoperkm;
// chiedere il nome e il cognome
identity = prompt("Inserisca nome e cognome per favore.");
// chiedere il kilometraggio
km = prompt ("inserire il numero di chilometri che vuole fare");
// chiedere l'età
age = prompt ("inserisca la sua età per favore");
// moltiplicare il numero di km x 0.21 euro
costoperkm = (km * 0.21);
// controllare eta se maggiore di 65 o minore di 18
// se minore di 18 applicare uno sconto del 20

// se maggiore di 65 applicare uno sconto del 40
if (age < 18) {
  costoperkm = (costoperkm - ((costoperkm * 20)/100));
  document.getElementById('password').innerHTML = 'Gentilissimo/a '+ identity + ' il costo del tuo biglietto è :' + costoperkm + ' euro in quanto abbiamo applicato lo sconto del 20 per cento considerando che lei è under 18';
}
else if (age > 65){
    costoperkm = (costoperkm - ((costoperkm * 40)/100));
    document.getElementById('password').innerHTML = 'Gentilissimo/a '+ identity + ' il costo del tuo biglietto è :' + costoperkm + ' euro in quanto abbiamo applicato lo sconto del 40 per cento considerando che lei è over 65';
}
else{
  document.getElementById('password').innerHTML = 'Gentilissimo/a '+ identity + ' il costo del tuo biglietto è :' + costoperkm + ' euro, non abbiamo applicato nessuno sconto, in quanto non rientra in nessuna categoria per gli sconti';
}
