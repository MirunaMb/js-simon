/*
Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
*/

// DICHIARAZIONI GLOBALI
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


// funzione che parte da adesso fino all arrivo delle ore 09:30
function updateCountDown() {
    // now rappresenta il tempo di adesso
    const now = new Date();
    // tomorrow  rapp il tempo di domani
    const tomorrow = new Date('2023-08-24 09:30:00')
    // scopro quanto tempo resta fino a domani 
    const timeDifference = tomorrow - now;
    // quando il tempo sara finito ,quindi arriva a 0 ,la funzione ferma tutto .TextContent imposta 0 sulla pagina.
    if (timeDifference <= 0) {
        days.textContent = '0';
        hours.textContent = '0';
        minutes.textContent = '0';
        seconds.textContent = '0';
        return; // ferma tutto
    }
    // calcolo dal tempo rimanente e lo divide per 1000 per avere in realta i millisecondi
    const totalSeconds = Math.floor(timeDifference / 1000);
    //secondi in un giorno (86400) 
    //secondi in un'ora (3600)

    // divido il totale dei secondi per il numero di secondi in un giorno
    const daysLeft = Math.floor(totalSeconds / 86400);
    //in base a quanti secondi rimangono divido questo resto per 3600 per scoprire quanto vuol dire in ore 
    const hoursLeft = Math.floor((totalSeconds % 86400) / 3600);
    //in base a quante ore rimangono divido questo per 60 per scoprire quanto vuol dire in minuti 
    const minutesLeft = Math.floor(((totalSeconds % 86400) % 3600) / 60);
    // i secondi rimanenti sono il resto della divisione dei secondi rimanenti per il numero di secondi in un minuto 
    const secondsLeft = ((totalSeconds % 86400) % 3600) % 60;

    /*associando le due variabili :
    a)days prende il valore di daysLeft
    b)usando textContent mostrare il valore di days nella pagina.
    */
    days.textContent = daysLeft;
    hours.textContent = hoursLeft;
    minutes.textContent = minutesLeft;
    seconds.textContent = secondsLeft;
}

//invoco la funzione che fa scattare il conto alla rovescia 
updateCountDown();

// uso la setInterval per avviare il conto alla rovescia ogni secondo
setInterval(updateCountDown, 1000)

