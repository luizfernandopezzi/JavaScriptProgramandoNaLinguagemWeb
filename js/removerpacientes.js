var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function(event) {
    console.log(event.target);
    // var alvoEvento = event.target;
    // var paiDoEvento = alvoEvento.parentNode;
    // paiDoAlvo.remove();
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);    
});

// pacientes.forEach(function(removeline) {
//     removeline.addEventListener("dblclick", function() {
//         this.remove(); //this. é o dono do evento, neste caso, o paciente dono do evento
//     });
// });