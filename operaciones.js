var num, acc = 0, op = "";

function inicio(){
	num = document.getElementById("num");
}

function vaciar(){
	num.value = "";
	num.focus();
}

function sumar(){
	op = "suma";
	if(acc === 0){
		acc = num.value;
		vaciar();
	}
	else{
		calcular();
	}
	
}

function restar(){
	op = "resta";
	if(acc === 0){
		acc = num.value;
		vaciar();
	}
	else{
		calcular();
	}
}

function multiplicar(){
	op = "multiplicacion";
	if(acc === 0){
		acc = num.value;
		vaciar();
	}
	else{
		calcular();
	}
}

function dividir(){
	op = "division";
	if(acc === 0){
		acc = num.value;
		vaciar();
	}
	else{
		calcular();
	}
}

function exponenciar(){
	op = "exponenciacion";
	if(acc === 0){
		acc = num.value;
		vaciar();
	}
	else{
		calcular();
	}
}

function seno(){
	acc = num.value;
	op = "seno";
	calcular();
}

function coseno(){
	acc = num.value;
	op = "coseno";
	calcular();
}

function tangente(){
	acc = num.value;
	op = "tangente";
	calcular();
}

function sumatoria(){
	acc = num.value;
	op = "sumatoria";
	calcular();
}

function raiz(){
	acc = num.value;
	op = "raiz";
	calcular();
}

function base10(){
	op = "base10";
	if(acc === 0){
		acc = num.value;
		vaciar();
	}
	else{
		calcular();
	}
}

function calcular(){
	if(op === "suma"){
		num.value = (+acc + +num.value);
	}
	else if(op === "resta"){
		num.value = (+acc - +num.value);
	}
	else if(op === "multiplicacion"){
		num.value = (+acc * +num.value);
	}
	else if(op === "division"){
		num.value = (+acc / +num.value);
	}
	else if(op === "exponenciacion"){
		num.value = Math.pow(+acc, +num.value);
	}
	else if(op === "seno"){
		num.value = Math.sin(+acc);
	}
	else if(op === "coseno"){
		num.value = Math.cos(+acc);
	}
	else if(op === "tangente"){
		num.value = Math.tan(+acc);
	}
	else if(op === "sumatoria"){
		var resultado = 0;
		for (var i = 1; i <= +acc; i++) {
			resultado += i;
		}
		num.value = resultado;
	}
	else if(op === "raiz"){
		num.value = Math.sqrt(+acc);
	}
	else if(op === "base10"){
		num.value = +acc * (Math.pow(10, +num.value));
	}
	acc = 0;
}

function limpiar(){
	vaciar();
	acc = 0;
	op = "";
}

function agregarDigito(digito){
	num.value = num.value + digito;
}

function valida(e){
	tecla = (document.all) ? e.keyCode : e.which;
	//Tecla de retroceso para borrar, siempre la permite
	if (tecla==8){
		return true;
	}
	// Patron de entrada, en este caso solo acepta numeros
	patron =/[0-9-.]/;
	tecla_final = String.fromCharCode(tecla);
	return patron.test(tecla_final);
}