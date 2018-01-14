alert("Olá Mundo");

var paciente = document.querySelectorAll(".paciente");
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
		paciente[i].classList.add("paciente-erro");
	}

	if(altura.textContent <= 0.30 || altura.textContent >= 3){
		altura.textContent = "Altura inválida";
		alturaValida = false;
		paciente[i].classList.add("paciente-erro");
	} 

	if(alturaValida && pesoValido){
		imc.textContent  = imcC(peso,altura);
		
		// if(imc_calculo < 18.55){
		// 	status.textContent = "Abaixo do peso";
		// }else{  
		// 	if(imc_calculo >= 18.55 || imc_calculo <= 24.99){
		// 		status.textContent = "Peso normal";
		// 	}else{
		// 		if(imc_calculo >= 25 || imc_calculo <= 29.99){
		// 			status.textContent = "Acima do peso";
		// 		}else{
		// 			if(imc_calculo >= 30 || imc_calculo <= 34.99){
		// 				status.textContent = "Obesidade I";
		// 			}else{
		// 				if(imc_calculo >= 35 || imc_calculo <= 39.99){
		// 					status.textContent = "Obesidade II";
		// 				}else{
		// 					if(imc_calculo >= 40){
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
// =======================================================
for(i = 0; i < paciente.length; i++){

	paciente[i].addEventListener("click", function () {
		console.log("para de clikar em mim seu MERDA");
	});
}

function imcC(peso,altura){
	var imc = 0;
	imc = peso.textContent / (altura.textContent * altura.textContent);
	return imc.toFixed(2);
}
