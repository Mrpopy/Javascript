var entrada = require("readline-sync")
var numero1 = parseFloat(entrada.question("Digite o primeiro numero: "))
var numero2 = parseFloat(entrada.question("Digite o segundo numero: "))
if (numero1 != numero2)
console.log(`esse numero é falso`)
else
console.log(`é verdadeiro`)