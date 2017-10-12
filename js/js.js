var num1 = 0, nam2 = 0, opr = "",
divNumbers = document.querySelectorAll(".container .box-num"),
divOpers = document.querySelectorAll(".container .box-opr"),
showCalcBox = document.getElementById("sc"),
resetCalcBox = document.getElementById("reset"),
clearCalcBox = document.getElementById("clear");

clearBox.onclick = function() {
	showCalcBox.innerHTML = showCalcBox.innerHTML.substring(0, showCalcBox.innerHTML, length -1);
}

function calc(op,n1,n2) {
	var result = 0;
	switch(op) {
		case "+":
			result = n1+n2;
			break;
		case "-":
			result = n1-n2;
			break;
		case "x":
			result = n1*n2;
			break;
		case "/":
		if(n2 > 0)
			result = n1/n2;
			break;			
	}
	return result;
}