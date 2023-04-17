function pedirNombres() {
    const nombres = [];
  
    while (true) {
      const nombre = prompt('Introduce un nombre de propiedad CSS:');
      if (nombre === null) {
        break; // Salir si el usuario pulsa "cancelar"
      }
      if (!isNaN(nombre)) {
        break; // Salir si el usuario introduce un número
      }
      if (nombre.trim() === '') {
        continue; // Saltar si el usuario introduce una cadena vacía
      }
      nombres.push(nombre);
    }
    
    return nombres;
  }
  const nombresCSS = pedirNombres();
console.log(nombresCSS); // ['color', 'font-size', 'border-radius']

function sortear(arr) {
    const indice = Math.floor(Math.random() * arr.length);
    const elemento = arr[indice];
    alert(`El elemento sorteado es: ${elemento}`);
    return elemento;
  }
  const nombres = ['Ana', 'Carlos', 'Juan', 'María', 'Pedro'];
sortear(nombres);

function camelize(str) {
    return str.replace(/-([a-z])/, function(match, letra) {
      return letra.toUpperCase();
    });
  }
  const nombreCss = 'border-left-radius';
const nombreCamelCase = camelize(nombreCss);
console.log(nombreCamelCase);
alert(nombreCamelCase) // 'borderLeftRadius'

function principal() {
    const nombres = pedirNombres();
    const nombresCamelCase = nombres.map(nombre => camelize(nombre));
    sortear(nombresCamelCase);
  }
  
  window.onload = principal;

  