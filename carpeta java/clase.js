/* Como demostrar errores  */
console.log("inicio")
var x = 6; 
var y = 0;
try{
    console.log(x/y)
}catch(err){
    console.log(error)
}
console.log("fin")

/* Objeto Date */

var a = new Date()

var b = new Date(2018,11,24,12,33,30,0) /* año mes dia hora minuto segundo milisegundos */

/* Manejo de cadenas */

var cadena = 'Desarrollo web';
cadena.length; //Longitud de la cadena 
cadena [0];
cadena = cadena.toLocaleLowerCase(); /* Pasar todo a minuscula */
cadena = cadena.toUpperCase(); /* Pasar todo a mayuscula */