import React from 'react';

function Etapa1() {
  return (
    <div>
        <h1>ESTAPA1 - DADOS GERAIS</h1>

        <label for="nome">1. Qual o seu nome?</label><br>
        <input type="text" id="nome" name="nome" value=""><br>

        <label for="idade">2. Qual a sua idade?</label><br>
        <input type="text" id="idade" name="idade" value=""><br><br>

        <label for="email">2. Qual a sua idade?</label><br>
        <input type="text" id="email" name="email" value=""><br><br>

        <input list="escolaridade" name="browser">
        <datalist id="escolaridade">
            <option value="Ensino Médio Incompleto">
            <option value="Ensino Médio Completo">
            <option value="Ensino Superior Incompleto">
            <option value="Ensino Superior Completo">
        </datalist>
        
        <input type="submit">

    </div>
  );
}

export default Etapa1;