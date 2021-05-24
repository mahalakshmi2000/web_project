var operator;
var first_number;
var second_number;
function Calculator(num){
	//console.log(num.value);
	if(num.value == "C"){
		document.getElementById("display").value = "";
	}
	else {
		if(num.value == "+" || num.value == "-" || num.value == "*" || num.value == "/" || num.value == "%" || num.value == "+/-" ){
		first_number = +document.getElementById("display").value;
		operator = num.value;
		document.getElementById("display").value = "";
		
	}
		else if(num.value == "="){
			second_number = +document.getElementById("display").value;
			if(operator == "+"){
				
				document.getElementById("display").value = first_number + second_number;
			}
			else if(operator == "-"){
				document.getElementById("display").value = first_number - second_number;
			}
			else if(operator == "*"){
				document.getElementById("display").value = first_number * second_number;
			}
			else if(operator == "/"){
				document.getElementById("display").value = first_number / second_number;
			}
			else if(operator == "%"){
				document.getElementById("display").value = first_number % second_number;
			}
			else if(operator == "+/-"){
				document.getElementById("display").value = first_number + second_number+",";
				document.getElementById("display").value += first_number - second_number;
			}
		}
		else{
		document.getElementById("display").value  += num.value;
	}
}
}

