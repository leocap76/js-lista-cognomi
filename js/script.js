// Chiedere all’utente il cognome,
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
// Stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.


var cognomi = [" rossi", " grimaldi", " capogna", " bianchi", " ciarla"];

var cognomeUtente = prompt("inserisci il tuo cognome");
console.log(cognomeUtente);

cognomi.push(cognomeUtente);

cognomi.sort();
document.getElementById("surname").innerHTML = cognomi;

for (var i = 0; i < cognomi.length; i++){
  var numeroPosizione = i;
  document.getElementById("surname-number").innerHTML = numeroPosizione +1;
}

var pos = cognomi.indexOf("cognomeUtente");
