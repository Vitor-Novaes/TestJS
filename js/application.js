alert("Olá Mundo");

var paciente = document.querySelectorAll("#paciente");
console.log(paciente);

for(i = 0; i < paciente.length; i++){
	
	var peso = paciente[i].querySelector(".info-peso");
	var altura = paciente[i].querySelector(".info-altura");
	var imc = paciente[i].querySelector(".info-imc");
	var status = paciente[i].querySelector(".info-status");

	var pesoValido = true;
	var alturaValida = true;

	if(peso.textContent <= 1 || peso.textContent >= 500){
		peso.textContent = "Peso inválido";
		pesoValido = false;
		paciente.classList.add("paciente-erro");
	}

	if(altura.textContent <= 0.10 || altura.textContent >= 3.00){
		altura.textContent = "Altura inválida";
		alturaValida = false;
		paciente.classList.add("paciente-erro");
	} 

	if(alturaValida && pesoValido){
		imc.textContent = (peso.textContent / (altura.textContent * altura.textContent));
		// if(imc.textContent < 18.55){
		// 	status.textContent = "Abaixo do peso";
		// }else{
		// 	if(imc.textContent >= 18.55 || imc.textContent <= 24.99){
		// 		status.textContent = "Peso normal";
		// 	}else{
		// 		if(imc.textContent >= 25 || imc.textContent <= 29.99){
		// 			status.textContent = "Acima do peso";
		// 		}else{
		// 			if(imc.textContent >= 30 || imc.textContent <= 34.99){
		// 				status.textContent = "Obesidade I";
		// 			}else{
		// 				if(imc.textContent >= 35 || imc.textContent <= 39.99){
		// 					status.textContent = "Obesidade II";
		// 				}else{
		// 					if(imc.textContent >= 40){
		// 						status.textContent = "Obesidade Mórbida";
		// 					}
		// 				}
		// 			}
		// 		}
		// 	}
		// }

	}else{
		imc.textContent = "Impossível Calcular";
	}
}


