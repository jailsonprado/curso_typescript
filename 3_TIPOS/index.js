"use strict";
// Tipos de array
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);
const nomes = ["jailson", "teste", "teste 1"];
console.log(nomes);
// Outra sintaxe para definir Array
const nums = [1, 2, 3];
const frutas = ["uva", "abacate", "laranja"];
console.log(nums);
console.log(frutas);
// Declarando tipos objeto
function passCoordinator(coord) {
    console.log("X coordinates " + coord.x);
    console.log("Y coordinates " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinator(objCoord);
// Union Type -- Define mais de um tipo de valor
function showBalamce(balance) {
    console.log(`O saldo da conta e R$${balance}`);
}
showBalamce(100);
showBalamce("500");
const arr2 = [1, "teste"];
// Avancando em union types
function showUseRoles(role) {
    if (typeof role === "boolean") {
        return "Usuario nao aprovado";
    }
    return `A funcao do usuario eh ${role}`;
}
console.log(showUseRoles(false));
console.log(showUseRoles("Admin"));
function showId(id) {
    console.log(`O ID eh ${id}`);
}
showId(1);
showId("200");
showId(123);
function showCoord(obj) {
    console.log(`X: ${obj.x} y: ${obj.y} z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20,
};
showCoord(coordObj);
const somePerson = { name: "Jailson", age: 24 };
console.log(somePerson);
// Literal types
function showDirection(direction) {
    console.log(`A direcao eh: ${direction}`);
}
showDirection("left");
// showDirection("top"); <<< ele nao aceita outro valor que nao esta definido nos params da funcao
// no null assertion operators
