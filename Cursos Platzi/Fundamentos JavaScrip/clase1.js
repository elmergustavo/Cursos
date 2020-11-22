var nombre
var apellido = 'Pu Tzunux'
nombre = 'Gustavo'

var nombreMayusculas = nombre.toUpperCase() // coloca toco em mayusculas
var apellidoMinusculas = apellido.toLowerCase() // apellidoMinusculas

var primeraLetraNombre = nombre.charAt(0) // la primera letra de nombre
var cantidadLetrasNombre = nombre.length // cantidad de caracteres
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}` // otra fomra de concatenar
var str = nombre.substr(1,2)  // rango de caracteres

console.log('Hola ' + nombre + apellido)
