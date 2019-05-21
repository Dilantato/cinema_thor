
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
      location.href='index-ll.html';
       
      
      break;
      case "platino":
      
        location.href='index-hombre1-ll.html';
        
      

      
      break;
      case "vip":
      
        location.href='index-mujer1-ll.html';
        
      
      break;

      default:
        
      break;
    
  }
  
 
}



