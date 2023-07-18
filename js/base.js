// alert("Hello! I am an alert box!!");

const nome = prompt("Qual'è il tuo nome?");

console.log(nome);

const cognome = prompt("Qual'è il tuo cognome?");

console.log(cognome);

const colore = prompt("Qual'è il tuo colore preferito?");

console.log(colore);

let numero = "21";

let finalPsw = nome + cognome + colore + numero;

document.getElementById("psw").innerHTML = finalPsw;

// in case I'll need the backslash
// let text = `The quick
// brown fox
// jumps over
// the lazy dog`;
