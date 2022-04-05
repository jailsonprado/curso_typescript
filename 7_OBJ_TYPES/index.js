"use strict";
// 1 - Tipo de objeto para funcao usando interface
function showProductDetails(product) {
    console.log(`O nome do produto ${product.name} e seu preco e ${product.price}`);
    if (product.isAvailable) {
        console.log("O produto esta disponivel");
    }
    else {
        console.log("Produto indisponivel no momento");
    }
}
const shirt = {
    name: "Jailson",
    price: 50.33,
    isAvailable: true,
};
showProductDetails(shirt);
showProductDetails({ name: "Tenis", price: 120.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuario tem o email ${user.email}`);
    if (user.role) {
        console.log(`A funcao do usuario eh ${user.role}`);
    }
}
const u1 = {
    email: "jailsondpd@teste.com",
    role: "Admin",
};
const u2 = {
    email: "teste@teste.com",
};
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: 'VW',
    wheels: 4
};
console.log(fusca);
const hero = {
    name: 'Goku',
    age: 32
};
console.log(hero);
const heroWithPower = Object.assign(Object.assign({}, hero), { superPowers: ['Genki Dama', 'Kamehameha'] });
console.log(heroWithPower);
const arnold = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12
};
console.log(arnold);
console.log(arnold.type);
// 7 --> readonly array
let myArray = ['Maca', 'Laranja', 'abacate'];
console.log(myArray);
myArray.forEach((item) => {
    console.log("Frutas: " + item);
});
myArray = myArray.map((item) => {
    return `Frutas: ${item}`;
});
console.log(myArray);
