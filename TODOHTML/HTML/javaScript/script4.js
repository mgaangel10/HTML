var palabras= [true,5,false,"hola","adios",2];

var elementoMayor = [];

for (let index = 0; index < palabras.length; index++) {
    if (palabras[index].length > elementoMayor.length) {
        elementoMayor = palabras[index];
    }
    
}

alert("El elemento con mas caracteres es: "+elementoMayor);

if (palabras[0]!=palabras[2]) {
    alert("el resultado es true")
}
if (palabras[0]==palabras[2]) {
    alert("el resultado es false")
}

//ejercicio6
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let numDNi = prompt("indique su dni")
let letraDNI = prompt("indique su letra").toUpperCase();
if (numDNi>0 && numDNi<99999999) {
    let letraCalculada = letras[numDNi%23];
    if (letraDNI===letraCalculada) {
        //el triple igual srve paar comparar el tipo de valor y de dato
        alert("la letra es correcta");
    }else{
        alert("la letra no es correcta");
    }
}else{
    alert("por favorindique un dni valido");
}
//ejercicio 7
let num = prompt("inidque un numero");
if (isFinite(num)) {
    let result = num;
for(let i=num-1;i>0;i--){
    result*=i;
}
alert("el numero factorial de "+num+" es "+result);
}else{
    alert("no seas listo y escribe un numero");
}
//ejercicio 8


function esPAr(num1) {
    return num%2===0?"el numero es par ": "es impar"
}
let num1 = prompt("diga un numero");

alert(esPAr(num1));