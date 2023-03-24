
const email = document.getElementById("form6Example5")
const emailC = document.getElementById("form6Example5C")
const boton = document.getElementById("btn-submit")
function validarEmail(){
	if (email.value != emailC.value) {
		emailC.classList.add("error")
	}else{
		emailC.classList.remove("error")
	}

}

emailC.onkeyup = function(){
	validarEmail()
}

boton.onclick = function(){
	validarEmail()
}