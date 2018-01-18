var tabela = document.querySelectorAll("#tabela-pacientes");

tabela.forEach(function(tabela){
	
	tabela.addEventListener("dblclick", function(event) {
		event.target.parentNode.classList.add(".fadeout");
		
		setTimeout(function(){
			event.target.parentNode.remove();
		},500);
	
	});

});