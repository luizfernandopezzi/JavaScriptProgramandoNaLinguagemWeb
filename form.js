//Evento CLICK
    var botaoAdicionar = document.querySelector("#adicionar-paciente")

        //Início evento click BOTãO ADICIONAR PACIENTE
        botaoAdicionar.addEventListener("click", function(event){;
            event.preventDefault();
            var form = document.querySelector("#formulario")
            var novoPaciente = obterDadosFormulario(form);
            var novoPacienteTr = montaTr(novoPaciente)
            var tabela = document.querySelector("#tabela-pacientes")
            tabela.appendChild(novoPacienteTr);
            
            form.reset();
        });

        function obterDadosFormulario(form){
            var dadosPaciente = {
                nome: form.nome.value,
                peso: form.peso.value,
                altura: form.altura.value,
                gordura: form.gordura.value,
                imc: calcImc(form.peso.value, form.altura.value)
            }
            return dadosPaciente;
        }

        function montaTd(dado, classe){
            var td = document.createElement("td")
            td.classList.add(classe)
            td.textContent = dado
            return td
        }

        function montaTr(novoPaciente){
            var novoPacienteTr =  document.createElement("tr")
            novoPacienteTr.appendChild(montaTd(novoPaciente.nome,"info-nome"))
            novoPacienteTr.appendChild(montaTd(novoPaciente.peso,"info-peso"))
            novoPacienteTr.appendChild(montaTd(novoPaciente.altura,"info-altura"))
            novoPacienteTr.appendChild(montaTd(novoPaciente.gordura,"info-gordura"))
            novoPacienteTr.appendChild(montaTd(novoPaciente.imc,"info-imc"))
            return novoPacienteTr
        }

   