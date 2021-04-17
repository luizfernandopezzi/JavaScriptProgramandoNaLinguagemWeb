var botaoBuscarPacientes = document.querySelector("#buscar-pacientes")

botaoBuscarPacientes.addEventListener("click",function() {
    console.log("Buscarei os pacientes")

    //AJAX = modo de fazer requisiçoes com JavaScript de modo assíncrono, ou seja, sem travar o JavaScript local para ir buscar os dados externos.
    var xhr = new XMLHttpRequest(); //XMLHttpRequest() = objeto JavaScript responsável por fazer REQUISIÇÕES HTTP 'XML' ou outros formatos de dados.
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.send();

    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            var resposta = xhr.responseText;
            console.log(resposta); //A resposta é um JSON: texto/string importado do destino porém escritos em formato de JavaScript
            console.log("xhr.reponseText são dados do tipo:", typeof resposta);
            //JSON = JavaScript Object Notation: transporta pela web dados em string porém em formato de JS (arrys, objetos, etc)
            
            var pacientes = JSON.parse(resposta); //JSON.parser(parametro) analisa o parametro  JSON de entrada e o 
                                                   //transforma em objeto, array, string... JavaScript.  
            console.log(pacientes)
            console.log("Após JSON.parser, os dados são agora do tipo:", typeof pacientes); //Agora temos os dados em formato
                                                                                            //objeto JavaScript de Array.
            // for(i = 0; i < pacientes.length; i++){
            // var paciente =  pacientes[i];
            // adicionaPacienteNaTabela(paciente)
            // }
            //ou
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente); 
            })
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText)
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }
    });
})