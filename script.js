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
