
/*
* Cambia el archivo CSS
*/
function cambiarArchivoCss(archivo) {
document.getElementById('cssArchivo').href=archivo;
localStorage.estilos=archivo;
}

/*
* Funcion para cambiar el tamaño del texto
*/
function zoomText(Action,Element){
    var obj=document.getElementById(Element); 
    var max = 120
    var min = 80 

    if (obj.style.fontSize==""){ 
        obj.style.fontSize="100%"; 
    }

    actual=parseInt(obj.style.fontSize); 
    increment=10;

    //if(Action=="restore" ){ 
    //    obj.style.fontSize="97.6%" 
    //}

    if( Action=="increase" && ((actual+increment) <= max )){
        value=actual+increment;
        obj.style.fontSize=value+"%"
    }

    if( Action=="decrease" && ((actual+increment) >= min )){
        value=actual-increment;
        obj.style.fontSize=value+"%"
    }
} 


/*Codigo para imprimir sólo una parte*/

function imprSelec(muestra)
{var ficha=document.getElementById(muestra);var ventimp=window.open(' ','popimpr');ventimp.document.write(ficha.innerHTML);ventimp.document.close();ventimp.print();ventimp.close();};