// 1- Numbers
let x: number = 10;

console.log(x);

x = 16;
console.log(typeof x);
let y: number = 15.66545;

console.log(y.toPrecision(3));

// 2- string

const firstName: string = "Jailson";

console.log(firstName.toUpperCase());

let fullName: string;
const lastName: string = "Prado";

fullName = firstName + " " + lastName;

console.log(fullName);
console.log(typeof fullName);

/// 3- boolean

let a: boolean = false;

// 4- inference annotation

const annotation: string = "teste";

let inference = "teste";

console.log("teste");

const convert = 1;
console.log(typeof convert);

const convertToString = convert.toString();
console.log(typeof convertToString);

const result: string = `Imprimindo o numero convertido ${convertToString}`;

console.log(result);
