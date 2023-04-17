function buscarEnlaces(){
    let enlace = document.querySelector('#enlaceColegio')
    alert(enlace.innerHTML);

    let enlaces = document.querySelectorAll('a');
    for(let enlace of enlaces){
        enlace.nextElementSibling.innerHTML= "hola hola"
    }

}
buscarEnlaces();

function crearParrafo(contenido){
    let parrafoNuevo = document.createElement('p');
    parrafoNuevo.innerHTML = contenido;

    let elBody = document.querySelector('body');
    elBody.append(parrafoNuevo);
}

crearParrafo(prompt('¿que queires escribir?'));