// console.log("hello world");

//
// Obiettivi dell'esercizio:

// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
var studente = {
  nome :"Marco",
  cognome : "Rossi",
  eta : 30,
}
// Stampare a schermo attraverso il for in tutte le proprietà;
for (var chiave in studente ) {
  console.log(chiave + ": " + studente[chiave]);
  document.getElementById('studente-con-proprietà').innerHTML += chiave + ": " + studente[chiave] + " ";
}
// Creare un array di oggetti di studenti.
var arrayStudenti = [
  {
    nome :"Marco",
    cognome : "Polo",
    eta : 30,
  },
  {
    nome :"Gianni",
    cognome : "Rossi",
    eta : 25,
  },
  {
    nome :"Franco",
    cognome : "Danubio",
    eta : 28,
  },
];
console.log(arrayStudenti);
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
for (var i = 0; i < arrayStudenti.length; i++) {
  console.log("studente: ", arrayStudenti[i].nome, arrayStudenti[i].cognome);
  document.getElementById('lista-studenti').innerHTML += "Studente: " + arrayStudenti[i].nome + " " + arrayStudenti[i].cognome + "<br>";
}
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var inserimentoNuovoStudente = {}
inserimentoNuovoStudente.nome = prompt("nome nuovo studente:");
inserimentoNuovoStudente.cognome = prompt("cognome dello studente:");
inserimentoNuovoStudente.eta = parseInt(prompt("eta dello studente:"));
arrayStudenti.push(inserimentoNuovoStudente)
// console.log(inserimentoNuovoStudente);
console.log(arrayStudenti);

for (var i = 0; i < arrayStudenti.length; i++) {
  console.log("studente: ", arrayStudenti[i].nome, arrayStudenti[i].cognome);
  document.getElementById('lista-con-aggiunto').innerHTML += "Studente: " + arrayStudenti[i].nome + " " + arrayStudenti[i].cognome + "<br>";
}
