//*******************************Decimal******************************************************// 
//esta funcão decimal n é correta so estou a testar isto é copy paste da binaria
function calcdecimal () {
    var num = document.getElementById("leitord").value;
    let binary = (num % 2).toString();
    for (; num > 1; ){
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    document.getElementById("binario").innerHTML = "Resultado: " + binary;
}

//*******************************Binário******************************************************// 
function calcbinario () {
    var num = document.getElementById("leitorb").value;
    let binary = (num % 2).toString();
    for (; num > 1; ){
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    document.getElementById("binario").innerHTML = "Resultado: " + binary;
}