/**
 * Conversion de unidades ,de metros ,yardas , pies y pulgadas.
 * @method cambiarunidades
 * @param {string} id - el ide los metros ,yardas,pies y pulgadas'
 * @param {number} valor- El valor de los inputs de los metros ,yardas,pies y pulgadas'
 * @return
 */
convertirUnidades = (id,valor) => {
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
    document.Lasunidades.unid_metro.value = 0.0254 * valor;
    document.Lasunidades.unid_pie.value = 0.083 * valor;
    document.Lasunidades.unid_yarda.value = 0.027 * valor;

} else if (id == "pie") {
    document.Lasunidades.unid_metro.value = 0.3048 * valor;
    document.Lasunidades.unid_pulgada.value = 12 * valor;
    document.Lasunidades.unid_yarda.value = 0.33 * valor;
} else if (id == "yarda") {
    document.Lasunidades.unid_metro.value = 0.9144 * valor;
    document.Lasunidades.unid_pulgada.value = 36 * valor;
    document.Lasunidades.unid_pie.value = 3 * valor;

}}

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
document.getElementsByName("sum_total")[0].value= num1 +Number(num2);

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