import React from 'react';
import styled from 'styled-components'

const DivPai = styled.div`
  margin:0;
  padding:0;
`

const DivContainer = styled.div`
  display: flex;
  justify-content: center;
`

const DivCard = styled.div`
  width: 300px;
  height: 200px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Button = styled.button`
  background-color: hsl(236,32%,26%);
  color: white;
  width: 80px;
  height: 37px;
  border: none;
`


function App() {
  return (
    <DivPai>

      <button>Ir para pagina de lista</button>
      <DivContainer>
        <DivCard>
          <label for="name">Nome:</label>
          <input type="text" id="name" name="name" />
          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" />
          <Button>Salvar</Button>
        </DivCard>
      </DivContainer>

    </DivPai>
  );
}

export default App;
