// 1)
// - string
// - number
// - boolean
// -null
// -undefined
// -any
// - never
// 2)
var nome = "Alfonso";
var eta = 26;
var ts = true;
// 3)
var greet = function (name) {
    return ("ciao ".concat(name));
};
console.log(greet("stefano"));
// 4)
var sum = function (a, b) {
    return (a + b);
};
sum(50, 50);
// 5)
var spesa = function (price) {
    var iva = price * 0.22;
    return (price + iva);
};
console.log(spesa(100));
// 6)
var concat = function (a, b) {
    return ((a + b).length);
};
console.log(concat('mela', 'pera'));
// 7)
// type union permette di definire una variabile con più tipi
var myVariable = 'ciao';
myVariable = 100;
// 8)
var myVariable2 = 10;
myVariable2 = null;
myVariable2 = undefined;
//   9)
var week = 'lunedi';
week = 'martedi';
week = 'mercoledi';
week = 'giovedi';
week = 'venerdi';
week = 'sabato';
week = 'domenica';
//  10)
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
// 11)
var myTuple = ['js', 'react', 'ts', 1, 2];
var utente = {
    firstname: "mario",
    lastname: "rossi",
    age: 20
};
var studenti = [
    { nome: "Luca", voto: 6 },
    { nome: "Maria", voto: 7 },
    { nome: "Giulia", voto: 8 },
    { nome: "Marco", voto: 10 },
];
// 17)
var sport = {
    marca: 'ferrari',
    modello: 'spider',
    anno: 2000,
};
