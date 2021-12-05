//*******************************Decimal******************************************************// 


//*******************************Binário******************************************************// 
function calcbinario () {
    var num = parseInt(document.getElementById("leitorb").value);
    document.getElementById("binarioR").innerHTML = "Resultado: " + num.toString(2); 
}

//*******************************Octal******************************************************// 
function calcoctal () {
    var num = parseInt(document.getElementById("leitoro").value);
    document.getElementById("octalR").innerHTML = "Resultado: " + num.toString(8); 
}

//*******************************Hexadecimal******************************************************// 
function calchexa () {
    var num = parseInt(document.getElementById("leitorh").value);
    document.getElementById("hexaR").innerHTML = "Resultado: " + num.toString(16); 
}