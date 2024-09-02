// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]
// Crea un nuovo array con la lista dei mammiferi.
/*const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'delfino', famiglia: 'delfinidi', classe: 'mammiferi' },
    { nome: 'serpente', famiglia: 'felidi', classe: 'rettili' },
    { nome: 'papera', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'camaleonte', famiglia: 'fasianidi', classe: 'rettili' },
    { nome: 'iguana', famiglia: 'fasianidi', classe: 'rettili' },
    { nome: 'Canguro', famiglia: 'marsupiadi', classe: 'mammiferi' },
];
console.log(animals);

const mammals = animals.filter(element => element.classe === 'mammiferi');
console.log(mammals); */

// SNACK NUMERO 7
// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e
// l'indicazione se può guidare, in base all'età.


// const persons = [
//     {nome:'maria', cognome:'rossi',età:'33'},
//     {nome:'luigi', cognome:'pippo',età:'13'},
//     {nome:'marco', cognome:'plutone',età:'25'},
//     {nome:'sveva', cognome:'abate',età:'18'},
//     {nome:'chiara', cognome:'dufour',età:'17'},
//     {nome:'dasha', cognome:'sole',età:'67'},
//     {nome:'mirko', cognome:'verdi',età:'78'},
//     {nome:'laura', cognome:'kogut',età:'66'},
//     {nome:'paolo', cognome:'bruzzo',età:'9'},
//     {nome:'dario', cognome:'dolores',età:'10'},
//     {nome:'luca', cognome:'carvajal',età:'17'},
//     {nome:'irene', cognome:'rosetta',età:'30'},
//     {nome:'alberto', cognome:'paperino',età:'19'},
// ];
// console.log(persons);

// // devo creare un nuovo array
// const newArray = persons.map((element) =>{
//     // for(let persona of persons){
//         const { nome, cognome, età} = element;
//         if(età >= 18){
//             element = `${nome} ${cognome} : ha ${età} e può guidare`;
//         } else {
//             element = `${nome} ${cognome} : ha ${età} e non può guidare`;
//         }
//     // }
//     return (element);
// });
// console.log(newArray);