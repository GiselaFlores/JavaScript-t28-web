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

let promedioNota2 = promedioDos(notaa, notaaa);
promedioNota *= 2;
console.log(promedioNota(5, 20));

// arrow function - función flecha

// declaración
let cuadrado = x => x*x;

let rectangulo = (x, y) => {
    area = x*y;
    return area;
};

//llamado
console.log("el área del cuadrado es: ", cuadrado(2));

console.log("el área del rectangulo es: ", rectangulo(2, 5));

//Resumidas

function (a) { 
    return a + 100;
}

(a) => {return a+100;}

(a) => a + 100;

a => a + 100;

// función anónima

const saludo = function () {
    return "hola";
}

// callback

function saludar(nombre){
    alert("Hola" + nombre);
}


function saludoUsu(callback, callback2, nota){
    let nombre = prompt("Ingrese su nombre: ");
    callback(nombre);
    callback2(nota);
}

saludoUsu(saludar, edad, nota);


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


//Objetos

let nombreUsuario = new String("hola Paula");

let nombreUsuarioDos = "Hola jacinto";

let usuario = new Object();

usuario.nombre = "Pedro";
usuario.edad = 45;

console.log("El nombre de usuario es: ", usuario.nombre, ". Su edad es de: ", usuario.edad);

console.log({nombreUsuarioDos});

let usu = {
    nombre: "Jacinta",
    edad: 45,
    nacionalidad: "Argenta",
    dniGenero: function(){
        return this.nombre + "No binario"
    },
    quienSoy() {return "Soy " + this.nombre}
}

console.log(usu.nombre);
console.log(usu.dniGenero());

usu['nacionalidad'] = "Argentina";
console.log(usu.nacionalidad);

console.log(usu.quienSoy());

//clases constructor

class Animal {
    constructor(nombre, tipo, edad){
        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad;    
    }
}

let perro = new Animal("Firulais", "pepe", 8);

perro.nombre = "pichichus";
perro.edad = 10;

//función constructora

function Animalito(nombre, tipo, edad){
    this.nombre = nombre;
    this.tipo = tipo;
    this.edad = edad;       
}

let gato = new Animalito("Chocolate", "siames", 5);
let pez = new Animalito("Dory", "koi", 1);

// métodos

//let nombreUsuario = new String("hola Paula");

let puntoLength = nombreUsuario.length;
console.log("La cantidad de caracteres del String es de: ", nombreUsuario.length);

let charAt = nombreUsuario.charAt("P");

let concat = nombreUsuario.concat(perro.nombre, gato.nombre, "hola");

let indexOf = nombreUsuario.indexOf("P", 2);

let lastIndexOf = nombreUsuario.lastIndexOf("P", 2);

nombreUsuario.toLowerCase();
nombreUsuario.toUpperCase();
nombreUsuario.repeat(5);
nombreUsuario.trim();// saca los espacios laterales " Hola " "Hola"
//nombreUsuario.replace(,);
nombreUsuario.substring(4, 8);

console.log("hola" + gato.nombre);
document.write(`<h1> hola ${usu.dniGenero()} </h1>`); //alt 96

//objetos Math

Math.abs(-5);
Math.max(1, 20, 50, 6);
Math.min(1, 20, 50, 6);
Math.pow(2, 10);
Math.sqrt(2);
Math.random(); // un número aleatorio [0, 1)
Math.round(); // -3.75 / -4
Math.floor(); // 3.75 / 3.25 - 3
Math.ceil(); // 3.75 / 3.25 - 4
Math.trunc(); // 3.75 / 3


// Crear objetos de tipo Usuario con datos ingresados por el usuario

// 1 Ingreso de datos string nombre, apellido, dni, mail, fecha_nacimiento

let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let dni = prompt("Ingrese su dni:");
let mail = prompt("Ingrese su mail:");
let fechaN = prompt("Ingrese su fechaN:");

// 2 Armar la estructura de creación del objeto

function usuarioObj(nombre, apellido, dni, mail, fechaN){
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;  
    this.mail = mail; 
    this.fechaN = fechaN;      
}

let usuarioUno = new usuarioObj(nombre, apellido, dni, mail, fechaN);

// 3 Mostrar al usuario la información por la web de su registro

document.write(`
        <h1 class="mt-5 text-center" > Datos ingresados del registro: </h1>

            <div class="tablaDatos">
                <table>
                    <tr>
                        <th>Descripción</th>
                        <th>Dato ingresado</th>
                    </tr>

                    <tr>
                        <td>Nombre:</td>
                        <td>Apellido:</td>
                        <td>Dni:</td>
                        <td>Mail:</td>
                        <td>Fecha de Nacimiento:</td>
                    </tr>

                    <tr>
                        <td>${usuarioUno.nombre}</td>
                        <td>${usuarioUno.apellido}</td>
                        <td>${usuarioUno.dni}</td>
                        <td>${usuarioUno.mail}</td>
                        <td>${usuarioUno.fechaN}</td>
                    </tr>
                </table>
            </div>
    
    `);

*/

// ARRAYS

const array = new Array("a", 5, "hola", 120, true);

console.log(array[2]);


const frutas = ["manzana", "frutilla", "naranja", "banana", "pera"];

const verduras = [];

verduras[0] = "papa";
verduras[1] = "zapallo";
verduras[2] = "tomate";

console.log(verduras[2]);

console.log(frutas.length); //cantidad de elementos

console.log(frutas.length -1); // cantidad de posiciones

console.log("verduras: ", verduras);

// recorrer el array

for(i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

frutas.forEach(fruti => console.log(fruti));

// métodos

frutas.push("kiwi");
console.log(frutas);

let eliminado = frutas.pop(); // elimina el último y devuelve ese eliminado

let tamano = frutas.unshift("frutilla", "arándanos", "durazno", "uvas"); //agrega al inicio y devuelve cantidad de elementos, tamaño del array
console.log(frutas);

let primero = frutas.shift(); // elimina y devuelve el primero

let verduleria = frutas.concat(verduras); // concatena dos o mas arrays
console.log(verduleria);

let busquedaInicio = verduleria.indexOf("frutilla", 3); // devuelve la posición donde esta el elemento la primera vez que aparece y busca desde el princinpio
console.log(busquedaInicio);

let busquedaFinal = verduleria.lastIndexOf("frutilla"); 

let arrayNuevo = verduleria.slice(2, 6); // formar un sub array de un array, y me lo devuelve como un nuevo array

verduleria.splice(2, 0, "lechuga");
console.log(verduleria);

verduleria.splice(1, 1, "pera");
console.log(verduleria);

verduleria.reverse();
console.log(verduleria);

verduleria.sort();
console.log(verduleria);

const numeros = [10, 5, 1, 59, 6, 89, 18, 9, 27, 235, 425, 38];
console.log(numeros.sort());

//[1, 10, 18, 235, 27, 38, 425, 5, 59, 6, 89, 9]

numeros.sort((a, b) => a - b);
console.log(numeros);

numeros.toSorted();
console.log(numeros);

const cumpleCriterio = numeros.every(num => num %2 === 0);
console.log(cumpleCriterio);

const cumpleAlMenosUno = numeros.some(num => num %2 === 0);
console.log(cumpleAlMenosUno);

const doble = numeros.map(num => num*2);
console.log(doble);

const pares = numeros.filter(num => num %2 === 0);
console.log(pares);

const busquedaCondicion = numeros.findIndex(num => num > 25);
console.log(busquedaCondicion);

const busquedaElemento = numeros.find(num => num > 25);
console.log(busquedaElemento);

const acumulador = numeros.reduce((acumula, dato) => acumula + dato, 0);
console.log(acumulador);

const acumuladorDereIzq = numeros.reduceRight((acumula, dato) => acumula - dato, 0);
console.log(acumuladorDereIzq);

//ejercicio

/*
1- pedir nombre y apellido, notas
2- calcular el promedio
3- lista completa con nombre y apellido, nota1, nota2 y promedio, aprobado, desaprobado o a final.






