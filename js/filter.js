var filter = document.querySelector("#filter");

filter.addEventListener('input', function(){
	var pacientes = document.querySelectorAll(".paciente");

	
	if(this.length > 0){
		pacientes.forEach(function(paciente){
			var tdNome = paciente.querySelector(".info-nome");
			var nome = tdNome.textContent;

			if(this.value != nome){
				paciente.classList.add("filtro-style");
			}else{
				paciente.classList.remove("filtro-style");
			}
		});
	}
});