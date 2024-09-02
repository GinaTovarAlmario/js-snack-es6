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
const names = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez',
  'Chiara Ferragni','George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];
  const table = 'Tavolo VIP';
  console.log('PRIMO ESERCIZIO');
  // creo un nuovo array che mi aiuterà ad aggiungere le proprietà uso allora map()
//  voglio aggiungere nuove proprieta per ogni elemento array
const guestList = names.map((name, i)=>{
  const guest = {
    guestName: name,
    tableName: table,
    place: i+1
  }
  return guest;
});
console.log(guestList);

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

const studentPlate = students.map(student =>{
  return student.name.toUpperCase();
});
console.log('Lista nomi per placca studenti:',studentPlate);

// creo una lista per gli studenti con punteggio over70
const over70ScoreStudents = students.filter(student => student.grades > 70);
// stampo in console
console.log('studenti con punteggio sopra i 70: ',over70ScoreStudents);

const specialCase = over70ScoreStudents.filter(student =>{
  if(student.id > 120) return true;
  return false;
});
console.log('studenti con punteggio superiore a 70 e con id matricola superiore a 120: ', specialCase);

/**SNACK 3*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal*/
console.log('TERZO ESERCIZIO');

const raceBycicles = [
  {name:'Giant Propel Advanced SL', weight: 8},
  {name:'Scott Addict RC Ultimate', weight: 12},
  {name:'Specialized S-Works Aethos', weight: 6},
  {name:'Wilier Zero SLR', weight: 7},
  {name:'Orbea Orca M10iLTD PWR', weight: 9},
  {name:'Look 795 Blade RS', weight: 6},
  {name:'Cube Litening Air C', weight:11},
  {name:'Bianchi Specialissima RC', weight: 10},
  {name:'Trek Émonda SLR ', weight: 4},
  {name:'Bmc Teammachine SLR ONE', weight: 14}
];
console.log(raceBycicles);

// mi serve trovare il minimo valore di peso
let lighterBycicle = raceBycicles[0];
raceBycicles.forEach( raceBycicle =>{
  // destructuring
  const {weight} = raceBycicle
  const {weight: lighterWeight} = lighterBycicle;
  if(weight < lighterWeight){
    lighterBycicle = raceBycicle;
  }
});
const {name, weight} = lighterBycicle;

console.log(`La bicicletta più leggera è : ${name} con peso : ${weight}`);

/**SNACK 4*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti
e stampiamo tutto in console.
*BONUS*
Stampare in pagina oltre che in console!*/
console.log('ESERCIZIO QUATTRO');

const teamsSoccer = [
  {name:'Milan', points: '0', fails:'0'},
  {name:'Inter', points: '0', fails:'0'},
  {name:'Napoli', points: '0', fails:'0'},
  {name:'Torino', points: '0', fails:'0'},
  {name:'Roma', points: '0', fails:'0'}
];
// mi preparo le mie varibili per poter generare dei numeri casuali con un min e un max
// mi preparo una funzione per generare numeri random
const min = 1;
const max = 100;

for(let i = 0; i< teamsSoccer.length ; i++){
  const team = teamsSoccer[i];
  team.points = getRandomNumber(min,max);
  team.fails = getRandomNumber(min,max);
}
console.log(teamsSoccer);
const newTeam = teamsSoccer.map( element =>{
  const{ name, fails} = element;
  return {name,fails};
});
console.log(newTeam);

