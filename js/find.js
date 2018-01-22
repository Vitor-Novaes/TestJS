var btn = document.querySelector("#buttom");

btn.addEventListener("click", function(event){
    event.preventDefault();

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.send();

    xhr.addEventListener("load" , function() {
        var resposta = xhr.responseText;
        var paciente = JSON.parse(resposta); // retorna um objeto;

        if(xhr.status == 200){
            paciente.forEach(function(paciente){
                add_all_pacientes(paciente);
            });
        }else{

        }


    });


});
