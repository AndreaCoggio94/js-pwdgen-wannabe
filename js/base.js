alert("Benvenuto al tuo generatore di password sicurissimo!");

const nome = prompt("Inserisci il tuo nome");

// console.log(nome);

const cognome = prompt("Inserisci il tuo cognome");

// console.log(cognome);

const colore = prompt("Inserisci il tuo colore preferito");

// console.log(colore);

let numeroTotalmenteCasuale = "21";

let finalPsw = nome + cognome + colore + numeroTotalmenteCasuale;

document.getElementById("psw").innerHTML = finalPsw;

// in case I'll need the backslash
// let text = `The quick
// brown fox
// jumps over
// the lazy dog`;
