/*
Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
Consigli
Da quante ore è composto un giorno? // 24 ore
Da quanti minuti è composta un'ora? //60 min = 3 600 000 milisecondi
Da quanti secondi è composto un minuto? 1 min = 60 sec = 60 000 milisecondi
Da quanti millisecondi è composto un secondo? 1 sec = 1000 millisecondi
Quanti millisecondi mi separano da domani alle 9:30? abbiamo 18 ore = 64 800 000 milisecondi  e 30 min = 1 800 000 milisecondi ore fino a domani alle 09,30 (TOT  66 600 000)
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?


*/
// DICHIARAZIONI
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


// funzione che deve partire all arrivo delle ore 9:30
function updateCount(function () {
    let time
    const tomorrow = new Date('2023-08-24 09:30:00')
    time--;
    console.log(time--)
})