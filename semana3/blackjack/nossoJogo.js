/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vido ao jogo Blackjack!\n ")
let pergunta = window.confirm("Quer iniciar uma nova rodada?")


let cartas = []
let nipes = []

   if(pergunta){

      for(i = 0; i < 4; i++){
         const carta = comprarCarta()
         cartas.push(carta.valor)
         nipes.push(carta.texto)
      }

   } else {
      console.log("O jogo acabou")
   }

   let pontosUsuario = cartas[0] + cartas[1]
   let pontosComputador = cartas[2] + cartas[3]


   console.log("Usuário - cartas: "+nipes[0]+" "+nipes[1]+" - pontuação "+pontosUsuario)
   console.log("Computador - cartas: "+nipes[2]+" "+nipes[3]+" - pontuação "+pontosComputador)
   
   if(pontosUsuario > pontosComputador){
      console.log("O usuário ganhou!")
   } else if(pontosUsuario < pontosComputador){
      console.log("O computador ganhou!")
   } else{
      console.log("Empate!")
   }


   