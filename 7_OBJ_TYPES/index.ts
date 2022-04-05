// 1 - Tipo de objeto para funcao usando interface

interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product) {
  console.log(
    `O nome do produto ${product.name} e seu preco e ${product.price}`
  );
  if (product.isAvailable) {
    console.log("O produto esta disponivel");
  } else {
    console.log("Produto indisponivel no momento");
  }
}

const shirt: Product = {
  name: "Jailson",
  price: 50.33,
  isAvailable: true,
};

showProductDetails(shirt);
showProductDetails({ name: "Tenis", price: 120.99, isAvailable: false });

// 2 - Proproedade opcional em interface

interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  console.log(`O usuario tem o email ${user.email}`);

  if (user.role) {
    console.log(`A funcao do usuario eh ${user.role}`);
  }
}

const u1: User = {
  email: "jailsondpd@teste.com",
  role: "Admin",
};

const u2: User = {
  email: "teste@teste.com",
};

showUserDetails(u1);
showUserDetails(u2);

// 3- readOnly

interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: 'VW',
  wheels: 4
};

console.log(fusca);

// 4 - index signature

// 5 - extends interfaces

interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superPowers: string[]
}

const hero: Human = {
  name: 'Goku',
  age: 32
}

console.log(hero);

const heroWithPower: SuperHuman = {
  ...hero,
  superPowers: ['Genki Dama' , 'Kamehameha']
}

console.log(heroWithPower);

// 6 - intersection types

interface Character {
  name: string
}

interface Gun {
  type: string,
  caliber: number
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
  name: 'Arnold',
  type: 'Shotgun',
  caliber: 12
}

console.log(arnold);
console.log(arnold.type);

// 7 --> readonly array

let myArray: ReadonlyArray<string> = ['Maca', 'Laranja', 'abacate']
console.log(myArray);

myArray.forEach((item) => {
  console.log("Frutas: " + item);
})

myArray = myArray.map((item) => {
  return `Frutas: ${item}`
})

console.log(myArray)