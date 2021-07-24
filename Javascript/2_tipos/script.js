// tipos do JS: 

// string(texto),
// number(número),
// booleano (true -verdadeiro- ou false - falso-),
// object(objetos) - arrays(listas),
// undefined(indefinido), - valor null (nulo) 
// functions (funções)  mostrar na próxima aula! :D 

//string

// let - o tipo da variavel
// nome - é o nome
// = - é a atribuição de valor
// "maria Clara" - valor
let nome = "Maria Clara"; 
console.log(nome, typeof nome);

// number
let idade = 16; 
console.log(idade, typeof idade);

// booleano
const maravilhosa = true;
console.log(maravilhosa, typeof maravilhosa);

// undefined - indefinido
let mosquito;
console.log(mosquito, typeof mosquito);

// arrays - listas
const comprarNaFeira = ["castanha", "pastel", "manga", "amendoim", "caldo de cana"];
console.log(comprarNaFeira, typeof comprarNaFeira);

// objects 
const alunas = {
    fernanda: ["ozoi verdes", "milionária", "filha do silvio"],
    natasha: "estudiosa" ,
    isabellaTaNaAula: true,
    amandaProf: {
        talentosa: true 
    }
}
console.log(alunas, typeof alunas);

const cadastros = {
    1: {
        nome: "liana",
        email: "lyannalisse@gmail.com",
        telefone: 1232123
    },
    kristhel: {
        email: "lyannalisse@gmail.com",
        telefone: 1232123
    },
    gabriela: {
        email: "lyannalisse@gmail.com",
        telefone: 1232123
    }
}

// valor null (nulo)
const valorDoBozo = null; 
console.log(valorDoBozo); 

