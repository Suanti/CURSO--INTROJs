// EXERCISE
// segundo intento 

// EXERCISE 1
// Escribe un programa que calcule el precio final de un producto despues de aplicar un descuento
// Pide al usuario que ingrese el precio original del producto y el porcentaje de descuento y muestre el precio final
let precio= 
let descuento= 
let PrecioFinal= precio*(descuento/100)
console.log(PrecioFinal)
//nueva version 
let precio= parseFloat(prompt('ingresa el precio original'))
let descuento= parseFloat(prompt('ingresa el valor del descuento'))
let PrecioFinal= precio*(descuento/100)
console.log('precio finnal:' ,PrecioFinal)

// EJERCICIOS VARIOS

// N°1 > DECLARAR Y MOSTRAR DATOS
// Declará una variable con tu nombre y otra con tu edad. Mostrá ambos valores usando console.log().
let NombreCompleto = prompt('ingresa tu nombre completo')
let edad = prompt('ingresa tu edad')
console.log(NombreCompleto,edad)

// N°2 > SUMA DE 2 NUMEROS
let PrimerNumero= parseFloat(prompt('ingrese su primer número'))
let SegundoNumero= parseFloat(prompt('ingrese su segundo numero'))
let Sumatoria= PrimerNumero + SegundoNumero
console.log(Sumatoria)

// N°3CALCULOS SIMPLES
// Pedile al usuario dos numeros. Recorda usar parseInt() para convertir texto a numero y prompt() para pedir la info al usuario
// Realiza los calculo de suma - resta - multiplicacion y division
// Mostrar el resultado de cada calculo usando console.log()
// a. SUMMA 
let PrimerNumero = parseInt(prompt('ingrese su primer número'))
let SegundoNumero = parseInt(prompt('ingrese su segundo número'))
let sumatoria = PrimerNumero + SegundoNumero
console.log(sumatoria)
//b. RESTA
let PrimerNumero = parseInt(prompt('ingrese su primer número'))
let SegundoNumero = parseInt(prompt('ingrese su segundo número'))
let resta = PrimerNumero - SegundoNumero
console.log(resta)
// c. MULTIPLICACIÓN
let PrimerNumero = parseInt(prompt('ingrese su primer número'))
let SegundoNumero = parseInt(prompt('ingrese su segundo número'))
let multiplicacion = PrimerNumero * SegundoNumero
console.log(multiplicacion)
//d. DIVICIÓN
let PrimerNumero = parseInt(prompt('ingrese su primer número'))
let SegundoNumero = parseInt(prompt('ingrese su segundo número'))
let divicion = PrimerNumero / SegundoNumero
console.log(divicion)

//N°4 CONCATENACION UTILIZANDO OPERADOR (+)
// a. Utilizá las variables que creaste de nombre y edad y mostra en consola el mensaje "Mi nombre es: (tuvariable) y tengo (tuvariable) años"
let NombreCompleto = prompt('ingresa tu nombre completo')
let edad = prompt('ingresa tu edad')
console.log(" Mi nombre es " + NombreCompleto + "y tengo " + edad +" años")
//b. CONCATENACION UTILIZANDO TEMPLATE LITERALS (`${}`)
// Mostrar el mismo mensaje anterior pero usando las backtics
let NombreCompleto = prompt('ingresa tu nombre completo')
let edad = prompt('ingresa tu edad')
console.log(`Mi nombre es ${NombreCompleto} y tengo ${edad} años`)

//N° 5 BOOLEANOS Y CONDICIONALES
// Declarar una variable nota con un numero.
// si la nota es mayor o igual a 6
// Mostrar "Aprobado"
// Sino mostrar "Desaprobado"
let nota = parseFloat(prompt ( 'calificacion obtenida'))
if ( nota >= 6) {console.log('APROVADO');} else {console.log('DESAPROVADO')}


// CLASE 10 - EJERCICIOS 
/* ●	Ejercicio 1 - Declarar dos variables: 
Nuestra tarea será declarar dos variables: una con el nombre edad y la otra con el nombre peso. Después deberás asignarle un valor.
Pista: Recordemos que para crear una variable debemos utilizar la palabra reservada "let", seguida del nombre con el cual luego le haremos referencia.
*/
let nombre= 'nombre') 
let peso = 'peso'
console.log(nombre + peso)
/*
●	Ejercicio 2 – Usando las variables: 
Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso, y luego muestre un mensaje personalizado que incluya toda esta información.
/* Desglosando el ejercicio deberás:
1.	Pide al usuario que ingrese su nombre.
2.	Pide al usuario que ingrese su edad.
3.	Pide al usuario que ingrese su peso.
4.	Muestra un mensaje personalizado que incluya el nombre, la edad y el peso del usuario.
Pista: En el ejercicio anterior, declaramos valores en las variables. Ahora nos toca pedir datos al usuario, por lo que usaremos prompt para solicitar esta información.
*/
// SOLUCIÓN CON ""
let nombre = prompt("inngrese su nombre")
let edad =parseFloat(prompt("ingrese su edad"))
let peso =parseFloat(prompt("ingrese su peso"))
console.log("Nombre: " + nombre + ", Edad: " + edad + " años, Peso: " + peso + " kg")
// SOLUCION CON ${}
let nombre = prompt("Ingrese su nombre");
let edad = parseFloat(prompt("Ingrese su edad"));
let peso = parseFloat(prompt("Ingrese su peso"));
console.log(`Nombre: ${nombre}, Edad: ${edad} años, Peso: ${peso} kg`)
/*
●	Ejercicio 3 – Constantes / Validación de Edad: 
Más adelante vamos a querer validar que nuestros encuestados sean de 18 años de edad mínima y 99 años de edad máxima. 
Nadie puede cambiar esas definiciones, por lo tanto, vamos a escribirlas en dos constantes (asignándoles los valores numéricos 18 y 99 respectivamente). Por último, deberás pedirle al usuario que ingrese su edad para validarla usando parseInt.

Desglosando el ejercicio deberás:

1.	Crea una constante llamada EDAD_MINIMA y otra llamada EDAD_MAXIMA, a las cuales les asignamos los valores numéricos 18 y 99 respectivamente.
2.	Pide al usuario que ingrese su edad.
3.	Usa “parseInt” para convertir la entrada del usuario a un número entero.
4.	Valida si la edad ingresada está dentro del rango permitido y muestra un mensaje adecuado.

Pista: Las constantes se declaran con la palabra reservada const y es buena práctica que sus nombres sean declarados siempre con letras mayúsculas. Utiliza parseInt para convertir la entrada del usuario a un número entero.
*/
// RESPUESTA CON > if() {} else {}
const EDAD_MINIMA= 18
const EDAD_MAXIMA= 99
let EdadUsuario = parseInt(prompt( 'ingrese su edad'))
if ( EdadUsuario >= 18 && EdadUsuario <= 99 ) { console.log('Ok');} else { console.log ('edad insuficiente');}
// RESPUESTA CON > if TERNARIO  ? ' ' :  ;
const EDAD_MINIMA= 18
const EDAD_MAXIMA= 99
let EdadUsuario = parseInt(prompt( 'ingrese su edad'))
EdadUsuario >= 18 && EdadUsuario <= 99 ? console.log('Ok') : console.log ('edad insuficiente');

/*
●	Ejercicio 4 – Tipo de Datos: 
Declarar 4 variables utilizando la palabra reservada let y asignarles valores según el tipo de dato que sugiere su nombre. Además, realizar operaciones y validaciones adicionales sobre estos valores.

Pasos a seguir:
Declaración de Variables:
1.	Declara una variable llamada verdadero y asígnale un dato de tipo booleano (true o false).
2.	Declara una variable llamada texto y asígnale un string de tu elección (puedes usar cualquier mensaje que prefieras).
3.	Declara una variable llamada numero y asígnale un dato numérico (puedes usar cualquier número entero o decimal).
4.	Declara una variable llamada nada y asígnale un valor que represente la ausencia de valor en JavaScript.
*/
// DECLARACION DE VARIABLES
let verdadero = true
let texto = 'felicitaciones ! estas avanzando'
let numero = 3.1416
let nada = null

/*
Operaciones y Validaciones:

1.	Realiza una operación matemática usando la variable número, por ejemplo, suma o resta con otro número de tu elección.
2.	Concatena el “string” de la variable texto con otro mensaje adicional.
3.	Verifica si la variable “verdadero” es true o false y muestra un mensaje diferente según el resultado.
4.	Implementa una condición para verificar si la variable nada es null y muestra un mensaje si es así.
*/
console.log( numero + 5)
console.log ( texto + 'no te rindas !')
if ( verdadero ) {console.log('Es true!')} else {console.log('no es True')}
if (nada === null ) { console.log('bien hecho, es null');}
/*
●	Ejercicio 5 – Operadores:
Vimos cómo declarar una variable y asignarle un valor, y probablemente surgió la siguiente pregunta: ¿para qué sirve almacenar datos en variables? Las variables nos permiten reutilizar el dato asignado en la misma con sólo invocar su nombre.
También, algo muy importante, así como podemos hacer operaciones matemáticas como sumar (+) o restar (-) números, podemos hacer lo mismo con las variables que las referencian.

Pasos a seguir:
Declaración y Asignación de Variables:
1.	Declara y asigna un valor numérico a dos variables: primerNumero y segundoNumero.
Operaciones Matemáticas:

2.	Declara las siguientes variables: resultadoSuma, resultadoResta, resultadoMultiplicacion, resultadoDivision.
3.	Asigna a cada una de estas variables el resultado de la suma, resta, multiplicación y división de las variables primerNumero y segundoNumero.

Mostrar Resultados:

1.	Utiliza console.log(nombreDeLaVariable) para imprimir cada uno de los resultados y ver cómo se ven los mismos.
Pista 1: Recuerda que para crear una variable utilizamos la palabra "let" seguida del nombre al cual vamos a hacer referencia.
Pista 2: Para asignar el valor a una variable utilizamos el operador "=" seguido del valor que queremos asignarle.
*/
let PrimerNumero = parseInt(prompt('ingrese su primer número'))
let SegundoNumero = parseInt(prompt('ingrese su segundo número'))
let sumatoria = PrimerNumero + SegundoNumero
console.log(sumatoria)
let resta = PrimerNumero - SegundoNumero
console.log(resta)
let multiplicacion = PrimerNumero * SegundoNumero
console.log(multiplicacion)
let divicion = PrimerNumero / SegundoNumero
console.log(divicion)
/*
●	Ejercicio 6 - Comparaciones y Operadores Lógicos: 
Declara dos variables con valores numéricos. Utiliza operadores de comparación y lógicos para verificar si ambos números son mayores que 10 y muestra el resultado en la consola.

Pasos a seguir:
Declaración y Asignación de Variables:
1.	Declara dos variables y asígnales valores numéricos de tu elección.
Operadores de Comparación y Lógicos:

2.	Utiliza los operadores > (mayor que) y && (y lógico) para verificar si ambos números son mayores que 10.
Mostrar Resultado en la Consola:

3.	Utiliza console.log() para mostrar el resultado de la comparación.
Pista: Recuerda que para crear una variable utilizamos la palabra "let" seguida del nombre al cual vamos a hacer referencia.
Pista 2: Los operadores de comparación en JavaScript son >, <, >=, <=, ===, !==. El operador lógico "&&" (y lógico) se utiliza para combinar condiciones y todas deben cumplirse para que el resultado sea verdadero.

Hasta ahora te di los pasos detallados a seguir para desarrollar los ejercicios. Ahora es tu turno de desglosar los ejercicios para conseguir los pasos.
*/
let num1 = parseFloat(prompt('ingrese su primer número'))
let num2 = parseFloat(prompt('ingrese su segundo número'))
num1 > 10 && num2 > 10 ? console.log(' son mayores que 10'): console.log('sigue intentando!');
/*
●	Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores iniciales y luego intercambia sus valores. Muestra los valores antes y después del intercambio en la consola.
Para intercambiar valores puedes usar varios métodos(usando una variable temporal, aritmética o asignación simultanea), eres libre de elegir el que desees, eso si, investiga sobre el que usarás.
*/

// VARIABLE TEMPORAL
let a = 5;
let b = 10;
console.log("Antes del intercambio: a =", a, ", b =", b);
let cambio = a;
a = b;
b = cambio;
console.log("Después del intercambio: a =", a, ", b =", b);

// VARIABLE ARITMÉTICA
let a = 5;
let b = 10;
console.log("Antes del intercambio: a =", a, ", b =", b);
a = a + b; // a ahora es 15
b = a - b; // b ahora es 5 (valor original de a)
a = a - b; // a ahora es 10 (valor original de b)
console.log("Después del intercambio: a =", a, ", b =", b);

// VARIABLE ASIGNACIÓN SIMULTÁNEA (intercambio en una línea)
let a = 5;
let b = 10;
console.log("Antes del intercambio: a =", a, ", b =", b);
[a, b] = [b, a];
console.log("Después del intercambio: a =", a, ", b =", b);

/*
●	Ejercicio 8 - Conversión de Temperaturas: Escribe un programa que convierta una temperatura dada en grados Celsius a grados Fahrenheit. La fórmula de conversión es: 

Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en Fahrenheit.
	Pista 1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse así: 
let fahrenheit = celsius * 9 / 5 + 32; 
let fahrenheit = ºC * 1,8 + 32;  - es lo mismo - (9/5 = 1.8)
*/

let celsius = parseFloat(prompt(' ingrese el valor a convertir'))
let fahrenheit = (celsius*9/5)+ 32
console.log(fahrenheit)

/*

●	Ejercicio 9: Cálculo del IMC: Escribe un programa que calcule el Índice de Masa Corporal (IMC). El IMC se calcula con la fórmula: 

Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.
Pista 1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse así:

let imc = peso / (altura * altura);
*/
let altura = parseFloat(prompt('ingrese su altura'))
let peso = parseFloat(prompt('ingrese su peso en Kg'))
let IMC = peso / (altura * altura)
console.log(IMC)
/*
●	Ejercicio 10 - Cálculo de Descuento: Escribe un programa que calcule el precio final de un producto después de aplicar un descuento. Pide al usuario que ingrese el precio original y el porcentaje de descuento, y muestra el precio final.
Pista 1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse así:

let montoDescuento = precioOriginal * (porcentajeDescuento / 100)
 */
let precio= parseFloat(prompt('ingresa el precio original'))
let descuento= parseFloat(prompt('ingresa el valor del descuento'))
let PrecioFinal= precio*(descuento/100)
console.log('precio finnal:' ,PrecioFinal)

//CLASE 17- EJERCICIOS

//● Ejercicio 1: Calculando la edad

//Escribí un programa que le pida al usuario su año de nacimiento e imprima su edad actual
//  en la consola con la frase "Tienes X años" (siendo X la cantidad de años).
//Por ejemplo, asumiendo que el año actual es 2025 y el usuario ingresa 1998, el programa debe imprimir en la consola: “Tienes 26 años”.

let año= parseInt(prompt('ingrese su año de nacimiento'))
let añoActual= 2025
let edad = añoActual- año
console.log (`tienes ${edad} años`)

//Ejercicio 2: Cálculo de descuento por edad
/* Ejercicio 2: Cálculo de descuento por edad
Solicita al usuario su edad y usa una función flecha para aplicar un descuento dependiendo de la edad. Puedes tomar punto de partida los siguientes datos:
✔ 65 años = 15% de descuento
✔ Menor a 65 = No hay descuento */

let valorcompra = parseFloat(prompt('ingrese el valor de la compra'))
let edad = parseInt(prompt ('ingrese la edad del cliente'))
if (edad >= 65) {console.log (`felicidades ! 15% OFF , precio total ${valorcompra * 0.85}`);
} else {console.log(`ho hay descuento, precio total = ${valorcompra}`);}
