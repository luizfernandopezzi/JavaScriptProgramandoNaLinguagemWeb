alert("JavaSript principal.js foi carregado!")
console.log("JavaSript principal.js foi carregado!")

//Mudando o nome de Aparecida Nutrição para Luiz Pezzi Nutrição
var tituloprincipal = document.querySelector(".titulo-principal")
var title = document.querySelector(".title")

tituloprincipal.textContent = "Luiz Pezzi - Nutrição Esportiva"
title.textContent = tituloprincipal.textContent

console.log(tituloprincipal.textContent)
console.log(title.textContent)