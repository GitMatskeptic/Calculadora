function Result() {

var nomeAluno = document.getElementById("nome").value;

var nota1 = parseFloat(document.getElementById("nota1") .value);

var nota2 = parseFloat(document.getElementById("nota2").value);

var nota3 =parseFloat (document.getElementById("nota3").value);

var nota4 =parseFloat (document.getElementById("nota4").value);


//resultado

var resultado = document.getElementById("resultado");

var soma = (nota1 + nota2 + nota3 + nota4) / 4;

if (soma > 7) {
  resultado.innerHTML = " Congratulações " + nomeAluno + " você foi aprovado com uma média final de " + soma.toFixed(2);
  } else {
    resultado.innerHTML = " que lástima " + nomeAluno + " você reprovou com uma média final de " + soma.toFixed(2);
  }

}

// REVISÃO DE CONTEÚDO 
//Variáveis, Strings, Console.log, topFixed, Operações Matemáticas, Interpolações

//DEFINIÇÃO DE VARIÁVEL
//Variáveis em Javascript são uma forma para se salvar dados que possam ser acessados e/ou manipulados posteriormente, independente do tipo desses dados, strings, números, booleanos, arrays, objetos ou funções.

//DEFINIÇÃO DE STRINGS
//Strings são sequências de caracteres, escritas entre aspas simples ou duplas. Para facilitar o processamento de textos o JavaScript dispõe do objeto String, a partir do qual temos acesso a diversos métodos utilizados para esse fim.

//DEFINIÇÃO DE CONSOLE.LOG
//console. log é uma função que imprime um texto no console (no caso do JavaScript será possível visualizar através da ferramenta do desenvolvedor). Você utilizará esta função para te auxiliar no desenvolvimento, exibindo valores de variáveis em determinado ponto do código por exemplo (em tempo de execução).

//DEFINIÇÃO DE topFixed
//toFixed() método converte um número em uma string, mantendo um número especificado de casas decimais. Observação: se o número desejado de decimais são mais elevados do que o número real, valores nulos são adicionados para criar o comprimento desejado decimal.

//DEFINIÇÃO DE OPERAÇÕES MATEMÁTICAS
//A precedência de operadores em JavaScript é semelhante ao ensinado nas aulas de matemática na escola — Multiplicação e divisão são realizados primeiro, depois a adição e subtração (a soma é sempre realizada da esquerda para a direita).

//DEFINIÇÃO DE CONCATENAÇÃO
//Concatenar é uma palavra chique da programação que significa "colocar junto". Para colocar strings juntas em JavaScript, usamos o operador (+), o mesmo usamos para adicionar números, mas neste contexto é algo diferente.

