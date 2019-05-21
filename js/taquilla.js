//ocultar login
let ubicacionPrincipal  = window.pageYOffset;

window.onscroll = function(){
  let Desplazamiento_Actual = window.pageYOffset; 

  if(ubicacionPrincipal >= Desplazamiento_Actual){
    document.getElementById('cinemaLogin').style.top = '0';
  }
  else {
    document.getElementById('cinemaLogin').style.top='-300px';
  }
  ubicacionPrincipal= Desplazamiento_Actual;
}


//Peliculas

var nombreusuario = "ALVAROX"

var pelicula1 = document.getElementById("botonpelicula1");
var pelicula2 = document.getElementById("botonpelicula2");
var pelicula3 = document.getElementById("botonpelicula3");
var pelicula4 = document.getElementById("botonpelicula4");

var contadorpelicula1 =  1
var contadorpelicula2 = 1
var contadorpelicula3 = 1
var contadorpelicula4 = 1

var combo1puntos = 2;  //ippo  
var combo2puntos = 3; //swift
var combo3puntos = 4;  //vikingo
var combo4puntos = 5;   //natveror
var combounitariopuntos = 1;   //este es el combo unitario
var boletas = 2;
var descuentoboletas=0.05
var descuentoalimentos=0.1
var reclamarcombo1puntos = 200;  //ippo  
var reclamarcombo2puntos = 250; //swift
var reclamarcombo3puntos = 400;  //vikingo
var reclamarcombo4puntos = 500; //nattveror
var reclamarcombo5puntos = 650;  //este es el combo superior 
var reclamarboletas = 20;

var resultado2 =0
var pelicula1precio = 15000
var pelicula2precio = 15000
var pelicula3precio = 15000
var pelicula4precio = 15000

var puntostotales = 3000

//--------------------------------------variables cine ----------------------------------------------------//

infocombo1 = document.getElementById("pelicula1")
infocombo1.innerHTML = "PELICULA1" +"<br>"+ pelicula1precio + " " + descuentoboletas*100 + "%OF"
infocombo2 = document.getElementById("pelicula2")
infocombo2.innerHTML = "PELICULA2" +"<br>"+ pelicula2precio + " " + descuentoboletas*100 + "%OF"
infocombo3 = document.getElementById("pelicula3")
infocombo3.innerHTML = "PELICULA3" +"<br>"+ pelicula3precio + " " + descuentoboletas*100 + "%OF"
infocombo4 = document.getElementById("pelicula4")
infocombo4.innerHTML = "PELICULA4" +"<br>"+ pelicula4precio + " " + descuentoboletas*100 + "%OF"

//----------------------vcambiar precios puntos-----------------///
function cambiarpreciospeliculas()
{


  infocombo1 = document.getElementById("pelicula1")
  infocombo1.innerHTML = "PELICULA1" +"<br>"+ pelicula1precio + " " + descuentoboletas*100 + "%OF"
  infocombo2 = document.getElementById("pelicula2")
  infocombo2.innerHTML = "PELICULA2" +"<br>"+ pelicula2precio + " " + descuentoboletas*100 + "%OF"
  infocombo3 = document.getElementById("pelicula3")
  infocombo3.innerHTML = "PELICULA3" +"<br>"+ pelicula3precio + " " + descuentoboletas*100 + "%OF"
  infocombo4 = document.getElementById("pelicula4")
  infocombo4.innerHTML = "PELICULA4" +"<br>"+ pelicula4precio + " " + descuentoboletas*100 + "%OF"
}

//-----------------------------cambiar precios  puntos ------------------------------------//

function cambiarpreciospuntos()
{
  infoprecios= document.getElementById("Bienvenido")
  infoprecios.innerHTML = "HOLA" + " " + nombreusuario + "  "  + "PUNTOS :  " +  puntos
}

//----------------------------------------------boton confirmar pelicula

    

//-------------------------------------cambiar precios peliculas puntos fin

//-------------------------------------------FUNCION LOGICA DE ELECCION DE EL COMBO-------------------------------------------//

//---------------------------este es el boton para elegir la tarjeta--------------------------------//
tarjeta.onclick = function(e) {
 
  setTimeout(5000,elegir())
    

}

function elegir()
{
 var tipotarjeta = tarjeta.options[tarjeta.selectedIndex].value;
 if (tipotarjeta!=="0")
 {
   switch (tipotarjeta) {
     case "bronce":
       combo1precio = 9000;
       combo2precio = 19000;
       combo3precio = 29000;
       combo4precio = 9000;
       combo5precio = 18000;
       combo6precio = 29000;
       // cambiarprecios();
       pelicula1precio = 13000;
       pelicula2precio = 13000;
       pelicula3precio = 13000;
       pelicula4precio = 13000;
       pelicula5precio = 13000;
       pelicula6precio = 13000;
       cambiarpreciospeliculas();

       combo1puntos = 2;  //ippo  
       combo2puntos = 3; //swift
       combo3puntos = 4;  //vikingo
       combo4puntos = 5;   //natveror
       combounitariopuntos = 1;   //este es el combo unitario
       boletas = 2;
       descuentoboletas=0.05
       descuentoalimentos=0.1
       reclamarcombo1puntos = 200;  //ippo  
       reclamarcombo2puntos = 250; //swift
       reclamarcombo3puntos = 400;  //vikingo
       reclamarcombo4puntos = 500; //nattveror
       reclamarcombo5puntos = 650;  //este es el combo superior 
       cambiarpreciospuntos();
     

      
     break;
     case "platino":
       combo1precio = 8000;
       combo2precio = 18000;
       combo3precio = 27000;
       combo4precio = 7000;
       combo5precio = 16000;
       combo6precio = 26000;
       //cambiarprecios();
       pelicula1precio = 12000;
       pelicula2precio = 12000;
       pelicula3precio = 12000;
       pelicula4precio = 12000;
       pelicula5precio = 12000;
       pelicula6precio = 12000;
       cambiarpreciospeliculas();

       combo1puntos = 3;  //ippo  
       combo2puntos = 4; //swift
       combo3puntos = 6;  //vikingo
       combo4puntos = 8;   //natveror
       combounitariopuntos = 1;   //este es el combo unitario
       boletas = 4;
       descuentoboletas=0.2
       descuentoalimentos=0.3
       reclamarcombo1puntos = 100;  //ippo  
       reclamarcombo2puntos = 150; //swift
       reclamarcombo3puntos = 200;  //vikingo
       reclamarcombo4puntos = 300; //nattveror
       reclamarcombo5puntos = 400;  //este es el combo superior 
       reclamarboletas = 20;  //este es el combo superior 
       cambiarpreciospuntos();
     

     
     break;
     case "vip": //al parece este combo no es superior
       combo1precio = 5000;
       combo2precio = 15000;
       combo3precio = 25000;
       combo4precio = 5000;
       combo5precio = 15000;
       combo6precio = 20000;
      // cambiarprecios();
       pelicula1precio = 11000;
       pelicula2precio = 11000;
       pelicula3precio = 11000;
       pelicula4precio = 11000;
       pelicula5precio = 11000;
       pelicula6precio = 11000;
       cambiarpreciospeliculas();

       combo1puntos = 2;  //ippo  
       combo2puntos = 3; //swift
       combo3puntos = 5;  //vikingo
       combo4puntos = 8;   //natveror
       combounitariopuntos = 1;   //este es el combo unitario
       boletas = 4;
       descuentoboletas=0.2
       descuentoalimentos=0.3
       reclamarcombo1puntos = 100+40;  //ippo  
       reclamarcombo2puntos = 150+40; //swift
       reclamarcombo3puntos = 200+40;  //vikingo
       reclamarcombo4puntos = 300+40; //nattveror
       reclamarcombo5puntos = 400+40;  //este es el combo superior 
       reclamarboletas = 20+40;  //este es el combo superior 
       cambiarpreciospuntos();
     



     
     break;

     default:
       alert("no se encontro la categoria deseada")
     break;
   }
 }
 

}



//---------------------------------------------------------------------------------------AQUI ACABA LA FUNCIN LOGICA ---------------//




pelicula1.onclick = function(e) {
 
  puntostotales += boletas 
  var contadorpelicula1 =  document.getElementById("contadorpelicula1").value;
  alert("Selecciono "+contadorpelicula1+" boletas.")

  var contenido = " "
  //var combo1precio = 10000
  if(contadorpelicula1>1)
  {
    resultado2 = pelicula1precio*contadorpelicula1-descuentoboletas*pelicula1precio
  }
  else
  {
  contadorpelicula1 = 1;
  resultado2 = pelicula1precio*contadorpelicula1
  }

  //resultado2 = pelicula1precio*contadorpelicula1
  

  //alert(resultado)
  document.getElementById("textopeliculas").innerHTML = "Su pelicula es:" + "  "+" CORRE LOLA CORRE" +" <br>"+  contadorpelicula1 + " BOLETAS"+
  " " + pelicula1precio*contadorpelicula1 + "" +"<br>"+""+ "Descuento:" +""+ "-" + descuentoboletas*pelicula1precio + "  " +  " " +"TOTAL" + " " + resultado2 + " " + "<br>"
  + " Sus puntos totales son: "  + puntostotales
   
  //document.getElementById("totalpeliculas").innerHTML = "cantidad de tikets"+"  " + contadopelicula1 + " " +  "TOTAL" + " " + resultado2

  //document.getElementById("totalpeliculas").innerHTML =  "TOTAL" + " " + resultado2


  
}




pelicula2.onclick = function(e) 
{
  resultado2=0
  var contenido = " "
  var contadorpelicula2 =  document.getElementById("contadorpelicula2").value;
  alert("Selecciono "+contadorpelicula2+" boletas.")
  puntostotales += boletas

  var contenido = " "
  //var combo1precio = 10000
  if(contadorpelicula2>1)
  {
    resultado2 = pelicula2precio*contadorpelicula2-descuentoboletas*pelicula2precio
  }
  else
  {
  contadorpelicula2 = 1;
  resultado2 = pelicula2precio*contadorpelicula2
  }

  document.getElementById("textopeliculas").innerHTML = "Su pelicula es:" + "  "+" CUBE" +" <br>"+  contadorpelicula2 + " BOLETAS"+
  " " + pelicula2precio*contadorpelicula2 + "" +"<br>"+""+ "Descuento:" +""+ "-" + descuentoboletas*pelicula2precio + "  " +  " " +"TOTAL" + " " + resultado2 + " " + "<br>"
  + " Sus puntos totales son: "  + puntostotales

  
  
}


pelicula3.onclick = function(e) 
{
  resultado2=0
  var contenido = " "
  var contadorpelicula3 =  document.getElementById("contadorpelicula3").value;
  alert("Selecciono "+contadorpelicula3+" boletas.")
  puntostotales += boletas

  var contenido = " "
  //var combo1precio = 10000
  if(contadorpelicula2>1)
  {
    resultado2 = pelicula3precio*contadorpelicula3-descuentoboletas*pelicula3precio
  }
  else
  {
  contadorpelicula3 = 1;
  resultado2 = pelicula3precio*contadorpelicula3
  }

  document.getElementById("textopeliculas").innerHTML = "Su pelicula es:" + "  "+" LOST IN TRANSLATION" +" <br>"+  contadorpelicula3 + " BOLETAS"+
  " " + pelicula3precio*contadorpelicula3 + "" +"<br>"+""+ "Descuento:" +""+ "-" + descuentoboletas*pelicula3precio + "  " +  " " +"TOTAL" + " " + resultado2 + " " + "<br>"
  + " Sus puntos totales son: "  + puntostotales

}


pelicula4.onclick = function(e) 
{
  resultado2=0
  var contenido = " "
  var contadorpelicula4 =  document.getElementById("contadorpelicula4").value;
  alert("Selecciono "+contadorpelicula4+" boletas.")
  puntostotales += boletas

  var contenido = " "
  //var combo1precio = 10000
  if(contadorpelicula4>1)
  {
    resultado2 = pelicula4precio*contadorpelicula4-descuentoboletas*pelicula4precio
  }
  else
  {
  contadorpelicula4 = 1;
  resultado2 = pelicula4precio*contadorpelicula4
  }

  document.getElementById("textopeliculas").innerHTML = "Su pelicula es:" + "  "+" MEMENTO" +" <br>"+  contadorpelicula4 + " BOLETAS"+
  " " + pelicula4precio*contadorpelicula4 + "" +"<br>"+""+ "Descuento:" +""+ "-" + descuentoboletas*pelicula4precio + "  " +  " " +"TOTAL" + " " + resultado2 + " " + "<br>"
  + " Sus puntos totales son: "  + puntostotales
  }

  if(document.getElementById("comprarpelicula")= Text("SU PEDIDO")){
    document.formulario.comprarpelicula.disabled = true;
  }
  else{
    document.formulario.comprarpelicula.disabled = false;
  }

