// Chiedere all’utente il cognome,
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
// Stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.


var cognomi = ["rossi", "grimaldi", "capogna", "bianchi", "ciarla"];

var cognomeUtente = prompt("inserisci il tuo cognome");


cognomi.push("cognomeUtente");

cognomi.sort();

cognomi.reverse();
document.getElementById("demo").innerHTML = cognomi;
