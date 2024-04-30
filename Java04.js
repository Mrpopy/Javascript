var entrada = require("readline-sync")
var nota1 = parseFloat(entrada.question("Digite a primeira nota "))
var nota2 = parseFloat(entrada.question("Digiter a sua segunda nota "))
var nota3 = parseFloat(entrada.question("Digite a sua terceira nota "))
var soma = nota1+nota2+nota3
var media = soma / 3 
console.log (`A média das 3 notas será de ${media}`)