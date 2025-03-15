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