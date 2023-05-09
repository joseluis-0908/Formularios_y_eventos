
var texto=document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoporclicK);

var d=document.getElementById("dibujito");//metodo del documento que trae un elemento a traves de su id pasando el parametro ejemplo "dibujito"
var ancho=d.width;
alert(ancho);
var lienzo = d.getContext("2d"); //En el getContext un metodo del canvas con el contexto 2d y tambien 3d

    function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
    {
        lienzo.beginPath(); 
        lienzo.strokeStyle = color; 
        lienzo.moveTo(xinicial,yinicial);  
        lienzo.lineTo(xfinal,yfinal); 
        lienzo.stroke(); 
        lienzo.closePath();
     }
    
    function dibujoporclicK()
    {
     var lineas= parseInt(texto.value);
     var l=300;
     var l =0; 
     var yi, xf;
     var colorcito = "green";
     var espacio =ancho/lineas;
     
    for(l=0;l<lineas;l++)
    {
    yi=espacio*l;
    xf=espacio*(l+1);
    dibujarLinea(colorcito,0,yi,xf,300);
    console.log("linea" + l);//nos ayude a depurar con console.log
    }
 
    dibujarLinea(colorcito,1,1,1,299);
    dibujarLinea(colorcito,1,299,299,299);
    }