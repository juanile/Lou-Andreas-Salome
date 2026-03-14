function mostrarCita(){

let citas = [

"El amor es expansión del yo hacia el otro.",
"El erotismo es una fuerza fundamental en la vida humana.",
"El individuo se comprende a sí mismo en relación con los demás.",
"La libertad interior es la base de la vida espiritual.",
"Todo encuentro profundo transforma al individuo.",
"El pensamiento surge cuando el ser humano se enfrenta a sí mismo.",
"Amar es aceptar el misterio del otro."

];

let numero = Math.floor(Math.random() * citas.length);

let elemento = document.getElementById("cita");

elemento.classList.remove("desaparecer");

/* aquí se agregan las comillas */
elemento.innerText = "“" + citas[numero] + "”";

setTimeout(function(){
    elemento.classList.add("desaparecer");
},3000);

}

function evento(año){

let texto = "";

if(año == 1882){
texto = "Conoce a Nietzsche en Roma.";
}

if(año == 1894){
texto = "Publica su libro sobre Nietzsche.";
}

if(año == 1911){
texto = "Se une al círculo psicoanalítico de Freud.";
}

document.getElementById("evento").innerText = texto;



}

const toggle = document.getElementById("modoOscuroToggle");

toggle.addEventListener("change", function(){

document.body.classList.toggle("modo-oscuro");

});

let fotos = [

"https://www.dropbox.com/scl/fi/g60w61ok48o74mgj24sg0/Lou.png?rlkey=pybqlmw2zisznpg7rcl9ilbyo&raw=1",

"https://www.dropbox.com/scl/fi/w8blxwlmiuz49dw6l0xlu/Lou2.png?rlkey=gfmqvwpj6y0qpzfico2x7594o&st=q7sbtlly&dl=1",

"https://www.dropbox.com/scl/fi/77z16za9iq4og867ziw40/Lou3.png?rlkey=j64qryof9xaujq9cukpar1wi4&st=byxabvaa&dl=1"

];

let indiceFoto = 0;

function cambiarFoto(){

indiceFoto++;

if(indiceFoto >= fotos.length){
indiceFoto = 0;
}

document.getElementById("fotoSalome").src = fotos[indiceFoto];

}

