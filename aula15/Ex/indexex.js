let numero = parseFloat(prompt("Digite um número aleatorio "));

document.body.innerHTML += `Seu número é ${numero}<br />`;
document.body.innerHTML += `${numero} é inteiro:${Number.isInteger(numero)}<br />`;
document.body.innerHTML += `É NaN:${Number.isNaN(numero)}<br />`;
document.body.innerHTML += `Arredondando para baixo: ${Math.floor(numero)}<br />`;
document.body.innerHTML += `Arredondando para cima: ${Math.ceil(numero)}<br />`;
document.body.innerHTML += `Com duas casas decimais ${numero.toFixed(2)}<br />`;

/* 
const numero = prompt('Digite um número');
const numeroTitutlo = document.getElementById('numero-titulo');


*/