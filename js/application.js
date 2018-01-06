alert("Olá Mundo");

var paciente = document.querySelector("#pac-1");
console.log(paciente.textContent);

var peso = paciente.querySelector(".info-peso");

var altura = paciente.querySelector(".info-altura");

var imc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;

if(peso.textContent <= 1 || peso.textContent >= 500){
	peso.textContent = "Peso inválido";
	pesoValido = false;
}

if(altura.textContent <= 0.10 || altura.textContent >= 3.00){
	altura.textContent = "Altura inválida";
	alturaValida = false;
} 

if(alturaValida && pesoValido){
	var imcC = (peso.textContent / (altura.textContent * altura.textContent));	
	imc.textContent = imcC; 
}else{
	imc.textContent = "Impossível Calcular";
}

