var valueSlider3 = document.getElementById("rangeValue3");
var valueSlider4 = document.getElementById("rangeValue4");
var valueCorriente = document.getElementById("valorCorriente");
var corriente = 1


function changeVoltaje(x) {
    valueSlider3.innerHTML = x.value;
    valorCorriente()
    document.getElementById("V").style.fontSize = x.value*20 + "px";
    document.getElementById("I").style.fontSize = Math.round(parseInt(valueSlider3.innerHTML)/parseInt(valueSlider4.innerHTML))*20 + "px";
    
}
function changeResistencia(x) {
    valueSlider4.innerHTML = x.value;
    valorCorriente()
    document.getElementById("R").style.fontSize = x.value*20 + "px";
    document.getElementById("I").style.fontSize = Math.round(parseInt(valueSlider3.innerHTML)/parseInt(valueSlider4.innerHTML))*20 + "px";
    
}

function valorCorriente(){
    var corriente = parseInt(valueSlider3.innerHTML)/parseInt(valueSlider4.innerHTML);
    valueCorriente.innerHTML = Math.round(corriente) + "[A]"
}