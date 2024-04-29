//               01234567
let umaString = 'um Texto'; // Caso eu queira que o " escape no console.log, é necessario colocar dentro de barras ( / / ), caso queira inserir uma barra ( / ) basta colocar // juntas.

console.log(umaString.concat(' ', 'em', ' ', 'um'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`); // Template String

console.log(umaString.indexOf('Texto'));
console.log(umaString.indexOf('Um', 3));
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('m', 3));


console.log(umaString.match(/[a-z]/g)); // Impressoes regulares
console.log(umaString.search(/x/));
console.log(umaString.replace('um', 'Outra'));

console.log(umaString.length); 
console.log(umaString.slice(2,5))
console.log(umaString.substring(umaString.length -5, umaString.length -1));

let duasString = 'O rato roeu a roupa do rei de roma.';

console.log(duasString.split(' ', 2));
console.log(duasString.toUpperCase());
console.log(duasString.toLowerCase());