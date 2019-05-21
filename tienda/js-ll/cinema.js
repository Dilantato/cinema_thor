

//Para ocultar la ventana de los cookies
function ocultar(){
  document.getElementById('CookiesPrincipal').style.display = 'none';
}

//ocultar login
let ubicacionPrincipal  = window.pageYOffset;

window.onscroll = function(){
  let Desplazamiento_Actual = window.pageYOffset; 

  if(ubicacionPrincipal >= Desplazamiento_Actual){
    document.getElementById('cinemaLogin-ll').style.top = '0';
  }
  else {
    document.getElementById('cinemaLogin-ll').style.top='-400px';
  }
  ubicacionPrincipal= Desplazamiento_Actual;
}


//ocultar login