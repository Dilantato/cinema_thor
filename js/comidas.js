var nombreusuario = "ALVAROX"

var botoncombo1 = document.getElementById("botoncombo1");
var botoncombo2 = document.getElementById("botoncombo2");
var botoncombo3 = document.getElementById("botoncombo3");
var botoncombo4 = document.getElementById("botoncombo4");

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
var combo3precio = 15000
var comboprecio4 = 15000

var puntostotales = 3000

var combo1precio = 8000;
var combo2precio = 18000;
var combo3precio = 27000;
var combo4precio = 7000;
var combo5precio = 16000;
var combo6precio = 26000;

//--------------------------------------variables combos ----------------------------------------------------//
/*
infocombo1 = document.getElementById("pelicula1")
infocombo1.innerHTML = "PELICULA1" +"<br>"+ pelicula1precio + " " + descuentoboletas*100 + "%OF"
infocombo2 = document.getElementById("pelicula2")
infocombo2.innerHTML = "PELICULA2" +"<br>"+ pelicula2precio + " " + descuentoboletas*100 + "%OF"
infocombo3 = document.getElementById("pelicula3")
infocombo3.innerHTML = "PELICULA3" +"<br>"+ combo3precio + " " + descuentoboletas*100 + "%OF"
infocombo4 = document.getElementById("pelicula4")
infocombo4.innerHTML = "PELICULA4" +"<br>"+ comboprecio4 + " " + descuentoboletas*100 + "%OF"
*/

//----------------------vcambiar precios puntos-----------------///

/*
function cambiarpreciospeliculas()
{


  infocombo1 = document.getElementById("pelicula1")
  infocombo1.innerHTML = "PELICULA1" +"<br>"+ pelicula1precio + " " + descuentoboletas*100 + "%OF"
  infocombo2 = document.getElementById("pelicula2")
  infocombo2.innerHTML = "PELICULA2" +"<br>"+ pelicula2precio + " " + descuentoboletas*100 + "%OF"
  infocombo3 = document.getElementById("pelicula3")
  infocombo3.innerHTML = "PELICULA3" +"<br>"+ combo3precio + " " + descuentoboletas*100 + "%OF"
  infocombo4 = document.getElementById("pelicula4")
  infocombo4.innerHTML = "PELICULA4" +"<br>"+ comboprecio4 + " " + descuentoboletas*100 + "%OF"
}
*/

//-----------------------------------cambia precios de comidad--------------------------//
function cambiarprecios()
{

infocombo1 = document.getElementById("combo1")
infocombo1.innerHTML = "COMBO1" +"<br>"+ combo1precio + " " +descuentoalimentos*100 + "%OF"
infocombo2 = document.getElementById("combo2")
infocombo2.innerHTML = "COMBO2" +"<br>"+ combo2precio + " " +descuentoalimentos*100 + "%OF"
infocombo3 = document.getElementById("combo3")
infocombo3.innerHTML = "COMBO3" +"<br>"+ combo3precio + " " +descuentoalimentos*100 + "%OF"
infocombo4 = document.getElementById("combo4")
infocombo4.innerHTML = "COMBO4" +"<br>"+ combo4precio + " " +descuentoalimentos*100 + "%OF"


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
       combo3precio = 13000;
       comboprecio4 = 13000;
       pelicula5precio = 13000;
       pelicula6precio = 13000;
      // cambiarpreciospeliculas();

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
       cambiarprecios();
       pelicula1precio = 12000;
       pelicula2precio = 12000;
       combo3precio = 12000;
       comboprecio4 = 12000;
       pelicula5precio = 12000;
       pelicula6precio = 12000;
       //cambiarpreciospeliculas();

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
      cambiarprecios();
       pelicula1precio = 11000;
       pelicula2precio = 11000;
       combo3precio = 11000;
       comboprecio4 = 11000;
       pelicula5precio = 11000;
       pelicula6precio = 11000;
       //cambiarpreciospeliculas();

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



























//-------------------------------------------------------------------------AQUI ACABA LA FUNCIN LOGICA ---------------//




botoncombo1.onclick = function(e) {
 
  puntostotales += combo1puntos
  var contadorpelicula1 =  document.getElementById("contadorpelicula1").value;
  alert(contadorpelicula1)

  var contenido = " "
  //var combo1precio = 10000
  if(contadorpelicula1>1)
  {
    resultado2 = combo1precio*contadorpelicula1-descuentoboletas*combo1precio
  }
  else
  {
  contadorpelicula1 = 1;
  resultado2 = combo1precio*contadorpelicula1
  }

  //resultado2 = pelicula1precio*contadorpelicula1
  

  //alert(resultado)
  document.getElementById("textopeliculas2").innerHTML = "ESTE ES EL PEDIDO" + "  "+" COMBO1:" + " "+ "X"+ " " +  contadorpelicula1 + " "+
  " " + combo1precio+ " " + "OF" + "-" + descuentoboletas*combo1precio + "  " +  " " +"TOTAL" + " " + resultado2 + " " + "<br>"
  + " su puntos totales son "  + puntostotales
   
  //document.getElementById("totalpeliculas").innerHTML = "cantidad de tikets"+"  " + contadopelicula1 + " " +  "TOTAL" + " " + resultado2

  //document.getElementById("totalpeliculas").innerHTML =  "TOTAL" + " " + resultado2


  
}




botoncombo2.onclick = function(e) 
{
  resultado2=0
  var contenido = " "
  var contadorpelicula2 =  document.getElementById("contadorpelicula2").value;
  alert(contadorpelicula2)
  puntostotales += combo2puntos
  var contenido = " "
  //var combo1precio = 10000
  if(contadorpelicula2>1)
  {
    resultado2 = combo2precio*contadorpelicula2-descuentoboletas*combo2precio
  }
  else
  {
  contadorpelicula2 = 1;
  resultado2 = combo2precio*contadorpelicula2
  }

  document.getElementById("textopeliculas").innerHTML = "ESTE ES EL PEDIDO" + "  "+" COMBO2:" + " "+ "X"+ " " +  contadorpelicula2 + " "+
  " " + combo2precio+ " " + "OF" + "-" + descuentoboletas*combo2precio + "  " +  " " +"TOTAL" + " " + resultado2 + " " + "<br>"
  + " su puntos totales son "  + puntostotales

  
  
}


botoncombo3.onclick = function(e) 
{
  resultado2=0
  var contenido = " "
  var contadorpelicula3 =  document.getElementById("contadorpelicula3").value;
  alert(contadorpelicula3)
  puntostotales += combo3puntos

  var contenido = " "
  //var combo1precio = 10000
  if(contadorpelicula2>1)
  {
    resultado2 = combo3precio*contadorpelicula3-descuentoboletas*combo3precio
  }
  else
  {
  contadorpelicula3 = 1;
  resultado2 = combo3precio*contadorpelicula3
  }

  document.getElementById("textopeliculas").innerHTML = "ESTE ES EL PEDIDO" + "  "+" COMBO3:" + " "+ "X"+ " " +  contadorpelicula3 + " "+
  " " + combo3precio + " " + "OF" + "-" + descuentoboletas*combo3precio + "  " +  " " +"TOTAL" + " " + resultado2  + " " + "<br>"
  + " su puntos totales son "  + puntostotales


}


botoncombo4.onclick = function(e) 
{
  resultado2=0
  var contenido = " "
  var contadorpelicula4 =  document.getElementById("contadorpelicula4").value;
  alert(contadorpelicula4)
  puntostotales += boletas

  var contenido = " "
  //var combo1precio = 10000
  if(contadorpelicula4>1)
  {
    resultado2 = comboprecio4*contadorpelicula4-descuentoboletas*comboprecio4
  }
  else
  {
  contadorpelicula4 = 1;
  resultado2 = comboprecio4*contadorpelicula4
  }

  document.getElementById("textopeliculas").innerHTML = "ESTE ES EL PEDIDO" + "  "+"COMBO4:" + " "+ "X"+ " " +  contadorpelicula4 + " "+
  " " + comboprecio4 + " " + "OF" + "-" + descuentoboletas*comboprecio4 + "  " +  " " +"TOTAL" + " " + resultado2  + " " + "<br>"
  + " su puntos totales son "  + puntostotales
}








/*
//sistema de puntos

//aca hay un error que hay que corregir es necesario que los puntos no se sumen hasta que se de clic en confirmar.
//confirmar la compra que se tenga en cuenta el contador que se imprimir en la pantalla en el caso de las peliculas.
//en caso de que se retire un combo crear un boton que se llame limpiar y sumar todo con un sitch al contador general como se resolvio el ejemplo de la loteria.
var puntos = 3000  //cuando se haga la base de datos pues esto se incializa en cero. hay que crear una senccion de pagos.
var nombreusuario = "pepito"
var infoprecios= document.getElementById("bienvenido")

//infoprecios.innerHTML = "BIENVENIDO" + "  "+ nombreusuario + "  " + puntos


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
        


//confirmar pedido peliculas que redirige a comidas.
var confirmarpelicula = document.getElementById("confirmarpelicula");


//botones peliculas y precios
var pelicula1 = document.getElementById("botonpelicula1");
var pelicula2 = document.getElementById("botonpelicula2");
var pelicula3 = document.getElementById("botonpelicula3");
var pelicula4 = document.getElementById("botonpelicula4");

var contadorpelicula1 =  1//document.getElementById("contadorpelicula1").textContent;
var contadorpelicula2 = 1 //document.getElementById("contadorpelicula2").textContent;
var contadorpelicula3 = 1 //document.getElementById("contadorpelicula3").textContent;
var contadorpelicula4 = 1  //document.getElementById("contadorpelicula4").textContent;


var pelicula1precio = 15000;
var pelicula2precio = 15000;
var combo3precio = 15000;
var comboprecio4 = 15000;
var pelicula5precio = 15000;
var pelicula6precio = 15000;
var resultado2 = 0;


//los botones de las sillas generarlos automaticamente investigar si en sass se puede generar automaticamente

var sillaf1c1 = document.getElementById("silla1.1");
var sillaf1c2 = document.getElementById("silla1.2");
var sillaf1c3 = document.getElementById("silla1.3");
var sillaf1c4 = document.getElementById("silla1.4");
var tarjeta = document.getElementById("tarjeta");
var tipotarjeta = tarjeta.options[tarjeta.selectedIndex].value;
var a = "textosilla"
var resultado = 0
var combo1precio = 10000;
var combo2precio = 20000;
var combo3precio = 30000;
var combo4precio = 10000;
var combo5precio = 20000;
var combo6precio = 30000;
//-------------------- variables de los combos------------------------


infocombo1 = document.getElementById("combo1")
infocombo1.innerHTML = "COMBO1" +"<br>"+ combo1precio + " " +descuentoalimentos*100 + "%OF"
infocombo2 = document.getElementById("combo2")
infocombo2.innerHTML = "COMBO2" +"<br>"+ combo2precio + " " +descuentoalimentos*100 + "%OF"
infocombo3 = document.getElementById("combo3")
infocombo3.innerHTML = "COMBO3" +"<br>"+ combo3precio + " " +descuentoalimentos*100 + "%OF"
infocombo4 = document.getElementById("combo4")
infocombo4.innerHTML = "COMBO4" +"<br>"+ combo4precio + " " +descuentoalimentos*100 + "%OF"


function cambiarprecios()
{

infocombo1 = document.getElementById("combo1")
infocombo1.innerHTML = "COMBO1" +"<br>"+ combo1precio + " " +descuentoalimentos*100 + "%OF"
infocombo2 = document.getElementById("combo2")
infocombo2.innerHTML = "COMBO2" +"<br>"+ combo2precio + " " +descuentoalimentos*100 + "%OF"
infocombo3 = document.getElementById("combo3")
infocombo3.innerHTML = "COMBO3" +"<br>"+ combo3precio + " " +descuentoalimentos*100 + "%OF"
infocombo4 = document.getElementById("combo4")
infocombo4.innerHTML = "COMBO4" +"<br>"+ combo4precio + " " +descuentoalimentos*100 + "%OF"


}

//-------------------- variables de cine------------------------


infocombo1 = document.getElementById("pelicula1")
infocombo1.innerHTML = "PELICULA1" +"<br>"+ pelicula1precio + " " + descuentoboletas*100 + "%OF"
infocombo2 = document.getElementById("pelicula2")
infocombo2.innerHTML = "PELICULA2" +"<br>"+ pelicula2precio + " " + descuentoboletas*100 + "%OF"
infocombo3 = document.getElementById("pelicula3")
infocombo3.innerHTML = "PELICULA3" +"<br>"+ combo3precio + " " + descuentoboletas*100 + "%OF"
infocombo4 = document.getElementById("pelicula4")
infocombo4.innerHTML = "PELICULA4" +"<br>"+ comboprecio4 + " " + descuentoboletas*100 + "%OF"


function cambiarpreciospeliculas()
{


  infocombo1 = document.getElementById("pelicula1")
  infocombo1.innerHTML = "PELICULA1" +"<br>"+ pelicula1precio + " " + descuentoboletas*100 + "%OF"
  infocombo2 = document.getElementById("pelicula2")
  infocombo2.innerHTML = "PELICULA2" +"<br>"+ pelicula2precio + " " + descuentoboletas*100 + "%OF"
  infocombo3 = document.getElementById("pelicula3")
  infocombo3.innerHTML = "PELICULA3" +"<br>"+ combo3precio + " " + descuentoboletas*100 + "%OF"
  infocombo4 = document.getElementById("pelicula4")
  infocombo4.innerHTML = "PELICULA4" +"<br>"+ comboprecio4 + " " + descuentoboletas*100 + "%OF"
}
//-------------------cambiar puntos-------



function cambiarpreciospuntos()
{
  infoprecios= document.getElementById("Bienvenido")
  infoprecios.innerHTML = "HOLA" + " " + nombreusuario + "  "  + "PUNTOS :  " +  puntos
}

//----------------------------------------------boton confirmar pelicula
confirmarpelicula.onclick = function(e) {
 
  window.location.href="comida.html"
    

}
      


//-------------------------botoncategoria------------------------------

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
        cambiarprecios();
        pelicula1precio = 13000;
        pelicula2precio = 13000;
        combo3precio = 13000;
        comboprecio4 = 13000;
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
        cambiarprecios();
        pelicula1precio = 12000;
        pelicula2precio = 12000;
        combo3precio = 12000;
        comboprecio4 = 12000;
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
        cambiarprecios();
        pelicula1precio = 11000;
        pelicula2precio = 11000;
        combo3precio = 11000;
        comboprecio4 = 11000;
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





 //var c = document.getElementById("tarjeta").textContent
 //alert(tipotarjeta)




//----------------------botones combos---------------------------

sillaf1c1.onclick = function(e) {

  var contenido = document.getElementById("textosilla").textContent + "<br>"
  //var combo1precio = 10000
  resultado += combo1precio - descuentoalimentos*combo1precio

  //alert(resultado)
  document.getElementById("textosilla").innerHTML = contenido + "<br>"+" COMBO1:" + " " + combo1precio + "<br>" + "OF" + "-" + descuentoalimentos*combo1precio
  document.getElementById("totalcombos").innerHTML = "TOTAL" + " " + resultado
  puntos += combo1puntos
  cambiarpreciospuntos();

}

sillaf1c2.onclick = function(e) {
  var contenido = document.getElementById("textosilla").textContent + "<br>"
  //var combo2precio = 20000
  resultado += combo2precio - descuentoalimentos*combo2precio
  document.getElementById("textosilla").innerHTML = contenido + "<br>"+"COMBO2:" + " " + combo2precio + "<br>" + "OF" + "-" + descuentoalimentos*combo2precio
  document.getElementById("totalcombos").innerHTML = "TOTAL" + " " + resultado
  puntos += combo2puntos 
  cambiarpreciospuntos();

}

sillaf1c3.onclick = function(e) {
  var contenido = document.getElementById("textosilla").textContent + "<br>"
 // var combo3precio = 30000
  resultado += combo3precio - descuentoalimentos*combo3precio
  document.getElementById("textosilla").innerHTML = contenido + "<br>"+"COMBO3:" + " " + combo3precio + "<br>" + "OF" + "-" + descuentoalimentos*combo3precio
  document.getElementById("totalcombos").innerHTML = "TOTAL" + " " + resultado

  puntos += combo3puntos 
  cambiarpreciospuntos();

}

sillaf1c4.onclick = function(e) {
  var contenido = document.getElementById("textosilla").textContent + "<br>"
  //var combo4precio = 40000
  resultado += combo4precio

  document.getElementById("textosilla").innerHTML = contenido + "<br>"+"COMBO4:" +" " +  combo4precio + "<br>" + "OF" + "-" + descuentoalimentos*combo3precio
  document.getElementById("totalcombos").innerHTML = "TOTAL" + " " + resultado
  puntos += combo4puntos 
  cambiarpreciospuntos();

}

//------------------------------- botones peliculas---------------------------------


//-------------------------- este es el boton de la pelicula 1----------------------------
pelicula1.onclick = function(e) {
  var contadorpelicula1 =  document.getElementById("contadorpelicula1").value;
  alert(contadorpelicula1)

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
  document.getElementById("textopelicula").innerHTML = "ESTE ES EL PEDIDO" + "<br>"+" PELICULA1:" + " "+ "X"+ contadorpelicula1 + " "+
  "<br>" + pelicula1precio + "<br>" + "OF" + "-" + descuentoboletas*pelicula1precio
  
  //document.getElementById("totalpeliculas").innerHTML = "cantidad de tikets"+"  " + contadopelicula1 + " " +  "TOTAL" + " " + resultado2

  document.getElementById("totalpeliculas").innerHTML =  "TOTAL" + " " + resultado2

  puntos += boletas
  console.log(puntos)
  cambiarpreciospuntos();


  }

//-------------------------- este es el boton de la pelicula 2----------------------------

pelicula2.onclick = function(e) {
 

  var contadorpelicula2 =  document.getElementById("contadorpelicula2").value;
  alert(contadorpelicula2)

  var contenido = " "
  //var combo1precio = 10000
  if(contadorpelicula2>1)
  {
    resultado2 = pelicula2precio*contadorpelicula2-descuentoboletas*pelicula2precio
  }
  else
  {
  contadorpelicula2 = 1;
  resultado2 = pelicula2precio*contadorpelicula2-descuentoboletas*pelicula2precio
  }

  //resultado2 = pelicula1precio*contadorpelicula1
  

  //alert(resultado)
  document.getElementById("textopelicula").innerHTML = "ESTE ES EL PEDIDO" + "<br>"+" PELICULA2:" + " "+ "X"+ contadorpelicula2 + " "+
  "<br>" + pelicula2precio + "<br>"  + "OF" + "-" + descuentoboletas*pelicula2precio
  
  //document.getElementById("totalpeliculas").innerHTML = "cantidad de tikets"+"  " + contadopelicula1 + " " +  "TOTAL" + " " + resultado2

  document.getElementById("totalpeliculas").innerHTML =  "TOTAL" + " " + resultado2
  puntos += boletas
  cambiarpreciospuntos();

}

pelicula3.onclick = function(e) {
  var contadorpelicula3 =  document.getElementById("contadorpelicula3").value;
  //alert(contadorpelicula3)

  var contenido = " "
  //var combo1precio = 10000
  if(contadorpelicula3>1)
  {
    resultado2 = combo3precio*contadorpelicula3 -descuentoboletas*combo3precio
  }
  else
  {
  contadorpelicula3 = 1;
  resultado2 = combo3precio*contadorpelicula3 -descuentoboletas*combo3precio
  }

  //resultado2 = pelicula1precio*contadorpelicula1
  

  //alert(resultado)
  document.getElementById("textopelicula").innerHTML = "ESTE ES EL PEDIDO" + "<br>"+" PELICULA3:" + " "+ "X"+ contadorpelicula3 + " "+
  "<br>" + combo3precio + "<br>"  + "OF" + "-" + descuentoboletas*combo3precio
  
  //document.getElementById("totalpeliculas").innerHTML = "cantidad de tikets"+"  " + contadopelicula1 + " " +  "TOTAL" + " " + resultado2

  document.getElementById("totalpeliculas").innerHTML =  "TOTAL" + " " + resultado2

  puntos += boletas
  cambiarpreciospuntos();
  console.log(puntos)


}


//---------------------- boton pelicula 4-----------------------------------------------------------------
pelicula4.onclick = function(e) {
  var contadorpelicula4 =  document.getElementById("contadorpelicula4").value;
 // alert(contadorpelicula4)

  var contenido = " "
  //var combo1precio = 10000
  if(contadorpelicula4>1)
  {
    resultado2 = comboprecio4*contadorpelicula4 - descuentoboletas*comboprecio4
  }
  else
  {
  contadorpelicula4 = 1;
  resultado2 = comboprecio4*contadorpelicula4 - descuentoboletas*comboprecio4
  }

  //resultado2 = pelicula1precio*contadorpelicula1
  

  //alert(resultado)
  document.getElementById("textopelicula").innerHTML = "ESTE ES EL PEDIDO" + "<br>"+" PELICULA3:" + " "+ "X"+ contadorpelicula4 + " "+
  "<br>" + comboprecio4 + "<br>" + "OF" + "-" + descuentoboletas*comboprecio4
  
  //document.getElementById("totalpeliculas").innerHTML = "cantidad de tikets"+"  " + contadopelicula1 + " " +  "TOTAL" + " " + resultado2

  document.getElementById("totalpeliculas").innerHTML =  "TOTAL" + " " + resultado2
  puntos += boletas
  cambiarpreciospuntos();
  

}

*/





