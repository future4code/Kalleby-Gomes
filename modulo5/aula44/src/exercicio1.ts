const minhaString: string = "kalleby"
console.log(minhaString);

let meuNumero: number = 10
console.log(meuNumero);

enum CORESARCOIRIS {
    VIOLETA = "Violeta",
    ANIL = "Anil",
    AZUL = "Azul",
    VERDE = "Verde",
    AMARELO = "Amarelo",
    LARANJA = "Laranja",
    VERMELHO = "Vermelho",
};

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORESARCOIRIS,
};

const umaPessoa: pessoa = {
    nome: "Kalleby",
    idade: 23,
    corFavorita: CORESARCOIRIS.AMARELO,
};

const pessoaDois: pessoa = {
    nome: "João",
    idade: 21,
    corFavorita: CORESARCOIRIS.AZUL,
};

const pessoaTres: pessoa = {
    nome: "Ana",
    idade: 25,
    corFavorita: CORESARCOIRIS.VERDE,
};

const pessoaQuatro: pessoa = {
    nome: "Julia",
    idade: 22,
    corFavorita: CORESARCOIRIS.VIOLETA,
};

