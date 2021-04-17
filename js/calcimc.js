//Buscando dados dos pacientes, calculando o IMC e fazendo validações dos dados inseridos
var pacientes = document.querySelectorAll(".paciente");

//Função Cálculo do IMC
function calcImc(peso, altura){
    var imc = 0
    imc = (peso/(altura*altura))
    return imc.toFixed(2)
}

//INICIO FOR BUSCANDO PACIENTE
for(var i = 0; i < pacientes.length; i++){

    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    var tdImc = pacientes[i].querySelector(".info-imc");
    
//Validação dos dados inseridos na tabela
    var pesoMin = 0;
    var pesoMax = 300;
    var alturaMin = 0;
    var alturaMax = 2.5;

    var validaPeso = validacaoPeso(peso);
    var validaAltura = validacaoAltura(altura);

    if(!validaPeso){
        tdImc.textContent = "Peso inválido!"
        //Alterando estilo (CSS) da linha caso os dados inseridos para peso e altura sejam inválidos
        //paciente[i].style.backgroundColor = "red"
        pacientes[i].classList.add("paciente-invalido");
    }

    if(!validaAltura){
        validacaoAltura = false
        tdImc.textContent = "Altura inválida!"
        //Alterando estilo (css) da linha caso os dados inseridos para peso e altura sejam inválidos
        pacientes[i].classList.add("paciente-invalido");
    }

    if(validacaoPeso == false && validacaoAltura == false){
        tdImc.textContent = "Peso e altura inválidos!"
    }else{
        tdImc.textContent = calcImc(peso,altura)
    }
}

function validacaoPeso(peso){
    if (peso >= pesoMin && peso <= pesoMax) {
        return true;
    }else{
        return false;
    }
}

function validacaoAltura(altura) {
    if (altura >= alturaMin && altura <= alturaMax) {
        return true;
    }else{
        return false;
    }
}