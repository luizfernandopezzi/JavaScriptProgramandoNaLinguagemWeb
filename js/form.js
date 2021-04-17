var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("#formulario");
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0){
    exibeMensagensDeErro(erros);
    return;
    }

    adicionaPacienteNaTabela(paciente);
    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc:calcImc(form.peso.value, form.altura.value) 
    }
    return paciente;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
        td.classList.add(classe);
        td.textContent = dado;
        return td;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");
        pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
        pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    return pacienteTr;
}

function validaPaciente(paciente) {
    var erros = [];
   
    if (!validacaoPeso(paciente.peso)){
        erros.push("Peso é inválido!");
    }
    if (!validacaoAltura(paciente.altura)){
        erros.push("Altura é inválida!");
    }
    if (paciente.nome.length == 0){
        erros.push("O campo nome não pode estar em branco");
    }
    if (paciente.gordura.length == 0){
        erros.push("O campo % de Gordura não pode estar em branco");
    }
    if (paciente.peso.length == 0){
        erros.push("O campo peso não pode estar em branco");
    }
    if (paciente.altura.length == 0){
        erros.push("Campo altura não pode estar em branco");
    }
    return erros;
}
