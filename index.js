/*console.log("Hola mundo JavaScript");

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

//Switch
let nota = parseInt(prompt("Ingrese su nota: "));

switch(nota){
    case 10:
        calificacion = "sobresaliente";
        break;
    case 9:
    case 8:
        calificacion = "Buen examen";
        break;
    case 7:
    case 6:
        calificacion = "buena";
        break;
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
        calificacion = "estudia mas para la proxima";
        break;
    default:
        calificacion = "nota es erronea";
        break;
}

console.log("Tu estado de calificación es: ", calificacion);
document.write(calificacion);

//Bucles

for(let i=30; i>=1; i--){
    console.log(i);
}
*/
//while
let i=0;

while(i < 5){
    console.log("valor de i: ", i);
    i++;
}

let nota = 0;
/*
do{
    let nota = parseInt(prompt("Ingrese su nota: "));
    console.log(nota);
}
while(nota<1 || nota>10);


do{
    console.log("valor de i: ", i);
    i++;
}
while(i < 5);

//console.log(nota);
*/
//funciones

let notaTres = 8;

//declaración
function promedio(nota, notaDos){
    console.log((nota + notaDos)/2);
}

//llamar
promedio(10, 8);
promedio(8, 2);
promedio(notaTres, 7);

//return

//declaración
function promedioDos(nota, notaDos){
   return (nota + notaDos)/2;
}

//llamar

let promedioNota = promedioDos(10, 8);
promedioNota *= 2;
console.log(promedioNota);


//ejemplo: tabla de multiplicar

//que aparezca toda la tabla con el formato 5 x 1 = 5

function tablaMultiplicar(tabla, hasta) {
    let sumatoria = 0;

    for(let i=1; i <=hasta; i++){
        console.log(tabla + " x " + i + " = ", tabla*i);
        sumatoria += tabla*i; 
    }
    return sumatoria;
}

let resultado = tablaMultiplicar(5, 10);
console.log(resultado);
let resultadoDos = tablaMultiplicar(9, 15);
console.log(resultadoDos);

