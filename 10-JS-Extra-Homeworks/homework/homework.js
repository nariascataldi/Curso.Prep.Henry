// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  // return (Object.entries(objeto));       //una forma

  var newArray = [];
  let key = Object.keys(objeto);
  let value = Object.values(objeto);
    for (let i = 0; i < key.length; i++){
      for (let j = 0; j < value.length; j++){
        newArray.push([key[i], value[j]])
        i++;
      }
    }
    return newArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var o = {};
  for (let i = 0; i < string.length; i++){
    if(o.hasOwnProperty(string[i])){
      o[string[i]] = o[string[i]] + 1;
    }else{
      o[string[i]] = 1
    }
  }return o;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var arrayLetra = s.split(''); // s = 'hola' => s.split('') = ['h', 'o', 'l', 'a']
  let mayus = [];
  let minus = [];
  for (let i = 0; i < arrayLetra.length; i++){
    if (arrayLetra[i] === arrayLetra[i].toUpperCase()) {
      mayus.push(arrayLetra[i]);
    } else {
      minus.push(arrayLetra[i]);
    }
  }return mayus.join('') + minus.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  // .split para crear un array ej ['the', 'Henry', etc] Luego hago reverse y retorno con join
  var arrayEspacio = str.split(' ');
  let espejo = [];
  for (let i = 0; i < arrayEspacio.length; i++){
    espejo.push(arrayEspacio[i].split('').reverse().join(''));
  }return espejo.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num = numero.toString();    // 540 --> "540"
  var numInvert = num.split('').reverse().join('');   // "045"
  if(num === numInvert) {
    return "Es capicua";
  }else { 
    return "No es capicua";
  }

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var sinABC = '';
  for(let i = 0; i < cadena.length; i++){
    if(cadena[i] === 'a' || cadena[i] === 'b' || cadena[i] === 'c'){
      continue;
    }else{
      sinABC += cadena[i];
    }
  } return sinABC;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var cambio = true;
  while(cambio){
    cambio = false;
    for(let i = 0; i < arr.length-1; i++){
      if(arr[i].length > arr[i+1].length){
        let aux = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = aux;
        cambio = true;
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var elementos = [];
  for (i = 0; i < arreglo1.length; i++){
    for (j = 0; j < arreglo2.length; j++){
      if (arreglo1[i] === arreglo2[j]){
        elementos.push(arreglo1[i]);
      }
    }
  }
return elementos;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

