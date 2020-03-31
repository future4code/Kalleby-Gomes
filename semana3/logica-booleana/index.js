/* 
Exercícios de interpretação de código
1.
a. false
b. false
c. true
d. false
e. boolean

2.
a. Arrays são maneiras de armazenar e acessar mais de uma informação simultaneamente. 
Declarando em JS: "let array = [1, 2, 3]"

b. Inicial é 0

c. Digita-se: "array.length"

d.
I. undefined
II. null
III. 11
IV. 3 e 4
V. 19 e 9
VI. 3
VII. 1 (mas pensei que era 2, não entendi) 
*/


// Exercícios de escrita de código

// 1.
// a.
let f = prompt("Informe os graus em Fahrenheit:")
let converterFK = (f - 32)*5/9 + 273.15
console.log(f+" °F (Fahrenheit) são "+converterFK+" K (Kelvin)")

// b.

let c = prompt('Digite "80" representando graus Celsius(°C), para converter em graus Kelvin(K):')
let converterCF = c*9/5 + 32
console.log(c+"°C (Celsius) são equivalente a "+converterCF+"°C (Fahrenheit)")


// c.

let c = prompt('Digite "30" representando graus Celsius(°C), para converter em graus Fahrenheit(°C) e Kelvin(K):')
let converterCF = c*9/5 + 32
let converterCK = (converterCF - 32)*5/9 + 273.15
console.log(c+"°C (Celsius) são equivalente a "+converterCF+"°C (Fahrenheit) e "+converterCK+"K (Kelvin)")


// d.

let c = prompt('Digite um valor representando graus Celsius(°C), para converter em graus Fahrenheit(°C) e Kelvin(K):')
let converterCF = c*9/5 + 32
let converterCK = (converterCF - 32)*5/9 + 273.15
console.log(c+"°C (Celsius) são equivalente a "+converterCF+"°C (Fahrenheit) e "+converterCK+"K (Kelvin)")


// 2.

let nome = prompt('Qual o seu nome?')
let idade = prompt('Qual a sua idade?')
let tempoLivre = prompt('O que você gosta de fazer em seu tempo livre?')
let amizade = prompt('Meu nome é Browser.\nQuer ser meu amigo?')
let segredo = prompt('Conta-me um segredo teu.\n Juro que não o pronunciarei!.')
console.log('1. Qual o seu nome?\n'+' Resposta: '+nome)
console.log('2. Qual a sua idade?\n'+'Resposta: '+idade)
console.log('3. O que você gosta de fazer em seu tempo livre?\n'+'Resposta: '+tempoLivre)
console.log('4. Meu nome é Browser.\nQuer ser meu amigo?\n'+'Resposta: '+amizade)
console.log('5. Conta-me um segredo teu.\n Juro que não o pronunciarei!.\n'+'Resposta: '+segredo)


// 3.
//let consumo = prmpt('Informe o quilowatt-hora de energia consumigo em sua residência:')

// a.

let consumo = prompt('Digite "280" representando a quantidade de quilowatt-hora de energia consumigo em sua residência:')
let custo = consumo*0.05
console.log('Você deverá pagar a conta de R$ '+custo+',00 (Reais).\n')


// b.
let consumo = prompt('Digite "280" representando a quantidade de quilowatt-hora de energia consumigo em sua residência:')
let custo = consumo*0.05
let desconto = custo-(custo*15/100)
console.log('Você deverá pagar a conta de R$ '+custo+',00 (Reais).\n')
console.log('Com desconto de 15% seu conta fica no valor de R$ '+desconto+',00 (Reais).')