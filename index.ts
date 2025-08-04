// 1)
// - string
// - number
// - boolean
// -null
// -undefined
// -any
// - never


// 2)
const nome :string = "Alfonso"
const eta :number = 26
const ts :boolean = true

// 3)
const greet = (name:string)=>{
    return(
        `ciao ${name}`
    )
}
console.log(greet("stefano"))

// 4)
const sum = (a:number, b:number) :number =>{
    return(
        a+b
    )
}
sum(50,50)

// 5)
const spesa =(price:number)=>{
    const iva = price*0.22;
    return(
        price + iva
    )
}
console.log(spesa(100))

// 6)
const concat = (a:string,b:string):number =>{
return(
    (a+b).length
)
}
console.log(concat('mela','pera'))

// 7)
// type union permette di definire una variabile con più tipi
let myVariable :string|number = 'ciao'
myVariable = 100
// 8)
let myVariable2 :number|null|undefined = 10
 myVariable2=null
  myVariable2=undefined

//   9)
let week :string = 'lunedi'
 week = 'martedi'
 week = 'mercoledi'
 week = 'giovedi'
 week = 'venerdi'
 week = 'sabato'
 week = 'domenica'

//  10)

const numbers:number[]=[1,2,3];
const numbers2:Array<number> =[1,2,3];

// 11)

const myTuple:[string,string,string,number,number]=['js','react','ts',1,2]

// 12)
// interface puo essere estesa e riaperta mentre type no

// 13
interface persona  {
firstname : string
lastname : string
age : number
}

const utente: persona ={
firstname :"mario",
lastname :"rossi",
age :20
}

// 14)

interface persona2 {
email :string,
telefono ?: number
}

// 15)

interface studente{
    nome:string,
    voto:number,
}
const studenti:studente[] = [
  { nome: "Luca", voto: 6 },
  { nome: "Maria", voto: 7 },
  { nome: "Giulia", voto: 8 },
  { nome: "Marco", voto: 10 },
];

// 16)
interface veicolo {
    marca: string,
modello: string,
}

interface auto extends veicolo{
    anno: number
}
// 17)
const sport: auto = {
    marca:'ferrari',
    modello: 'spider',
    anno: 2000,
}

// 18)
// i generics sono un TIPO che viene passato come argomento per un interfaccia

// 19)
// si
interface coppia<A, B> {
  primo: A;
  secondo: B;
}