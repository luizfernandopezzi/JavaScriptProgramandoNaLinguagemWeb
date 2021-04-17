var campoFiltro = document.querySelector("#filtrar-tabela");

// campoFiltro.addEventListener("input", function(){
// //console.log("Digitaram no campo");
// console.log(this.value)   //Análogo à: console.log(campoFiltro.value)
// var pacientes = document.querySelectorAll(".paciente");
// if (this.value.length > 0){
//     for (var i = 0; i < pacientes.length; i++){
//         var paciente = pacientes[i];
//         var tdNome = paciente.querySelector(".info-nome");
//         var nome = tdNome.textContent;
//             if (nome != this.value){
//                 paciente.classList.add("invisivel");
//             } else {
//                 paciente.classList.remove("invisivel");
//             }
//         }
// }else{
//     for (var i = 0; i < pacientes.length; i++) {
//         var paciente = pacientes[i];
//         paciente.classList.remove("invisivel");
//     }
// }
// });

campoFiltro.addEventListener("input", function(){ //Evento INPUT = evento de digitação
    var pacientes = document.querySelectorAll(".paciente");
    if (this.value.length > 0){ //this.value refere-se ao dono do evento, campoFiltro
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); //var ExpressaoRegular = new RegExp(elemento-buscado, caracteristica) 
                                                         //onde caracteristica se "i" = Case Insensitive. A variável expressao
                                                         //assume o valor da nova Regular Expression, cujo valor buscado (this.value)
                                                         //é o que está digitado em campoFiltro.
            if (!expressao.test(nome)) { //TEST se a var expressao é igual ao parametro (nome), se sim, retorna TRUE, se não, FALSE.
                paciente.classList.add("invisivel"); //Neste caso, testa se a expressao é igual ao nome, se não for (!)
            } else {                                 //entra no if e adiciona classe invisível em paciente = pacientes[i]
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});