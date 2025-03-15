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