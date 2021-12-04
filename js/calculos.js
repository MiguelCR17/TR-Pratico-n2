function calcbinario () {
    var num = document.getElementById("leitorb").value;
    let binary = (num % 2).toString();
    for (; num > 1; ){
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    document.getElementById("binario").innerHTML = "Resultado: " + binary;
}