let no = document.getElementById('no');
let si = document.getElementById('si');
let desaparecer = document.getElementById('desaparecer')
let pina = document.getElementById('pizzapina')
let pepe =document.getElementById('pizzapepe')
let respuesta1  = "si";
let respuesta2 = "no";

const elegir =()=>{
    if(si){
        pina.classList.remove('desaparecer')
    } else if (no) {
        pepe.classList.remove('desaparecer')
    }

}

//jison
let datos = {
    guapeton : "Eichi", 
    wero : "la wera",
    rosario: "rosario 4ever",
    comida : {
        pizza : "peperoni"
        nugget : "MCDonalls"

    }
}
let pp1 = document.getElementById('parrafo1');
let pp2 = document.getElementById('parrafo2');
let pp3 = document.getElementById('parrafo3');

pp1.innerHTML = datos.comidad.pizza