// Escribe un programa que pida al usuario que ingrese tres números y
// determine cuál es el mayor de los tres.

const prompt = require('prompt-sync')();

let num1 = parseInt(prompt(console.log("Ingrese un numero: ")));
let num2 = parseInt(prompt(console.log("Ingrese otro numero: ")));
let num3 = parseInt(prompt(console.log("Ultima vez, ingrese otro numero: ")));

if(num1 < num2){
    if(num2 > num3){
        console.log("El mayor numero es: " + num2);
    }else{
        console.log("El mayor numero es : " + num3);
    }
}else{
    if(num1 > num3){
        console.log("El mayor numero es: " + num1);
    }
}
