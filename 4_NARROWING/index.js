"use strict";
// 1- Type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("impossivel realizar a soma");
    }
}
sum("4", "59");
sum(4, 10);
sum("4", 45);
// 2- checando se o valor existe
function operations(arr, operator) {
    if (operator) {
        if (operator === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operator === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Por favor, defina uma operacao");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([4, 5, 6], "multiply");
function showUserReview(review) {
    if (!review) {
        console.log("Voce nao avaliou o produto");
        return;
    }
    console.log(`A nota que voce deu foi : ${review}, obrigado!`);
}
showUserReview(false);
showUserReview(5);
showUserReview(2);
