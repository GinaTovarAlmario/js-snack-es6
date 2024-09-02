// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]
// Crea un nuovo array con la lista dei mammiferi.





const animals = [
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
console.log(mammals);