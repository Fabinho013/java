/* Operadores Aritméticos

+ = adição / concatenação

- / *

potenciação **

%

*/

const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log((num1 + num2) * num3);

let contador = 1;
contador++; //2
contador++; //3
contador++; //4
contador++; //5 (NÃO É POSSIVEL UTILIZAR EM CONST, APENAS LET, também é possivel fazer ++contador; , porém tem diferença, se for antes ele vai meio que adicionar o número e depois ler a variante.)
++contador; //6
console.log(contador)

const passo = 1;
let contador2 = 0;

contador2 = contador2 + passo;
console.log(contador2);
contador2 = contador2 + passo;
console.log(contador2);
contador2 = contador2 + passo;
console.log(contador2); // também posso fazer contador += 2;

/*
()
**
* / %
+ -
 */


// Nan - Not a Number
const nume1 = 10;
// const nume2 = parseFloat('5.2'); // parse int faz a conversão para número ou outro tipo de dado.
const nume2 = Number('5.2');
console.log(nume1 + nume2);
console.log(typeof nume2);