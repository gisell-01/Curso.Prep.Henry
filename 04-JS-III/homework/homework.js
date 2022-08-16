// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}
devolverPrimerElemento(1,2,8,6);

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}
devolverUltimoElemento(8,9,3,6);

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}
obtenerLargoDelArray(8,9,8,1,2,33,"hola");


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(var i = 0;i<array.length;i++){
    array[i] = ++array[i];
  }
  return array;
}
incrementarPorUno([8,9,9,5,2]);


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}
agregarItemAlFinalDelArray([7,8,9,6],8);

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var i;
  for(i = 0;i<palabras.length;i++){
     //array[i] = array[i] +" "+ array[i];
      return palabras.join(" ");
  }

}
dePalabrasAFrase(["Hola","world"]);

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if(array.includes(elemento)){
    return true;
  }else{
    return false;
  }
}
arrayContiene([8,9,5,4], 2);


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma=0;
  for (var i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}
agregarNumeros([8, 7, 5, 1, 2, 2]);


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma=0, promedioTest=0;
  for (var i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i];
    promedioTest = suma/ resultadosTest.length;
  }
 // return suma;
  return Math.trunc(promedioTest);
}
promedioResultadosTest([8, 7, 5, 1, 2, 2]);


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor = Math.max.apply(null, numeros);
  return mayor;
}
numeroMasGrande([8,33,9,88]);

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  
  var array = [];
  var mult = 1;

 // Llenando arreglo.
  for(var i =0; i < arguments.length; i++){
    array[i] = arguments[i];
  }
 // Argumentos mayor que 1
  if(arguments.length > 1){
        for (var i = 0; i < arguments.length; i++) {
        mult *= array[i];
    }
     return mult;
   }
 
     // Argumentos es 0 o esta vacio
   if(arguments.length == 0){
     return 0;
   }
    // Argumentos es 1
   if(arguments.length == 1){
         var num= array[0];
         return num;
   }

}
multiplicarArgumentos(10,5);


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var mayores = arreglo.filter(arreglo => arreglo > 18);
  return mayores.length;
}
cuentoElementos([4,1,2,8,19,30,22]);


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var diaSemana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
  
  switch(numeroDeDia){
    case 1:
    case 7:
      return "Es fin de semana";
      break;
      
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return "Es dia Laboral";
      break;
      
    default: return "ERROR";
  }
  
} 
diaDeLaSemana(2);

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var valorString= n.toString();  
  if(valorString.charAt(0) == 9){
    return true;
  }else{
    return false;
  }
  
}
empiezaConNueve(98);


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (var i = 0; i < arreglo.length; i++) {
    //elemen = arreglo[0];
    //console.log(iguales);
    if( arreglo[ i + 1] === arreglo[i]){
      return true;
  }else{
    return false;
  }
  }
  
} 
todosIguales([8,9,10,8]);

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var newArray = [];
  var buscar = false;
  for(var i = 0; i< array.length;i++){
    if(array[i].includes("Enero")|| array[i].includes("Noviembre")|| array[i].includes("Marzo")){
      newArray.push(array[i]);
      if(newArray.length === 3){ 
        buscar = true;
    }
    }
  }
    if(buscar== true){
     return newArray;
    }else{ 
      return "No se encontraron los meses pedidos";
    }
}
mesesDelAño(["Febrero","Noviembre","Junio","Agosto","Julio","Marzo","Junio","Enero","Octubre","Mayo","Septiembre","Abril","Diciembre"]);


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var newArray =[];
  var encontrados;
    for(var i = 0; i<array.length;i++){
      if(encontrados = array.filter(array => array > 100 && array<= 200)){
        newArray = encontrados;
        return newArray;
      }else{
        return "Error";
      }
    }
}
mayorACien([7,100,200,150,500]);

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var nActual=0;
  var array =[];
  for(var i = 0;i<10;i++){
    nActual = numero+=2;
    array[i] = nActual;
    if(array.includes(i+1)){
      console.log(array);
      return "Se interrumpió la ejecución";
      break;
    }
  }
  
 return array;
}
breakStatement(-4);


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nActual=0;
  var array =[];
  for(var i = 0;i<9;i++){
    nActual = numero+=2;
    array[i] = nActual;
    if(i !== 4)
      continue;
}
return array;
}
continueStatement(50);

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
