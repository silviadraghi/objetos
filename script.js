/* objeto 1 cumpleanos */
 alert("OBJETO 1, cumpleanos")
const cumpleaños ={
id:63,
nombre: "Mati",
años:"35",
invitados:"15",
encuentro:"clubdelbarrio",

cantar:function(){
   alert("que los cumplas feliz, que los cumplas feliz")
},
invitar:function(){
   alert("te invito al cumple de "+cumpleaños.nombre)
}
}
cumpleaños.invitar()
cumpleaños.cantar() 

/* objeto 2 jardineria con parametros*/
alert("OBJETO 2 trabajos de jardineria -con parametros-")
const jardineria={
id:"maipu2380",
flores:"rosales",
cantidad:"4",
color:"blanco",

podar:function(cant){
    alert("vamos a podar "+jardineria.cantidad+" "+jardineria.flores)
    var tiempo=(jardineria.cantidad)*cant
    alert("tardaremos "+tiempo+" minutos")
}
}


jardineria.podar(30)


/* objeto 3 almuerzo con return */

alert ("OBJETO 3 costo del almuerzo - con return")
const almuerzo={
invitados:"40",
entrada:"rabas",
plato:"pastas caseras ",
postre:"flan con dulce de leche",
precio:"5000",

servir:function(){
    var totalFestejo=(almuerzo.invitados)*(almuerzo.precio)
    return totalFestejo
}
}
ladolorosa=almuerzo.servir()
alert("el menu de "+ almuerzo.entrada+" "+almuerzo.plato+ " "+ almuerzo.postre+" para "+almuerzo.invitados+" invitados")
alert("si por cada invitado cuesta "+almuerzo.precio)
alert("el festejo cuesta "+ladolorosa)





