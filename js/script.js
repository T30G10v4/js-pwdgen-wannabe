// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// INPUT
const userName = prompt("Inserisci il tuo nome");
const userSurname = prompt("Inserisci il tuo cognome");
const userColor = prompt("Inserisci il tuo colore preferito");

// ELABORAZIONE
const result = `${userName}${userSurname}${userColor}21`;

// OUTPUT
document.getElementById("password").innerHTML = result;
