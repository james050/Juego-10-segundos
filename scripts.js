/************************************************************************/
/*USO DE UN TEMPORIZADOR FÍSICO PARA PERSONALIZAR EL JUEGO*/
/************************************************************************/
function Temporizador(id , inicio, final){
    this.id = id;
    this.inicio = inicio;
    this.final = final;
    this.contador = this.inicio;

    this.conteoSegundos = function(){
        if(this.contador == this.final){ 
            this.conteoSegundos = null;
            return;
        }
        document.getElementById(this.id).innerHTML=this.contador--;
        setTimeout(this.conteoSegundos.bind(this), 1000);
    };
}
var temporizador = new Temporizador('temporizador', 10, 0);
temporizador.conteoSegundos();

/***********************************************************************************************************************************************************************************************************************/
/************************************************************************/
/*VALIDACIONES PALABRA 1*/
/************************************************************************/
function validacion(){ /*Function para validar que la palabra ingresada si sea la correcta*/
    
    var palabra1 = document.getElementById('palabraUno'); /*Se crea una variable palabra 1, la cúal va a ser igual a palabraUno que esta en el input del html*/

    var palabra1 = (palabra1.value); /*palabra1 va ser igual al valor que el usuario ingrese por teclado*/
    
    if (palabra1 == "SOL"){ /*Se crea el condicional para palabra1 y se determina que la palabra este. con mayúscula, minúscula o tilde y así tal cual debe digitalizarlo el usuario*/
        alert('¡Excelent! \n ¡Superaste el nivel 1!'); /*Mensaje de nivel superado*/
        setTimeout('location.reload()', 3000);         /*Después de haber ganado pasan 3 segundos para que el juego vuelva a reiniciarse*/  
        document.getElementById('superado1').innerHTML = "¡Superado Nivel 1!";/*Mientras transcurre el tiempo de los 3 segundos se muestra en el label al usuario que ha superado el nivel*/
        
    }else{
        alert('¡Hay una palabra mal escrita! \n ¡Rápido inténtalo de nuevo!');/*Si digitaliza mal alguna palabra aparece un alert indicando este acontecimiento*/
        document.getElementById('palabraUno').focus(); /*Se hace enfasís en el recuadro input donde el usuario esta digitando la palabra*/
        
        
    }
}
/************************************************************************/
/*USO DE JQUERY PARA MOSTRAR U OCULTAR LA PALABRA 1*/
/************************************************************************/
$(".Mostrar_Ocultar_Palabra").show(); /*lo primero a suceder en la página es mostrar las tarjetas que tengan la clase .Mostrar_Ocultar_Palabra*/ 

function mostrarUocultarPalabra(){ /*Con esta function  se determina si se muestra u oculta la etiqueta que tenga la clase .Mostrar_Ocultar_Palabra*/
    let text = "";     /*Se crea una variable local llamada text*/

    if ($("#myButton").text() === "Show") { /*Se crea el condicional que se le asigna con el selector de jquery #myButton es igual a Show entonces muestre la etiqueta que contiene la clase .Mostrar_Ocultar_Palabra*/      
       $(".Mostrar_Ocultar_Palabra").show();
       text = "Show";

    }else{
        $(".Mostrar_Ocultar_Palabra").hide();/*Si no la etiqueta que contiene la clase .Mostrar_Ocultar_Palabra se va a ocultar*/
        setTimeout('location.reload()', 10000); /*Tiempo de 10 segundos después de este tiempo la página se recarga y vuelve a mostrarse el elemento oculto*/

       
    }
    $("#myButton").html(text);
   
}
/***********************************************************************************************************************************************************************************************************************/
/************************************************************************/
/*VALIDACIONES PALABRA 2*/
/************************************************************************/
function validacion2(){

    var palabra2 = document.getElementById('palabraDos');

    var palabra2= (palabra2.value);

    if (palabra2 == "MaRTE"){
        alert('¡Excelent! \n ¡Superaste el nivel 2!');
        setTimeout('location.reload()', 3000);
        document.getElementById('superado2').innerHTML = "¡Superado Nivel 2!";
        
    }else{
        alert('¡Hay una palabra mal escrita! \n ¡Rápido inténtalo de nuevo!');
        document.getElementById('palabraDos').focus();
        
    }
}
/************************************************************************/
/*USO DE JQUERY PARA MOSTRAR U OCULTAR LA PALABRA 2*/
/************************************************************************/
$(".Mostrar_Ocultar_Palabra2").show(); //lo primero a suceder

function mostrarUocultarPalabra2(){
    let text = "";

    if ($("#myButton").text() === "Show") {
        $(".Mostrar_Ocultar_Palabra2").show();
        text = "Show";

    }else{
        $(".Mostrar_Ocultar_Palabra2").hide();
        text = "Hide";
        setTimeout('location.reload()', 10000);
        
       
    }
    $("#myButton").html(text);
   
}
/***********************************************************************************************************************************************************************************************************************/
/************************************************************************/
/*VALIDACIONES PALABRA 3*/
/************************************************************************/
function validacion3(){

    var palabra3 = document.getElementById('palabraTres');

    var palabra3= (palabra3.value);

    if (palabra3 == "TIerRA"){
        alert('¡Excelent! \n ¡Superaste el nivel 3!');
        setTimeout('location.reload()', 3000);
        document.getElementById('superado3').innerHTML = "¡Superado Nivel 3!";
        
    }else{
        alert('¡Hay una palabra mal escrita! \n ¡Rápido inténtalo de nuevo!');
        document.getElementById('palabraTres').focus();
        
    }
}
/************************************************************************/
/*USO DE JQUERY PARA MOSTRAR U OCULTAR LA PALABRA 3*/
/************************************************************************/
$(".Mostrar_Ocultar_Palabra3").show(); //lo primero a suceder

function mostrarUocultarPalabra3(){
    let text = "";

    if ($("#myButton").text() === "Show") {
        $(".Mostrar_Ocultar_Palabra3").show();
        text = "hide form";

    }else{
        $(".Mostrar_Ocultar_Palabra3").hide();
        text = "hide";
        setTimeout('location.reload()', 10000);
        
       
    }
    $("#myButton").html(text);
   
}
/***********************************************************************************************************************************************************************************************************************/
/************************************************************************/
/*VALIDACIONES PALABRA 4*/
/************************************************************************/
function validacion4(){

    var palabra4 = document.getElementById('palabraCuatro');

    var palabra4= (palabra4.value);

    if (palabra4 == "vENuS"){
        alert('¡Excelent! \n ¡Superaste el nivel 4!');
        setTimeout('location.reload()', 3000);
        document.getElementById('superado4').innerHTML = "¡Superado Nivel 4!";
        
    }else{
        alert('¡Hay una palabra mal escrita! \n ¡Rápido inténtalo de nuevo!');
        document.getElementById('palabraCuatro').focus();
        
    }
}
/************************************************************************/
/*USO DE JQUERY PARA MOSTRAR U OCULTAR LA PALABRA 4*/
/************************************************************************/
$(".Mostrar_Ocultar_Palabra4").show(); //lo primero a suceder

function mostrarUocultarPalabra4(){
    let text = "";

    if ($("#myButton").text() === "Show") {
        $(".Mostrar_Ocultar_Palabra4").show();
        text = "Show";

    }else{
        $(".Mostrar_Ocultar_Palabra4").hide();
        text = "hide";
        setTimeout('location.reload()', 10000);
        
       
    }
    $("#myButton").html(text);
   
}
/***********************************************************************************************************************************************************************************************************************/
/************************************************************************/
/*VALIDACIONES PALABRA 5*/
/************************************************************************/
function validacion5(){

    var palabra5 = document.getElementById('palabraCinco');

    var palabra5= (palabra5.value);

    if (palabra5 == "jÚpItEr"){
        alert('¡Excelent! \n ¡Superaste el nivel 5!');
        setTimeout('location.reload()', 3000);
        document.getElementById('superado5').innerHTML = "¡Superado Nivel 5!";
        
    }else{
        alert('¡Hay una palabra mal escrita! \n ¡Rápido inténtalo de nuevo!');
        document.getElementById('palabraCinco').focus();
        
    }
}
/************************************************************************/
/*USO DE JQUERY PARA MOSTRAR U OCULTAR LA PALABRA 5*/
/************************************************************************/
$(".Mostrar_Ocultar_Palabra5").show(); //lo primero a suceder

function mostrarUocultarPalabra5(){
    let text = "";

    if ($("#myButton").text() === "Show") {
        $(".Mostrar_Ocultar_Palabra5").show();
        text = "show";

    }else{
        $(".Mostrar_Ocultar_Palabra5").hide();
        text = "hide";
        setTimeout('location.reload()', 10000);
        
       
    }
    $("#myButton").html(text);
   
}
/***********************************************************************************************************************************************************************************************************************/



