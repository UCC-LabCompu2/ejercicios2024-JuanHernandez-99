/**
 * Conversion de unidades ,de metros ,yardas , pies y pulgadas.
 * @method cambiarunidades
 * @param {string} id - el ide los metros ,yardas,pies y pulgadas'
 * @param {number} valor- El valor de los inputs de los metros ,yardas,pies y pulgadas'
 * @return
 */
cambiarUnidades = (id,valor) => {
    let met, pul, pie, yar;

    if(valor.includes(",")){
        valor = valor.replace(",", ".")
    }
    if(isNaN(valor)){
        alert("El valor ingresado es incorrecto");
        met = "";
        pul = "";
        pie = "";
        yar = "";
    }else if(id==="metro"){
        met = valor;
        pul = valor*39.3701;
        pie = valor*3.28084;
        yar = valor*1.09361;
    }else if(id==="pulgada"){
        pul = valor;
        met = valor*0.0254;
        pie = valor*0.083;
        yar = valor*0.027;
    }else if(id==="pie"){
        pie = valor;
        met = valor*0.3048;
        pul = valor*12 ;
        yar = valor*0.33;
    }else if(id==="yarda"){
        yar = valor;
        pul = valor*36;
        met = valor*0.9144 ;
        pie = valor*3;
    }
    document.lasUnidades.unid_metro.value = Math.round(met*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pul*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie);
    document.lasUnidades.unid_yarda.value = Math.round(yar);
}
function convertiGR(id)
{
    var grad, rad;
    if (id == "grados") {
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI) / 180;
    }
     else if(id=="radianes"){
     rad=document.getElementById("radianes".value)
    grad= (rad*180)/Math.PI;
    }
    document.lasUnidades.unid_metro.value = Math.round(met*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pul*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie);
    document.lasUnidades.unid_yarda.value = Math.round(yar);

}
function mostrar_ocultar(valorMO){
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display= 'block';
    }else if (valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display= 'none';
    }
}

function calcularsuma(){
var num1, num2;
num1=Number(document.getElementsByName('sum_num1')[0].value);
num2=document.getElementsByName('sum_num2')[0].value;
document.getElementsByName("sum_total")[0].innerHTML= num1 +Number(num2);

    function calcularresta(){

        var num1,num2;

        num1=Number (document.getElementsByName("res_num1")[0].value);
        num2=document.getElementsByName("res_num2")[0].value;
        document.getElementsByName("res_total")[0].value = num1 - Number (num2);

    }

    function calcularmultiplicacion(){

        var num1,num2;

        num1=Number (document.getElementsByName("mul_num1")[0].value);
        num2=document.getElementsByName("mul_num2")[0].value;
        document.getElementsByName("mul_total")[0].value = num1 * Number (num2);

    }

    function calculardivision(){

        var num1,num2;

        num1=Number (document.getElementsByName("div_num1")[0].value);
        num2=document.getElementsByName("div_num2")[0].value;
        document.getElementsByName("div_total")[0].value = num1 / Number (num2);

    }


}
function cargarWeb(){
    var cant, unidad,urlComp;

    cant= document.getElementById("distancia").value;
    unidad= document.getElementsByName("unidades")[0].value;
    urlComp= "segundaWeb.html"+ cant +"#";
    window.open(urlComp)
}

function cargarResultado(){
    var urlComp, can, un;

    urlComp=window.location.href.split("/")[5];
    console.log(urlComp);
    can=urlComp.split("#")[1];
    un=urlComp.split("#")[2];

    document.getElementById("dist").value = can + ""+ un;
}

function guardarLocalStorage(){
    let distancia, unidad;
    distancia= document.getElementById("distancia").value;
    unidad= document.getElementsByName("unidades")[0].value;
    localStorage.setItem("distanciaLS",distancia);
    localStorage.setItem("unidadesLS",unidad);
    window.open('2_web.html');



 function cargarLocalStorage(){
     let cant,un;
     cant=localStorage.getItem("distanciaLS");
     un =localStorage.getItem("unidadesLS");


    }
}

function dibujarcircuad(){
    var canvas=document.getElementById("myCanvas");
    var ctx= canvas.getContext("2d");
    var ymax=canvas.height;
    var xmax=canvas.width;
    var margen=5;
    ctx.fillStyle="#c75415";
    ctx.fillRect(0+margen, ymax-0-margen ,40,40);

    ctx.arc(xmax/2,ymax/2,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle="#333899";
}
var bandera;
function dibujar(evento){
   var canvas= document.getElementById("canvasAdibujar");
   var ctx= canvas.getContext("2d");

   var posX =event.clientX;
    var posY =event.clientY;
    console.log(posX,posY);

    canvas.onmousedown =function (){bandera=true};
    canvas.onmouseup =function (){bandera=false};

    if (bandera){


        ctx.fillRect(posX,posY,5,5);
        ctx.fill


    }
}

function limpiarCanvas(){
    var canvas= document.getElementById("canvasAdibujar");
    var ctx= canvas.getContext("2d");
    canvas.width=canvas.width;

}
let dibujarCuadriculado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.font="10pt Verdana";
    ctx.fillStyle = "blue";

    console.log("Se comenzara a dibujar!!!");
    const xMax = canvas.width;
    const yMax = canvas.height;

    let paso = 20;
    let ejeX=-15;
    let ejeY=-25;
    let despl = 2;

    //Dibujar Líneas Horizontales

    for(let i=0;i<yMax;i+=paso){
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(xMax, i);
        ctx.strokeStyle = "#a19797"
        ctx.stroke();
        ctx.fillText(ejeX, xMax/2+despl, i+4);
        ejeX +=1;
        ctx.closePath();
    }

    //Dibujar Líneas Verticales
    for(let i=0;i<xMax;i+=paso){
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, yMax);
        ctx.strokeStyle = "#1b73f8"
        ctx.fillText(ejeY, i, yMax/2 - 6);
        ejeY +=1;
        ctx.stroke();
        ctx.closePath();
    }

    //Eje X
    ctx.beginPath();
    ctx.moveTo(0, yMax/2);
    ctx.lineTo(xMax, yMax/2);
    ctx.strokeStyle = "#830303"
    ctx.stroke();
    ctx.closePath();

    //Eje Y
    ctx.beginPath();
    ctx.moveTo(xMax/2, 0);
    ctx.lineTo(xMax/2, yMax);
    ctx.strokeStyle = "#830303"
    ctx.stroke();
    ctx.closePath();



}
function dibujarImagen(posX,posY) {
    var canvas=document.getElementById("myCanvas");
    var ctx=canvas.getContext("2d");
    console.log(posX,posY);
    var img= new Image();
    img.src= "images/auto.png";

    canvas.width = canvas.width;

    img.onload= function (){
        ctx.drawImage(img,posX,posY);
    }

}
var x=0;
var dx=2;
function animarAuto(){
    var canvas=document.getElementById("myCanvas");
    var ctx=canvas.getContext("2d");
    console.log(posX,posY);

    canvas.width = canvas.width;

    var img= new Image();
    img.src= "images/auto.png";



    img.onload= function (){
        ctx.drawImage(img,x, 100);

    }
    if (x>canvas.width){
        x=0;
    }
    x+=dx;
}


var x=0;
var dx=2;
let animarAuto = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);
    }

    if(x>canvas.width){
        x=0;
    }
    x+=dx;
}

var intervalId;
let detenerAuto = () => {
    console.log("Se detuvo el auto")
    clearInterval(intervalId); // Detener la animación
}


let comenzarAnimacion = () => {
    console.log("Se llamo a comenzar animacion")
    intervalId = setInterval(animarAuto, 10);
    setTimeout(detenerAuto, 6000);
}

var x=0;
var dx=2;
let animarAuto = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);
        requestAnimationFrame(animarAuto);
    }

    if(x>canvas.width){
        x=0;
    }
    x+=dx;
}

let animarNuevo = () => {
    requestAnimationFrame(animarAuto);
}