



// const ciclo = (x=1 , y=10 , z=1) => {
//     for(let i = x; i <= y; i = i+z){
//         console.log(i)
//     }
// }



// pasa como primer parametro, el inicio como en segundo el final, y como tercero de cuanto en cuanto

//ciclo(5, 50, 2);

// const tablas = (a, b) => {
//     for(let i = a; i <= b; i++){
//         for( let j = 1; j <= 10; j++){
//             console.log (i + "x" + j + "="+ i * j);
//         }
//     }
// } 
 
// tablas (4, 7);

const nuevaSuma = (a, b)=> {
    return a + b;
}
nuevaSuma (3, 2)

const nuevaResta = (a, b) => {
    return a - b;
}
nuevaResta (9, 1)

const multiplicacion = (a, b) => 
{ return (a*b);
}
multiplicacion(nuevaSuma(3,2), nuevaResta(9, 1))
console.log(multiplicacion(nuevaSuma(3,2),nuevaResta(9,1)))