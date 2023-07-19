/* Ordenar un array de menor a mayor:
-Recibe el array como parametro y almacena su length en una variable "n"
-Un bucle for recorre los elementos desde el primero hasta el anteultimo
-El siguiente bucle for, anidado, recorre los elementos desde el siguiente al primero hasta el ultimo, 
    es decir, siempre uno por delante del primer bucle.
-El if compara que el primer elemento sea mayor que el siguiente, si se cumple, el primer elemento
    se intercambia de lugar con el proximo. Así hasta que quede todo ordenado de menor a mayor.
*/

function ordenarArray(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }

    }
    return array
}

var miArray = [6, 4, 3, 2, 8, 2]
var arrayOrdenado = ordenarArray(miArray);
// console.log(arrayOrdenado)

/* Chequear si una palabra es un palíndromo:
-Se le pasa a la función una palabra como argumento
-Se inician dos variables, una para recorrer la palabra desde el comienzo y otra a la inversa
-El ciclo while va a funcionar siempre y cuando inicio sea menor que fin, es decir,
siempre y cuando el caracter de la palabra no sea el mismo
-El if va a comparar si el primer y ultimo caracter son iguales, si no lo son, se descarta que sea palindromo
-Si son iguales, se incrementa inicio y decrementa fin, y se vuelve a ejecutar el if para comprobar que sean el mismo caracter.
-Devuelve true si resulta que la palabra es un palindromo
*/

function esPalindromo(frase) {
    let fraseLimpia = frase.toLowerCase().replace(/[^a-z0-9]/g, "");
    let inicio = 0;
    let fin = fraseLimpia.length - 1;

    while (inicio < fin) {
        if (fraseLimpia[inicio] !== fraseLimpia[fin]) {
            return "No es palindromo";
        }
        inicio++;
        fin--;
    }
    return "Es palindromo";
}

let frase = "Acaso hubo buhos aca"
// console.log(esPalindromo(frase));

/* Calcular el factorial de un número:
-El factorial de un número es el producto de todos los números enteros positivos desde 1 hasta ese número.
(Ejemplo: 3! = 1x2x3 = 6)
-La función toma un número como argumento
-Inicializamos una variable "factorial" en 1
-Un bucle for multiplica el número actual por el resultado del factorial en cada iteración,
que se ejecutara siempre y cuando i sea menor que el número pasado como parametro
-Devolvemos el factorial
*/

function calcularFactorial(numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

let numero = 3;
let resultado = calcularFactorial(numero);
// console.log(resultado);

/* Encontrar el número mayor
-Recibe un array como parametro e inicializamos una variable "mayor" con el primer valor de dicho array.
-Un bucle for recorre el array y dentro un if reemplaza el valor de let mayor si el siguiente elemento del array es mayor.
-Devuelve let mayor.
 */

function encontrarNumeroMayor(array) {
    let mayor = array[0];
    let n = array.length;

    for (let i = 0; i < n; i++) {
        if (array[i] > mayor) {
            mayor = array[i]
        }
    }
    return mayor
}

var miArray = [1, 2, 10, 5, 5];
var numeroMayor = encontrarNumeroMayor(miArray);
// console.log(numeroMayor);

/* Verificar que un número sea entero
-Recibe un numero como parametro
-Un if comprueba de que el parametro sea en efecto un numero y un entero
-Si devuelve false, arroja un error
 */

function verificarNumero(numero) {
    if (!Number.isInteger(numero)) {
        throw new Error("El argumento debe ser un numero entero")
    }
}

// console.log(verificarNumero("5"));

/* Multiplicar los elementos de un arreglo por 5
 */

function multiplicarPorCinco(array) {
    let arrayMultiplicado = [];
    array.forEach(elemento => {
        arrayMultiplicado.push(elemento * 5)
    });
    return arrayMultiplicado
}

// console.log(multiplicarPorCinco([2,3,"a",2,2]));

/* Calcular el promedio de un rango especifico en un array
 */

function calcularPromedioRango(array, inicio, fin) {
    if (inicio < 0 || fin >= array.length || inicio > fin) {
        throw new Error("El rango especificado no es valido");
    }

    let sumatoria = 0;
    let contador = 0;

    for (let i = inicio; i <= fin; i++) {
        sumatoria += array[i];
        contador++
    }

    let promedio = sumatoria / contador;
    return promedio;
}

// console.log(calcularPromedioRango([2,5,150,2,2,2], 0, 5));

/* Validar datos del formulario
 */

function validarFormulario(email, password, description) {
    //Validar mail
    if (email.indexOf("@") === -1 || email.indexOf(".com") === -1) {
        return "El email debe contener '@' y '.com'";
    }
    //Validar password
    if (password.length < 8 || password.length > 16 || !/[A-Z]/.test(password)) {
        return 'La contraseña debe tener entre 8 y 16 caracteres y contener al menos una mayúscula.';
    }
    //Validar descripcion
    if (description.length > 400 || description.indexOf('-') !== -1) {
        return 'La descripción no puede contener guiones (-) y debe tener hasta 400 caracteres.';
    }

    // Todos los datos son válidos
    return 'Los datos del formulario son válidos.';
}

// Ejemplo de uso:
let email = 'ejemplo@correo.com';
let password = 'Contraseña123';
let description = 'Esta es una descripción sin guiones.';
let formulario = validarFormulario(email, password, description);
// console.log(formulario);
