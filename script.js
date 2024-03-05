const nombre = prompt("Ingresa tu nombre");
const apellido = prompt("Ingresa tu apellido");
const nombrecompleto = (nombre + " " + apellido);
const nacimiento = prompt ("Ingrese su ano de nacimiento");
const Calcularedad = 2024 - parseInt(nacimiento);
const diadenacimiento = prompt("Ingrese su dia de nacimiento");
const mesdenacimiento = prompt("Ingresa el mes de tu nacimiento");

console.log("Mi nombre es ", nombrecompleto, "mi edad es ", Calcularedad, " años y nací el ", diadenacimiento, "de ", mesdenacimiento, "de ", nacimiento);



