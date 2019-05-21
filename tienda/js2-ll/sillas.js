
var tarjeta = document.getElementById("tarjeta");
var tipotarjeta = tarjeta.options[tarjeta.selectedIndex].value;


//-------------------------botoncategoria------------------------------

//---------------------------este es el boton para elegir la tarjeta--------------------------------//
tarjeta.onclick = function(e) {
 
   setTimeout(5000,elegir())
     

}

function elegir()
{
  var tipotarjeta = tarjeta.options[tarjeta.selectedIndex].value;

    switch (tipotarjeta) {

     
      case "bronce":
      location.href='index.html';
       
      
      break;
      case "platino":
      
        location.href='index-hombres1.html';
        
      

      
      break;
      case "vip":
      
        location.href='index-mujeres1.html';
        
      
      break;

      default:
        
      break;
    
  }
  
 
}



