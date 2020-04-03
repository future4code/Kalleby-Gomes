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
console.log("Bem vido ao jogo Blackjack!")
let pergunta = window.confirm("Quer iniciar uma nova rodada?")


let jogador = []
let computador = []

   if(pergunta){
      for(i = 0; i < 4; i++)
         const carta = comprarCarta()

         let carta1 = carta.texto
         let valorCarta1 = carta.valor
         jogador.push()
         console.log(carta1+" testando "+valorCarta1)
      
         let carta2 = carta.texto
         let valorCarta2 = carta.valor
         console.log(carta1+" testando "+valorCarta1)



      console.log()
   } else {
      console.log("O jogo acabou")
   }


   