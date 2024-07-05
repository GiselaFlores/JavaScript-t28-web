console.log("Hola mundo JavaScript");

//Variables

//var nombre = "Adriana";
let nombreDos = "Juan";
let variable = 10;  
let num, numDos, bienvenida, vacio,  numTres = 5, saludo = "Hola", numCuatro = "10";

num = numTres*10 + numTres;
numDos = num + 12;
bienvenida = saludo + " " + nombreDos;

console.log(num);
console.log({numDos});
console.log(bienvenida);
console.log(numCuatro*num); // string * number = number
console.log(numCuatro+numTres); // string + number = string
console.log(numCuatro/numDos); // string * number = number
console.log(numDos/numCuatro); // string * number = number
console.log(saludo*num);
console.log(vacio);

vacio = true;

console.log(vacio);

console.log(bienvenida + ", bienvenido al sitio");
console.log(`<h1 class="text-center  mt-5  fondo"> ${bienvenida}, bienvenido al sitio </h1>`);
document.write(`<h1 class="text-center  mt-5  fondo"> ${bienvenida}, bienvenido al sitio </h1>`);

console.log("El valor del producto es: ", num);
document.write(`<h3 class="text-center  mt-3"> El valor del producto es: ${num} </h3>`);

//alert("Esto es un mensaje de alerta");

let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));
console.log("Bienvenido " + nombre + ", usted tiene " + edad + " años");
document.write(`<h3 class="text-center  mt-3"> Bienvenido ${nombre}, usted tiene ${edad} años </h3>`);
console.log(edad);


num = num +10;
num += 10;

// Estructuras de control

// if

if(num >= 12){
    console.log("esta correcto");
}
else{
    console.log("es incorrecto");
}


if(num >= 12){
    console.log("esta correcto");
}
else if(num <= 5){
    console.log("es correcto de nuevo");
}
    else{
        console.log("es incorrecto de nuevo");
    }

//ternario

let dato = num >= 12 ? "correcto" : "incorrecto";
console.log(dato);

let datos = num >= 12 ? console.log("correcto") : console.log("incorrecto");

