/*let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const VarATemp = varA;
varA = varB;
varB = varC;
varC = VarATemp;

console.log(varA, varB, varC);*/

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA]; 

/*varA = varB;
varB = varC;
varC = varA;*/

console.log(varA, varB, varC);