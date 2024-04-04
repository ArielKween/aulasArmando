let a = 10;
let b = 11;
let c = 12;

console.log(`Primeira condição com && = ${a > b && c > a}`);
console.log(`Segunda condição com && = ${c > b && c > a}`);

console.log(`Primeira condição com || = ${a > b || c < a}`);
console.log(`Segunda condição com || = ${a  > b || c > a}`);

console.log(`A negação da primeira expressão é = ${!(a > b)}`);
console.log(`A negação da segunda expressão é = ${!(a < b)}`);