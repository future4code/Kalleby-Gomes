import React from 'react';
import styled from "styled-components"

const BotaoGrande = styled.button`
  background-color: blue;
  width: 200px;
  height: 70px;
  color: yellow;
`
const BotaoPequeno = styled.button`
  background-color: yellow;
  width: 100px;
  height: 30px;
  color: green;
`

const Botao = styled.button`
  background: ${props => props.cor};
  width: ${props => {
    if (props.tamanho === "grande") {
      return "200px"
    } else if (props.tamanho === "pequeno") {
      return "100px"
    }
  }};
  height: ${props => {
    if (props.tamanho === "grande") {
      return "70px"
    } else if (props.tamanho === "pequeno") {
      return "30px"
    }
  }};
  color: white;
`

function DoisBotoes() {
    return (
        <div>
            <BotaoGrande> SALVAR </BotaoGrande>
            <BotaoPequeno> DELETAR </BotaoPequeno>
            <hr />
            <Botao cor={"blue"} tamanho={"grande"} >kk</Botao>
            <Botao cor={"00ff00"} tamanho={"pequeno"} >DELETAR</Botao>
        </div>
    )
}

export default DoisBotoes;