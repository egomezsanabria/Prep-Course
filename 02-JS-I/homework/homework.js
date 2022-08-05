// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Edwin';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 17;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  var devolverString = str;
  return devolverString;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var resultadoSuma = x + y;
  return resultadoSuma;
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var resultadoResta = x - y;
  return resultadoResta;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var resultadoMultiplica = x * y;
  return resultadoMultiplica;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var resultadoDivide = x / y;
  return resultadoDivide;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x == y) {
    devolucion = true;
  } else {
    devolucion = false;
  }
  return devolucion;
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  
  if (str1 == str2) {
    rta = true;
  } else {
    rta = false;
  }

  return rta;

}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:

  if ( num < 90 ) {
    rta = true;
  } else {
    rta = false;
  }
  
  return rta;
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( num > 50 ) {
    rta = true;
  } else {
    rta = false;
  }
  
  return rta;
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var rta1 = ( x % y )

  return rta1;
  
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  
  if ( (num % 2) === 0 ){
    rta = true;
  } else {
    rta = false;
  }

  return rta;
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( (num % 2) === 1 ){
    rta = true;
  } else {
    rta = false;
  }

  return rta;
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var rta1 = num ** 2;
  return rta1;
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var rta1 = num ** 3;
  return rta1;
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var rta1 = num ** exponent;
  return rta1;
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var rta = Math.round(num);
  return rta;
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var rta = Math.ceil(num,);
  return rta;
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random();
  
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false

  if ( Math.sign(numero) == 1 ) {
    var1 = 'Es positivo';
  } else if ( Math.sign(numero) == -1 ) {
    var1 = 'Es negativo'; 
  } else {
    var1 = false;
  }

  return var1;
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:

  var str1 = str + '!';
  return str1;
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  
  var str = nombre + ' ' + apellido;
  return str;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  
  var str = 'Hola ' + nombre + '!';
  return str;
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var rta = alto*ancho;
  return rta;
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  
  var rta = lado+lado+lado+lado;
  return rta;
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

  var rta = ( base * altura ) / 2;
  return rta;

}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
  var e = 1.20;
  var rta = e * euro;
  return rta;
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
  // switch ( letra ) {
  //   case 'a' :
  //     var rta = 'Es vocal'
  //     break;
  //   case 'e' :
  //     var rta = 'Es vocal'
  //     break;
  //   case 'i' :
  //     var rta = 'Es vocal'
  //     break;
  //   case 'o' :
  //     var rta = 'Es vocal'
  //     break;
  //   case 'u' :
  //     var rta = 'Es vocal'
  //     break;
  //   case 'la' :
  //     var rta = "Dato incorrecto"
  //     break;
  //   case 'l' :
  //     var rta = "Dato incorrecto"
  //     break;
  // }

  // return rta;

  if (letra == 'a') {
    rta = 'Es vocal'
  } else if ( letra == 'e' ) {
    rta = 'Es vocal'
  } else if ( letra == 'i' ) {
    rta = 'Es vocal'
  } else if ( letra == 'o' ) {
    rta = 'Es vocal'
  } else if ( letra == 'u' ) {
    rta = 'Es vocal'
  } else if ( letra == 'la' ) {
    rta = "Dato incorrecto"
  } else if ( letra == 'l' ) {
    rta = "Dato incorrecto"
  }

  return rta;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
