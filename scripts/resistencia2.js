var slider = document.getElementById("myRange"); 
var myLine = $("#shortLine");
var currentWidth = parseInt(myLine.css("strokeWidth") || myLine.attr("stroke-width"), 10);
// myLine.css("strokeWidth", 30);
var myLine2 = document.getElementById('shortLine');
// myLine2.setAttribute("x2", "100");
var valueSlider1 = document.getElementById("rangeValue1");
var valueSlider2 = document.getElementById("rangeValue2");
var valueResistencia = document.getElementById("valorResistencia");

function changeLenght(x) {
    myLine2.setAttribute("x2", x.value);
    valueSlider1.innerHTML = x.value -34;
    valorResistencia()
}
function changeWidth(x) {
    myLine.css("strokeWidth", x.value);
    valueSlider2.innerHTML = x.value -9;
    valorResistencia()
}

function valorResistencia(){
    var resistencia = parseInt(valueSlider1.innerHTML)/parseInt(valueSlider2.innerHTML);
    valueResistencia.innerHTML = Math.round(resistencia) + "ρ [Ω]"
}