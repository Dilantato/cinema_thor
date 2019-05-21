function validar()
{
   var usu=document.getElementById("usuario").value;
   var cla=document.getElementById("clave").value;
   if (usu.length==0 || cla.length==0)
   {
     alert("Algun valor requerido no está especificado");
     return false;
   }
   else
     return true;
}//ocultar login
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


//ocultar login