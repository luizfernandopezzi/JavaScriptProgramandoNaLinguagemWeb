alert("JavaSript principal.js foi carregado!")
console.log("JavaSript principal.js foi carregado!")

//Mudando o nome de Aparecida Nutrição para Luiz Pezzi Nutrição
var tituloprincipal = document.querySelector(".titulo-principal")
var title = document.querySelector(".title")

//var titulo = document.querySelector("h1");
//console.log(titulo.classList);
//resultado
//["titulo","principal","azul"]

tituloprincipal.textContent = "Luiz Pezzi - Nutrição Esportiva"
title.textContent = tituloprincipal.textContent
//

//Buscando dados dos pacientes, calculando o IMC e fazendo validações dos dados inseridos
var pacientes = document.querySelectorAll(".paciente"); //Retorna um array com todos os elementos que possuem a classe .paciente

console.log(pacientes)

for(var i = 0; i < pacientes.length; i++){

//var pacienteI = pacientes[i]
//console.log(pacienteI)

var peso = pacientes[i].querySelector(".info-peso").textContent;
var altura = pacientes[i].querySelector(".info-altura").textContent;

var imc = (peso / (altura * altura));
var tdImc = pacientes[i].querySelector(".info-imc");
tdImc.textContent = imc.toFixed(2);
//Validação dos dados inseridos na tabela
//Pesos válidos entre 0 e 300 kg
//Altura válida entre 0 e 2.5 m
var pesoMin = 0;
var pesoMax = 300;
var alturaMin = 0;
var alturaMax = 2.5;

var validacaoPeso = true;
if(peso < pesoMin || peso > pesoMax){
    validacaoPeso = false
    tdImc.textContent = "Peso inválido!"
    //Alterando estilo (css) da linha caso os dados inseridos para peso e altura sejam inválidos
    //paciente[i].style.backgroundColor = "red"
    pacientes[i].classList.add("paciente-invalido");
}

var validacaoAltura = true;
if(altura < alturaMin || altura > alturaMax){
    validacaoAltura = false
    tdImc.textContent = "Altura inválida!"
    //Alterando estilo (css) da linha caso os dados inseridos para peso e altura sejam inválidos
    pacientes[i].classList.add("paciente-invalido");
}
if(validacaoPeso == false && validacaoAltura == false){
    tdImc.textContent = "Peso e altura inválidos!"
}

}

 

