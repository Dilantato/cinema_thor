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


//ocultar login