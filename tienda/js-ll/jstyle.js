

var  cambiar1 = document.getElementById("contImg")

var boton1 = document.getElementById("boton1-1")
boton1.onclick= function(e){
   // alert("hola")
  //  cambiar1.style.marginLeft="0px"
    

var radiobtn= document.getElementById("boton1");
radiobtn.checked = true;

boton1.style.background="white";
boton2.style.backgroundColor="blue";
boton3.style.backgroundColor="blue";
}
var boton2 = document.getElementById("boton1-2")
boton2.onclick= function(e){
   // alert("hola")
  //  cambiar1.style.marginLeft="0px"
    

var radiobtn= document.getElementById("boton2");
radiobtn.checked = true;


boton1.style.background="blue";
boton2.style.backgroundColor="white";
boton3.style.backgroundColor="blue";
}

var boton3 = document.getElementById("boton1-3")
boton3.onclick= function(e){
   // alert("hola")
  //  cambiar1.style.marginLeft="0px"
    

var radiobtn= document.getElementById("boton3");
radiobtn.checked = true;


boton1.style.background="blue";
boton2.style.backgroundColor="blue";
boton3.style.backgroundColor="white";

}



