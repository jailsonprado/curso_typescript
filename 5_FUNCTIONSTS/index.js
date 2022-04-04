"use strict";
// 1 - void
function withoutReturn() {
    console.log("Esta funcao nao tem retorno!");
}
withoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return `Ola ${name}`;
}
function preeGreeting(f, userName) {
    console.log("Preparando a funcao");
    const greet = f(userName);
    console.log(greet);
}
preeGreeting(greeting, "Jailson");
preeGreeting(greeting, "Leo");
// 3 - Generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c", "d"]));
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObject = mergeObjects({ name: "Jailson" }, { age: 24, job: "Developer" });
console.log(newObject);
// 4 - constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "5"));
// 5 - especificar tipo e argumento
function mergeArray(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArray([1, 2, 3], [4, 5, 6]));
console.log(mergeArray([1, 2, 3], ["Teste", "testando"]));
// 6 - Parameters opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Ola ${greet} ${name}, tudo bem ?`;
    }
    return `Ola ${name}, tudo bem ?`;
}
console.log(modernGreeting("Jailson"));
console.log(modernGreeting("Florisvaldo", "Dr."));
// 7 - parametro default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(10, 15));
// 8 - unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[1]);
    }
    else if (typeof x === "number") {
        console.log("X eh um numero");
    }
}
doSomething([1, 2, 3]);
doSomething(2);
// 9 - tipo never
function showErrorMessage(msg) {
    throw new Error(msg);
}
// console.log(showErrorMessage("Algum erro"));
// 10 Rest parameters - rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(232, 12, 12));
// 11  destructuring parameters
function showProductDetails({ name, price, }) {
    return `O nome do produto eh ${name} e ele custa R$${price}`;
}
const shirt = { name: "Camisa", price: 49.99 };
console.log(showProductDetails(shirt));
