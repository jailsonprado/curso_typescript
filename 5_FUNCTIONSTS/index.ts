// 1 - void
function withoutReturn(): void {
  console.log("Esta funcao nao tem retorno!");
}

withoutReturn();

// 2 - callback como argumento
function greeting(name: string): string {
  return `Ola ${name}`;
}

function preeGreeting(f: (name: string) => string, userName: string) {
  console.log("Preparando a funcao");

  const greet = f(userName);
  console.log(greet);
}

preeGreeting(greeting, "Jailson");
preeGreeting(greeting, "Leo");

// 3 - Generic function

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c", "d"]));

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  };
}

const newObject = mergeObjects(
  { name: "Jailson" },
  { age: 24, job: "Developer" }
);

console.log(newObject);

// 4 - constraints
function biggestNumber<T extends number | string>(a: T, b: T) {
  let biggest: T;

  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }
  return biggest;
}

console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "5"));

// 5 - especificar tipo e argumento
function mergeArray<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}

console.log(mergeArray([1, 2, 3], [4, 5, 6]));
console.log(mergeArray<number | string>([1, 2, 3], ["Teste", "testando"]));

// 6 - Parameters opcionais
function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Ola ${greet} ${name}, tudo bem ?`;
  }
  return `Ola ${name}, tudo bem ?`;
}

console.log(modernGreeting("Jailson"));
console.log(modernGreeting("Florisvaldo", "Dr."));

// 7 - parametro default
function somaDefault(n: number, m = 10) {
  return n + m;
}

console.log(somaDefault(10));
console.log(somaDefault(10, 15));

// 8 - unknown
function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x[1]);
  } else if (typeof x === "number") {
    console.log("X eh um numero");
  }
}

doSomething([1, 2, 3]);
doSomething(2);

// 9 - tipo never

function showErrorMessage(msg: string): never {
  throw new Error(msg);
}

// console.log(showErrorMessage("Algum erro"));

// 10 Rest parameters - rest operator

function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number);
}

console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(232, 12, 12));

// 11  destructuring parameters

function showProductDetails({
  name,
  price,
}: {
  name: string;
  price: number;
}): string {
  return `O nome do produto eh ${name} e ele custa R$${price}`;
}

const shirt = {name: "Camisa" , price: 49.99}

console.log(showProductDetails(shirt))