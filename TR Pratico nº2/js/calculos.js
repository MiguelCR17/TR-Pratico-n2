//*******************************Decimal******************************************************// 
function calcdecimal () {
    var bi = document.getElementById("binario");
    var oct = document.getElementById("octal");
    var hex = document.getElementById("hexa");

    if(bi.checked == true){
    var num = document.getElementById("leitord").value;
    var Resultado = parseInt(num, 2);
    document.getElementById("decimalR").innerHTML = "Resultado: " + Resultado;
    } 
    else if(oct.checked == true){
    var num = document.getElementById("leitord").value;
    var Resultado = parseInt(num, 8);
    document.getElementById("decimalR").innerHTML = "Resultado: " + Resultado;
    } 
    else if(hex.checked == true){
    var num = document.getElementById("leitord").value;
    var Resultado = parseInt(num, 16);
    document.getElementById("decimalR").innerHTML = "Resultado: " + Resultado;
    }
    else
    document.getElementById("decimalR").innerHTML = "Deve selecionar qual a base que pertende converter para decimal.";
  }

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