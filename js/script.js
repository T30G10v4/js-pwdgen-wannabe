// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// INPUT
const userName = prompt("Inserisci il tuo nome");
console.log(userName, typeof(userName));

const userSurname = prompt("Inserisci il tuo cognome");
console.log(userSurname, typeof(userSurname));

const userColor = prompt("Inserisci il tuo colore preferito");
console.log(userColor, typeof(userColor));

// ELABORAZIONE
const result = `${userName}${userSurname}${userColor}21`;
console.log(result, typeof(result));

// OUTPUT
document.getElementById("password").innerHTML = result;
console.log(result, typeof(result));
