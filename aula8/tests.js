const nome = 'Fábio Henrique';
let idade = '23';
const peso = '63';
const altura = '1.77';
let imc = peso / (altura * altura);
let anoNascimento = 2023 - idade;

console.log(nome, 'tem', idade, 'anos e pesa', peso, 'kg tem', altura, 'de altura e seu IMC é de', imc, nome, 'nasceu em', anoNascimento,);
console.log(imc);
console.log(anoNascimento);

// template strings

console.log(`${nome}`);