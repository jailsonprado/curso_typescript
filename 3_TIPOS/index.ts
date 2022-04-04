// Tipos de array

let numbers: number[] = [1, 2, 3];
numbers.push(4);
console.log(numbers);

const nomes: string[] = ["jailson", "teste", "teste 1"];
console.log(nomes);

// Outra sintaxe para definir Array

const nums: Array<number> = [1, 2, 3];
const frutas: Array<string> = ["uva", "abacate", "laranja"];

console.log(nums);
console.log(frutas);

// Declarando tipos objeto

function passCoordinator(coord: { x: number; y: number }) {
  console.log("X coordinates " + coord.x);
  console.log("Y coordinates " + coord.y);
}

const objCoord = { x: 329, y: 84.2 };

passCoordinator(objCoord);

// Union Type -- Define mais de um tipo de valor
function showBalamce(balance: string | number) {
  console.log(`O saldo da conta e R$${balance}`);
}

showBalamce(100);
showBalamce("500");

const arr2: Array<number | string> = [1, "teste"];

// Avancando em union types

function showUseRoles(role: boolean | string) {
  if (typeof role === "boolean") {
    return "Usuario nao aprovado";
  }

  return `A funcao do usuario eh ${role}`;
}

console.log(showUseRoles(false));
console.log(showUseRoles("Admin"));

// Type ALias

type ID = string | number;

function showId(id: ID) {
  console.log(`O ID eh ${id}`);
}

showId(1);
showId("200");
showId(123);

// Interface !!!!!!!!!!!!!!!!! IMPORTANT

interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoord(obj: Point) {
  console.log(`X: ${obj.x} y: ${obj.y} z: ${obj.z}`);
}

const coordObj: Point = {
  x: 10,
  y: 15,
  z: 20,
};

showCoord(coordObj);

// Interface x type alias

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const somePerson: Person = { name: "Jailson", age: 24 };
console.log(somePerson);

type personType = { name: string }; /// nao tem como duplicar

// Literal types

function showDirection(direction: "left" | "right" | "center") {
  console.log(`A direcao eh: ${direction}`);
}

showDirection("left");
// showDirection("top"); <<< ele nao aceita outro valor que nao esta definido nos params da funcao

// no null assertion operators
