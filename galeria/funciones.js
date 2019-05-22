
var imagenes=[{"id":1,"imagen":"https://robohash.org/quiomnisdolor.png?size=600x400&set=set1"},
{"id":2,"imagen":"https://robohash.org/eligendietsed.png?size=600x400&set=set1"},
{"id":3,"imagen":"https://robohash.org/rerumsintexplicabo.png?size=600x400&set=set1"},
{"id":4,"imagen":"https://robohash.org/expeditadoloremet.png?size=600x400&set=set1"},
{"id":5,"imagen":"https://robohash.org/fugamagniut.png?size=600x400&set=set1"},
{"id":6,"imagen":"https://robohash.org/aliasnemodeleniti.png?size=600x400&set=set1"},
{"id":7,"imagen":"https://robohash.org/quoametomnis.png?size=600x400&set=set1"},
{"id":8,"imagen":"https://robohash.org/voluptatemipsamvoluptates.png?size=600x400&set=set1"},
{"id":9,"imagen":"https://robohash.org/fugaconsequunturet.png?size=600x400&set=set1"},
{"id":10,"imagen":"https://robohash.org/quisabconsequatur.png?size=600x400&set=set1"}];

var posiciones = ['1','2','3','4','5','6','7','8','9','10'];
aleatorio();
var cargar=0;

 function siguiente (){
       //console.info(foto[arregloImagen[1]]);
        if(cargar < 5){
         cargar++;
       var foto1 = window.document.getElementById("foto");
        foto1.src=imagenes[posiciones[cargar]].imagen; 
    }
     if(cargar==5){
       var atras= window.document.getElementById("sig");
        atras.disable=true;
    } 
}
//funcion que selecciona las imagenes de mamera randomica
function ini (){
    aleatorio();
    var foto1 = window.document.getElementById("foto");
   foto1.src=imagenes[posiciones[1]].imagen;
}
//funcion que controla las imagenes de forma decendente
function anterior(){
           console.info(imagenes[posiciones[1]]);
    if(cargar>1){
         cargar--;
       var foto1 = window.document.getElementById("foto");
        foto1.src=imagenes[posiciones[cargar]].imagen;
    }
    if(cargar==1){
         var delante= window.document.getElementById("ant");
            delante.disable=true;
        } 
}
    
//funcion que genera numeros de forma randomica para pocisionar imagenes
function aleatorio(){
    var i,j,k;
    for (i = posiciones.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = posiciones[i - 1];
        posiciones[i - 1] = posiciones[j];
        posiciones[j] = k;
    }
   
    
}