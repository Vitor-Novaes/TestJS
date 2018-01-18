var filter = document.querySelector("#filter");

filter.addEventListener('input', function(){
	var pacientes = document.querySelectorAll(".paciente");

	
	if(this.length > 0){
		pacientes.forEach(function(paciente){
			var tdNome = paciente.querySelector(".info-nome");
			var nome = tdNome.textContent;
			var exp = new RegExp(this.value, "i")
			if(!exp.test(nome)){
				paciente.classList.add("filtro-style");
			}else{
				paciente.classList.remove("filtro-style");
			}
		});
	}
});