var btn = document.querySelector("#buttom");
btn.addEventListener("click", function (event) {
	event.preventDefault();

	// pegou os dados no form :
		var form = document.querySelector("#form_paciente");
		var paciente = date_form(form); // retorna um objeto;


		if(validatePaciente(paciente)){
			add_all_pacientes(paciente);
			form.reset();
		}else{
			var erro = document.querySelector("#erro-form");
			erro.textContent = "peso ou altura invalida"
			erro.classList.add(".erro");

			setTimeout(function(){
				erro.innerHTML = "";
			},10000);
		}
});

function add_all_pacientes(paciente) {

	// criou a partir dos dados informados :
		var pacienteNew = create_tr(paciente);

		var tabela = document.querySelector("#tabela-pacientes");
		tabela.appendChild(pacienteNew);

}

function date_form(form){
	var paciente = {
		nome : form.nome.value,
		peso : form.peso.value,
		altura : form.altura.value,
		gordura : form.gordura.value,
		imc : imcC(peso,altura)
	}
	return paciente;
}

function create_tr(paciente){
	var pacienteNew = document.createElement("tr");

		pacienteNew.appendChild(create_td(paciente.nome , "info-nome"));
		pacienteNew.appendChild(create_td(paciente.peso, "info-peso"));
		pacienteNew.appendChild(create_td(paciente.altura, "info-altura"));
		pacienteNew.appendChild(create_td(paciente.gordura, "info-gordura"));
		pacienteNew.appendChild(create_td(paciente.imc, "info-imc"));

	return pacienteNew;
}

function create_td(valor, classe){

	var td = document.createElement("td");
	td.textContent = valor;
	td.classList.add(classe);

	return td;
}

function validatePaciente(paciente){
	if(validatePeso(paciente.peso) && validateAltura(paciente.altura)){
		return true;
	}else{
		return false;
	}

}
