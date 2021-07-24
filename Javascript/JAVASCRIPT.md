# Javascript

1. [O que é JavaScript?](#o-que-é-javaScript?)

2. [Console](#console)

3. [Variáveis](#variáveis)

4. [Tipos de Dados](#tipos-de-dados)

5. [String](#string)

6. [Number](#number)

7. [Boolean](#boolean)

8. [Null x Undefined](#null-x-undefined)

9. [Typeof](#typeof)

10. [Operadores](#operadores)

11. [Condicionais](#condicionais)

12. [Array](#array)

13. [Função](#função)


---

## O que é JavaScript?

Segundo o livro "Estrutura de dados e algoritmos com javascript", de Loiane Groner: `"Javascript é uma das linguagens de programação mais populares atualmente`, é conhecida como a linguagem da internet porque os navegadores a entendem de modo nativo, sem a instalação de qualquer plugin."

Praticamente todos os sites e aplicações web usam javascript, até outras ferramentas que são usadas para web, no fim das contas vão precisar transformar o código em javascript para que o navegador entenda. 
 
Além disso, a linguagem javascript evoluiu muito e aparecem até em aplicativos mobile(com React Native), Softwares de interface gráfica para Desktop(electron) e até games, robótica e inteligência artificial. Além disso, tem o backend também utilizando o nodejs.

E tem uma lista imensa de empresas que usam Javascript ou alguma ferramenta que derivou dela, então o próprio netflix, uber, instagram, facebook, twitter entre outras. Usam o react que é uma outra ferramenta baseada em javascript.

Antes da gente encerrar essa parte eu quero fazer um combinado com você. Se você, é uma pessoa que já teve algum contato com o Javascript, preste bastante atenção a essas aulas, pois toda vez que você for criar soluções mais complexas, você vai precisar ter essa base de fundamentos bem sólida. 

| Pontos positivos | Pontos negativos |
| --- | --- |
| `uma ótima linguagem para um primeiro contato com a programação e, por consequência, para se estudar lógica de programação` | Pode conter brechas para a execução de ações maliciosas |
| `Sintaxe acessível` | Pode ser renderizada de maneiras diferentes pelos dispositivos compatíveis, causando problemas de desempenho. |
| `Grande comunidade ao redor do mundo fazendo a ferramenta evoluir` | Atualizações nem sempre compatíveis com todos os navegadores e sistemas existentes. |


---

## Console

É possível `executar expressões JavaScript usando o Console do navegador`.
Como abrir o console JavaScript

<br>
- Windows
( Chrome )

    1. Abra a aba do menu no canto superior direito.
    2. Passe o mouse sobre "Mais ferramentas" até que o menu em cascata se abra.
    3. Selecione "Ferramentas de desenvolvedor".

    Ou

    1. Use a tecla de atalho "Ctrl + Shift + I".

<br>
- Mac
( Chrome )

    1.  Selecione "Exibir" no menu superior.
    1. Passe o mouse sobre "Desenvolvedor".
    1. Selecione "Console JavaScript".

    Ou

    1. Use a tecla de atalho "Alt + Command + I".


---

## Variáveis:


`"Variaveis armazemam dados que podem ser denfinidos, atualizados e recuperados sempre que necessário".` 

Mas como declarar variaveis no JavaScript? 

A gente precisa usar uma palavra reservada do Javascript e um identificador. Além disso, a gente pode atribuir valores para essas variaveis.

É mais ou menos assim: 

A palavra reservada: var 
Identificador: myName
Atribuindo valor: "Tassila"

Declarando uma variavel: var myName
Atribuindo valor: myName = Tassila
Recuperando o dado que está guardado na variavel: myName


Aqui vão algumas dicas pra você ficar muito expert em declarar variaveis com Javascript

 - **O que pode?**
 Podem começar com letra, $ ou _
 É possível usar acento, símbolos e números


 - **O que não pode?**
 Não pode começar com número
 Não pode conter espaço
 Não podem ser palavras reservadas

 - **Qual o ideal?**
 Ter atenção, pois é case sensitive
 Use nomes coerentes

Além disso, é também importante saber que a linguagem Javascript evolui a cada ano. E desde 2015, tem havido uma nova versão lançada a cada ano que chamamos de ECMAScript. Então não se assuste se você esbarrar com frenquencia nesse conceito por aí. ECMA é uma organização que padroniza informações, e o JavaScript foi submetido à ECMA para que fosse padronizado daí nasceu o ECMAScript, o novo padrão da linguagem.

A mudança mais significativa na linguagem ocorreu em 2015 e é conhecida com ECMAScript 6 ou ES6, ela surgiu pra linguagem ficar mais flexivel no uso com o paradigma orientado a objeto. E aqui nas variáveis surgiram as palavras reservadas let e const.

Então agora você pode declarar variaveis das seguintes formas: 
```js
let language = "Javascript"
const padrão = "ECMAcript"
```
Vem entender melhor quando usar cada uma.

- **Diferenças entre let, const e var:**

1- var são declarações de escopo global ou de escopo de funções, enquanto let e const são de escopo bloqueado.

2- var podem ser atualizadas ou reatribuídas nestes escopos

3- let podem ser atualizadas, mas const não podem ser atualizadas ou reatribuídas

4- Enquanto var e let podem ser declaradas sem inicializar, const precisa ser inicializada durante a declaração

5- var sofrem hoisting de escopo

Escopo se refere ao local em que podemos acessar a variavel no algoritmo ou em uma função. E as variaveis podem ser locais ou globais.

```js
var name // por debaixo dos panos, a declaração sofre hoisting, esse fenomeno de elevação que leva a declaração da variavel lá pra cima do escopo. 
name = "Tassila";
```
A boa prática é: sempre que possível, evite usar variaveis globais em javaScript, pois elas são prejudiciais para a qualidade do seu cógigo.

Declarando variáveis:

```js
var nome = 'Reprograma'
```

Formato ES6:

```js
const nome = 'Reprograma'

let idade = 18
idade = 19
```

MDN: [var](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/var), [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const), [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)


---
## Tipos de dados:

`JavaScript` é uma linguagem dinamicamente tipada. 

Isso significa dizer que não é preciso especificar o tipo do dado quando formos declarar uma variavél. Além disso os tipos de dados são convertidos automaticamente conforme a necessidade de execução do nosso script. Mais pra frente você vai perceber isso melhor.

Aprender tipos de dados é um super poder para resolver problemas com estrutura de dados e algoritmos lá no futuro.

Vamos aprender os tipos de dados primitivos em javascript:

---

## String 

`É uma cadeia de caracteres`. A gente identifica o dado do tipo string quando caracteres formam palavras ou frases entre aspas simples ou duplas. 

Quando queremos escrever textos em javascript é preciso usar uma das três formas abaixo. Elas não possuem diferenças, só ter atenção pois você não pode em uma única string começar com uma e terminar com a outra.
```
Aspas simples ' '
Aspas duplas " "
Template literals ``
```
Podemos também unir strings concatenando ou interpolando.

Os templates literals podemos usar quando queremos interpolar uma string com uma expressão de javascript.


Qual aspas usar?
Até onde eu aprendi é uma preferência da pessoa desenvolvedora ou acordo do time. Agora, o JSON só aceita aspas duplas.

```js
'Hello'
"World"

//concatenando
console.log('Hello' + ' ' + "World")
// Vai imprimir Hello World

console.log('Hello' + "World")
//Vai imprimir sem espaço HelloWorld

let myName = "Tassila";
console.log('Hello' + " " + myName)
//Vai imprimir Hello Tassila

//interpolando
let myName = "Tassila";
console.log(`Hello ${myName}`)
//Vai imprimir Hello Tassila
````

Exemplo de string:

```js
const frase = 'Olá, mundo!'
console.log(frase)
```

Exemplo de template string:

```js
const nome = 'Reprograma'

const templateString = `Olá, ${nome}`

console.log(templateString)
```

MDN: [Template strings](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)

---

## Number

`É o tipo de dado númerico no Javascript` e podemos identificar, geralmente como números inteiros ou decimais, também conhecido como float. 

```js
1

1.5 //utilizamos ponto em caso de decimal
```

```js
let idade = 18

const altura = 1.65 
```


---
## Boolean

`É o tipo de dado lógico` e tem apenas dois valores. 
```js
true // verdadeiro
false // falso
```


```js
const turmaTeens = true //verdadeiro

```

---
## Null x undefined

Null é um objeto vazio e undefined é o valor pra uma variável não definida, por exemplo.

---

## Typeof

Determimando tipos usando o operador typeof.

O operador typeof pode te `ajudar a encontrar o tipo de sua variavel`.
```js
typeof 32 //Number
var age = 32 
console.log(age) //Number

typeof "Tassi" //string
var myName = "Tassi" 
console.log(myName) //String

let lastName
console.log(typeof lastName) //undefined

let myObject = {
    "name" : "Tassi",
    "age": 30
}

console.log(typeof myObject) //object

function subtrair(){}
console.log(typeof subtrair) //function

let alunas = []
console.log(typeof alunas) //object
```

---

## Operadores:

Precisamos de `operadores para realizar qualquer operação` em uma linguagem de programação. O javascript também tem seus operadores aritméticos, de atribuição, lógicos entre outros.

**Aritméticos:**

| Operador | Descrição |
| --- | --- |
| `+` | Adição |
| `-` | Subtração |
| `*` | Multiplicação |
| `/` | Divisão |
| `%` | Módulo ou resto da divisão |
| `++` | Incremento|
| `--` | Decremento|

<br>

**Atribuição:**

| Operador | Descrição |
| --- | --- |
| `=` | Atribuição |
| `+=` | Atribuição de soma |
| `-=` | Atribuição de subtração |
| `*=` | Atribuição de multiplicação |
| `/=` | Atribuição de divisão |
| `%=` | Atribuição de resto |
<br>

**Comparação:**

| Operador | Descrição |
| --- | --- |
| `==` | Igual a |
| `===` | Igual a (tanto o valor quanto o tipo) |
| `!=` | Diferente de  |
| `>` | Maior que |
| `>=` | Maior ou igual a |
| `<` | Menor que |
| `<=` | Menor ou igual a |
<br>

**Lógicos:**

| Operador | Descrição |
| --- | --- |
| `&&` | E |
| `||` | Ou |
| `!` | Negação |



<br>

MDN: [Operadores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators) 

---
## Condicionais:
São `instruções de controle` que podemos usar ao construir nossos códigos. Vamos estudar estudar 2 estruturas condicionais: if...else e switch.

- Podemos usar **if** se quisermos executar um bloco de código somente se a condição ou verificação lógica for verdadeira.

```js
let num = 1
if (num ===1) {
    console.log('num é igual a 1')
}
```

- Podemos usar **if...else** se quisermos executar um bloco de código somente se a condição ou verificação lógica for verdadeira. Ou outro bloco de código, somente caso a condição seja falsa.

```js
let number = 0
if (number === 1) {
    console.log('number é igual a 1')
} else {
    console.log(`number não é igual a 1, o valor de number é ${number}`)
}
```

- Além disso para diferentes condições podemos usar vários **if...else** se quisermos executar vários blocos de códigos diferentes.

```js
let mes = 'setembro'
if (mes === 'fevereiro) {
    console.log('tem carnaval')
} else if (mes === 'junho'){
    console.log('tem são joão')
} else if (mes === 'dezembro'){
    console.log('tem natal')
} else {
    console.log(`${mes} não é um mês festivo.`)
}
```

- Agora, se a condição que estivermos avaliando for a mesma que a anterior, porém com valores diferentes, podemos usar a instrução **switch**:

```js
let diaDaSemana = 'segunda'
switch (diaDaSemana) {
    case 'domingo':
        console.log('Domingou')
        break
    case 'sábado':
        console.log('Sabadou')
        break
    case 'sexta':
        console.log('Sextou')
        break
    default: 
        `${diaDaSemana} não é um dia festivo.`
}
```

Atenção para as palavras reservadas case, break e default. 

MDN: [if...else](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else), 
[switch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch)

---

## Arrays

Declaração de arrays

```js
const lista = new Array('pera', 'uva', 'maçã')

const numeros = [9, 2, 5]
```

Acessando elementos pela posição do array:

```js
const primeiroItem = lista[0]

console.log(primeiroItem) // pera
```

Tamanho de array:

```js
const tamanho = numeros.length

console.log(tamanho) // 3

```
MDN: [array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)


---

## Funções

### O que são funções?

São `ações executadas assim que são chamadas` ou em decorrência de algum evento.

Uma função pode receber parâmetros e retornar um resultado.

    No html para criar uma chamada pra ação que ocorra quando o botão de calcular era clicado. No arquivo js criamos a função abaixo:

```js
    function clicar() {
        resposta.innerHTML = input.value
    }
```
- chamada -> no evento de clique
- parâmetros -> nao recebiamos 
- ação -> Pegar o valor digitadi do input e fazer aparecer na tela no elemento resposta
- retorno -> texto na tela com sucesso

A verdade é que na vida real, todas nós temos também tarefas e rotinas que seguem alguns critérios.

Exemplo jogar o lixo. Todas as segundas, quartas e sextas, eu posso jogar lixo organico.
Todas as tercas e quintas, eu posso jogar o lixo reciclável.

- chamada -> nos dias referentes 
- parâmetros -> dia
- ação -> separar o lixo, amarrar o saco, levar até ao local destinado
- retorno -> dia informando qual lixo jogar

E trazendo isso para o mundo do javascript, podemos criar um programa que me lembra de jogar o lixo corretamente. Vamos lá?

```js  
function jogarLixo(dia) {
    if(dia === 'segunda'|| dia === 'quarta' || dia ==='sexta'){
        console.log('lixo organico') 
        } else if (dia === 'terca'|| dia === 'quinta') {
            console.log('lixo reciclavel')
        } else {
            console.log('nao pode jogar lixo')
        }  
        return dia 
}

let qualTipoJogarHoje = jogarLixo('sabado')
console.log(qualTipoJogarHoje)
```

### Por que e como utilizar?
Quando precisamos de uma instrução, uma ação que pode ser executada em diferentes momentos no nosso código.

Declaração
- Usamos a palavra reservada function
- Podemos dar um nome ou deixá-la anônima
- não esequecer de usar os parenteses, nele podemos passar parametros ou nao
- e dentro das chaves colocamos as instruções que podem ter um retorno ou não

Parâmetros
São informacões que se comportam como variaveis dentro daquela função e que podem ser usadas nas instruções

Retorno
Usando a palavra reservada return podemos, instruir nosso código a retornar algo.

Nomeando funções
- Sempre prefira usar verbos que descrevem exatamente o que a sua função irá fazer. 
- Não se preocupe se os nomes ficarem grandes, desde que sejam descritivos o suficiente.
- Use também o camelcase, quando usamos a segunda palavra com a primeira letra maiuscula.


```js
function falar() {
  return 'Pipipi popopo'
}

function dobro(num) {
  return num * 2
}

function calcularMedia(nota1, nota2, nota3) {
  const soma = (nota1 + nota2 + nota3)
  const media = soma / 3
  return media
}
```

Ou, podemos declarar as mesmas funções da seguinte forma:

```js
const falar = function() {
  return 'Pipipi popopo'
}

const dobro = function(num) {
  return num * 2
}

const calcularMedia = function(nota1, nota2, nota3) {
  const soma = (nota1 + nota2 + nota3)
  const media = soma / 3
  return media
}
```


MDN: [Function](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)

---