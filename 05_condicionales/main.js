//if(condicion) {
//  comandos...
//} else if (condicion2) {
//comandos
//}

//ejercicio
//let edad = 18;

//if (edad === 18) {
//    console.log ('eres mayor de edad');
//} else {
//    console.log ('no eres mayor de edad');
//}

//let numero = Number(prompt("Ingresa tu numero"))

//if( numero % 2 === 0){
//    console.log(numero + " es un numero par")
//}else{
//    console.log(numero + " es un numero impar")
//}



// let dia - 0;

// if (dia ---0) {
//     console.log ('lunes');
// }else if(dia === 1){
//     console.log ('martes');
// }else if(dia === 2){
//     console.log ('miercoles');
// }else if(dia === 3){
//     console.log ('jueves');
// }else if(dia === 4){
// console.log ('viernes');
// }else if(dia === 5){
//     console.log ('sabado');
// }else if(dia === 6){
//     console.log ('domingo');
// }else {
//     console.log ('dia invalido');
// }


//ejercicio
// let edad = prompt("ingresa tu edad")

// if (edad <= 15){
//     console.log('no puedes conduucir, eres menor de edad')
// }else if(edad == 16 || edad == 17){
//     console.log('puedes sacar tu permiso')
// }else if (edad >= 18 && edad <= 65) {
//     console.log('puedes conducir')
// }else if( edad > 65 ){
//     console.log('ya no puedes conducir')
// }else{
//     console.log("No te entendi perro")
// }

//ejercicio

// let jugador1 = prompt("ingresa tu jugada")
// let jugador2 = prompt("ingresa tu jugada")

// let piedra = "piedra"
// let papel = "papel"
// let tijera = "tijera"

// if (jugador1 === piedra && jugador2 === papel){
//     console.log("gana jugador2")
// }else if(jugador1 === papel && jugador2 ===tijera){
//   console.log("gana jugador2")
// }else if(jugador1 === tijera && jugador2 === piedra){
//     console.log("gana jugador2")

// }else if (jugador1 === papel && jugador2 === piedra){
//  console.log("gana jugador1")
// }else if (jugador1 === tijera && jugador2 === papel){
//     console.log("gana jugador1")
// }else if(jugador1 === piedra && jugador2 === tijera){
//     console.log("gana jugador1")

// }else if (jugador1 === papel && jugador2 === papel){
//     console.log("empate")
// }else if (jugador1 === piedra && jugador2 === piedra){
//     console.log("empate")
// }else if (jugador1 === tijera && jugador2 === tijera){
//     console.log("empate")
// }else{ 
// console.log("no es valido, escribe tu jugada de nuevo")
// }

//ejercicio
let contraseña = prompt("ingresa contraseña")

if(contraseña === 'perritosalchicha'){
console.log("contraseña correcta")
}else{
    console.log("error")
}