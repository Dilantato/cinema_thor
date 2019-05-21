
//-------------SLIDER CON BOTONES

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

//-------------SLIDER CON BOTONES

//Para ocultar la ventana de los cookies
function ocultar(){
  document.getElementById('CookiesPrincipal').style.display = 'none';
}

//Para ocultar la ventana de los cookies


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

