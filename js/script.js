/**
 * *SNACK 1*
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
```
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',
 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
```
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico,
per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come proprietà:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto.
 */

// controllo che veda il mio script.js
console.log('Js ok');
// ho fatto un file a parte per le mie funzioni faccio il controllo
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});

  // creo il mio array di invitati
const vipGuests = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez',
  'Chiara Ferragni','George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];
  // creo un nuovo array che mi aiuterà ad aggiungere le proprietà
const newVipLists = [];
//  voglio aggiungere nuove proprieta per ogni elemento array
vipGuests.forEach((vipGuest, i, arr)=>{
  newVipLists.push({
    tableName: 'TavoloVip',
    guestName: vipGuest,
    place: (i+1)
  })
})
console.log(newVipLists);

  /**
 * *SNACK 2*
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista
contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Questo è l'elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna 	    48
145 Gaia Borromini          74
196 Luigi Grimaldello 	    68
102 Piero della Francesca   50
120 Francesca da Polenta    84
 */

// creo il mio array di oggetti
console.log('secondo esercizio')
const students = [
  {id: 213 , name:'Marco della Rovere', grades: 78},
  {id: 110 , name:'Paola Cortellessa', grades: 96},
  {id: 250 , name:'Andrea Mantegna', grades: 48},
  {id: 145 , name:'Gaia Borromini', grades: 74},
  {id: 196 , name:'Luigi Grimaldello', grades: 68},
  {id: 102 , name:'Piero della Francesca', grades: 50},
  {id: 120 , name:'Francesca da Polenta', grades: 84},
]

const studentName = students.map(student =>{
  return student.name.toUpperCase();
});
console.log('Lista nomi studenti :',studentName);

// creo una lista per gli studenti con punteggio over70
const over70ScoreStudents = students.filter(student => student.grades > 70);
// stampo in console
console.log('studenti con punteggio sopra i 70: ',over70ScoreStudents);

const specialCase = students.filter(student =>{
  if(student.grades > 70 && student.id > 120) return true;
  return false;
});
console.log('studenti con punteggio superiore a 70 e con id matricola superiore a 120: ', specialCase);