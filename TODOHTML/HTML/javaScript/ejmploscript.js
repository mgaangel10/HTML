let mes= 'mi primo me dijo:"vete al bar"';
alert(mes)
let dias = ["lunes","martes",3,"jueves","viernes","sabado","domingo"];
let diasseleccionado = dias[4];
let  mensaje;
let pwd= 112;
let pwd1=12;
if(pwd==pwd1){
    mensaje= "contraseña correcta";
    alert(mensaje)
}else{
    mensaje= "contraseña incorrecta";
    alert(mensaje)
}


let palabras = ['Esta', "clase", "es","guay"];
let salir = false;
do{
    let palabras = prompt("diga una palabra");
    if (palabra!=='0') {
        let palabrafuera = palabras.pop();
        palabras.push(palabras);
        alert(palabras.join(' '));
    } else {
        salir = true;
    }
}while(!salir);
