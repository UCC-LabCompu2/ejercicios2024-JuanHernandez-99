/**
 * Conversion de unidades ,de metros ,yardas , pies y pulgadas.
 * @method cambiarunidades
 * @param {string} id - el ide los metros ,yardas,pies y pulgadas'
 * @param {number} valor- El valor de los inputs de los metros ,yardas,pies y pulgadas'
 * @return
 */
function cambiarunidades(id,valor) {
    if (isNaN(valor)){
        alert("se ingreso un valor que no es valido");
        document.Lasunidades.unid_metro.value="";
        document.Lasunidades.unid_pulgada.value = "";
        document.Lasunidades.unid_pie = "";
        document.Lasunidades.unid_yarda ="";
    }


    else if (id == "metro") {
    document.Lasunidades.unid_pulgada.value = 39.3701 * valor;
    document.Lasunidades.unid_pie.value = 3.28084 * valor;
    document.Lasunidades.unid_yarda.value = 1.09361 * valor;
} else if (id == "pulgada") {
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
     document.getElementById("grados").value= grad;
     document.getElementById("radianes").value= rad;
}
