//exemplo1

let diaDaSemana = "Quinta-feira"

if(diaDaSemana == "Quarta-feira"){
    console.log("Dia de feijoada")
}


console.log("------------------------")
console.log("--------Revisão-----------")
console.log("-------------------------")
console.log("-----Condicionais----")

const idade1 = 14
const idade2 = 30

//SE(if) idade = 18 posso dirigir SE NÃO (else) vou pegar carona

if( idade1 >= 18){
    console.log("Posso dirigir!")
} else {
    console.log("Vou pegar uma carona!")
}

if( idade2 <= 17){
    console.log("Vou pegar carona!")
} else {
    console.log("Posso dirigir")
}
console.log("-------------------------")

let vacina =  true

if(vacina){
    // se for true
    console.log("Uhhu, tomei vacina!")
}else {
    //se for false
    console.log("Poxa, quero chegue minha vez")
}


let  aluna = "Vanessa"

console.log(`Seja bem vinda ${aluna}`)
console.log("-------------------------")
//criar um programa que verifica qual a comida preferida
// se for batata frita exibir Aceita refri?
// se for bolo exibir Aceita um chá?
// se for sushi exibir Vai um molho soyo?


const comidaFavorita = prompt("Qual sua comida preferita?", "batata frita, bolo, suhi ou o que gosta")

if(comidaFavorita === "batata frita"){  //isso é verdade?
    console.log("Aceita um Refri?") 
}else if (comidaFavorita === "bolo"){  //então isso é verdade?
    console.log("Aceita um cha?")
}else if(comidaFavorita === "sushi"){ //então isso é verdade?
    console.log("Vai um molho soyo?")
}else { //se nenhuma condição for verdade então caia aqui.
    console.log("Ok, boa tarde")
}

console.log("-------------------------")
//criar um programa que indica atividade a depender do tempo
// se for sol -> vá a praia
// se for chuva -> fica em casa e assisti tv
//se for nublado -> vamos no parque
// se não for nada -> Não encontrei atividade para o dia.



const tempoDoDia = prompt("Qual o tempo faz?", "sol, chuva, nublado, nenhuma das opções")

if( tempoDoDia === "sol"){
    console.log("Vá a praia e Não esqueça de passar protetor!")
}else if(tempoDoDia === "chuva"){
    console.log("Se sair, leve o guarda chuva!")
}else if(tempoDoDia === "nublado"){
    console.log("Se sair não esqueça o agasalho!")
}else {
    console.log("Não encontrei atividade para o dia")
}

console.log("-------------------------")
console.log("-----Laços de repetição----")


let contador = -6 

while(contador < 10){
   contador = contador + 1 // contador++
   console.log(contador)
}

var senha = 123456;
var i = 1
    var digitarSenha = Number(prompt("Digite sua Senha"));
        if(digitarSenha == senha){
            alert("Parabéns, você esta online")
        }else{
         while(i < 3 && digitarSenha != senha){   
             i++
           var digitarSenha = Number(prompt("Digite sua Senha"));
        
        }
        alert("Sua senha foi bloqueada")
    }









