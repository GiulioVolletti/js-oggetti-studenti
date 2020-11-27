console.log("hello world");

//
// Obiettivi dell'esercizio:

// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
var studente = {
  nome :"marco",
  cognome : "rossi",
  eta : 30,
}
// Stampare a schermo attraverso il for in tutte le proprietà;
for (var chiave in studente ) {
  console.log(chiave + ": " + studente[chiave]);
}
// Creare un array di oggetti di studenti.
var arrayStudenti = [
  {
    nome :"marco",
    cognome : "polo",
    eta : 30,
  },
  {
    nome :"gianni",
    cognome : "rossi",
    eta : 25,
  },
  {
    nome :"franco",
    cognome : "danubio",
    eta : 28,
  },
];
console.log(arrayStudenti);
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
for (var i = 0; i < arrayStudenti.length; i++) {
  console.log("studente: ", arrayStudenti[i].nome, arrayStudenti[i].cognome);
}
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var arrayNuovoStudente = {}
arrayNuovoStudente.nome = prompt("nome nuovo studente:");
arrayNuovoStudente.cognome = prompt("cognome dello studente:");
arrayNuovoStudente.eta = parseInt(prompt("eta dello studente:"));
arrayStudenti.push(arrayNuovoStudente)
// console.log(arrayNuovoStudente);
console.log(arrayStudenti);
