var btnConocenos = document.getElementById("js-bottom");
   btnConocenos.addEventListener("click",muestra);

function muestra() {
      document.getElementById("contenedorGeneral").style.display ="block";
   }


function escribe(contenedor,texto,intervalo){
      longitud = texto.length;
      cnt = document.getElementById(contenedor);
         var i=0;

   timer = setInterval(function(){
         cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "_";
         if(i > longitud){
            clearInterval(timer);
               cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
         return true} 
      else {
         i++;
      }},intervalo);
};
var texto="Somos ProtectDogs&Cats guardianes de mascotas que quieren formar parte de tu familia ...    "
   escribe("js-flex-container-presentation",texto,125);  
