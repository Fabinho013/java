const nome = prompt('Digite seu nome completo!');
nome.indexOf
document.body.innerHTML += `Seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é ${nome[1]}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra  no seu nome? ${nome.indexOf("F")}<br />`;
document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? ${nome.lastIndexOf("a")}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(31, 34)}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(" ")}<br />`; //${nome.match(/[a-z]/g)}
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase(nome)}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLocaleLowerCase()}<br />`;