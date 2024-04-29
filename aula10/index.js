const nome = 'Fábio Henrique'; // string
const nome1 = "Fábio Henrique"; // string
const nome2 = `Fábio Henrique`; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined quando não tem valor.
let sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na memória.
const aprovado = false; // Boolean = true, false (lógico')

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);