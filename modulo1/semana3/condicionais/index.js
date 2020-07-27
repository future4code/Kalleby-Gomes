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

/*
let f = prompt('Digite "77" representando graus Fahrenheit(°F), para converter em graus Kelvin(K):')
let converterFK = (f - 32)*5/9 + 273.15
console.log(f+"°F (Fahrenheit) são equivalente a "+converterFK+"K (Kelvin)")


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
*/

// PRIMEIRO 
/*
const x = Number(prompt('Digite um número:'))
const y = Number(prompt('Digite outro número:'))

let igualdade = x === y
console.log('O primeiro número é igual ao segundo número? ' + igualdade)
let diferente = x !== y
console.log('O primeiro número é diferente do segundo número? ' + diferente)
let maior = x > y
console.log('O primeiro número é maior do segundo número? ' + maior)
let menor = x < y
console.log('O primeiro número é menor do segundo número? ' + menor)
*/


/*
let n1 = Number(prompt('Um número: '))
let n2 = Number(prompt('Outro número: '))


if(n1 = n2){
    console.log("O primeiro é igual ao segundo.")
}
else if (n1 < n2){
    console.log('O primeiro é menor que o segundo.')
}
else{
    console.log('O primeiro é maior que o seugundo.')
}
*/

/*
let estado = prompt('Informe seu estado para saber sua naturalidade: ')

switch(estado){
//EXERCÍCIO 1
/*
O código pede um número para o usuário, recebe em esse valor em tipo string e em seguida converte para number.
Faz um teste se é se é verdadeiro sobre o número que usuário inseriu dividido por 2 deixa ou não valor de resto da vidisão.
Se o número divida por 2 deixar algum resto imprime "Passou no teste.", se não, imprime "Não passou no teste."
Os tipo de valores que passam no teste são números pares e os que não passam números impares.
*/

//EXERCÍCIO 2
/*
a.
Para simplificar uma estrutura de decisão if e else, em blocos.

b.
O preço da fruta  Maçã  é  R$  2.25

c.
R$ 24,55

d.
5
*/

//EXERCÍCIO 3
/*
Sim ocorrerá um erro pois tem um espoco dentro de outro representado pelos "ifs". E sendo aplicado de forma incorreta, 
porque o primeiro if do código tem sua chave de fechamento escrita no local errado. Além de poder ser otimizado com o termo "else if", 
para escrever esse código da melhor forma, evitando e corrigir o erro.
*/

//EXERCÍCIO 4

//a.
/*
const n1 = Number(prompt('Digite um número: '))
const n2 = Number(prompt('Outro número: '))

if (n1 > n2) {
    console.log(n2+', '+n1+'ah')
} else {
    console.log(n1+", "+n2+'bh')
}

Quando digitei dois números iguais então o código se deparou com uma condição de igualdade não declarada então teve como resultado falso e executou
o que está descrito no else.
*/

//b.
const n1 = Number(prompt('Digite um número: '))
const n2 = Number(prompt('Outro número: '))
const n3 = Number(prompt('Um terceiro número: '))

if (n1 > n2 && n1 > n3 && n2 > n3) { //se n1 for o maior e n3 o menor
    console.log(n3+', '+n2+', '+n1+'v1')
} else if (n1 > n2 && n1 > n3 && n2 < n3) { //se n1 for o maior e n2 o menor
    console.log(n2+', '+n3+', '+n1+'v2')
} else if (n2 > n1 && n2 > n3 && n1 < n3) { //se n2 for o maior e n1 o menor
    console.log(n1+', '+n3+', '+n2+'v3')
} else if (n2 > n1 && n2 > n3 && n3 < n2) { //se n2 for o maior e n3 o menor
    console.log(n1+', '+n3+', '+n2+'v3')
} else if (n2 > n1 && n2 > n3 && n1 < n3) { //se n3 for o maior e n1 o menor
    console.log(n1+', '+n3+', '+n2+'v3')
} else { //se n3 for o maior e n2 o menor
    console.log(n1+', '+n3+', '+n2+'v3')
} 




//EXERCÍCIO 5
