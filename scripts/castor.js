var duration = 2
var logs = 0
var image = new Image();
image.src = "img/log2.png";

$(function() {
    $('#plusButton').on('click',function(){
        if(duration < 12){
            duration += 1;
            $(".parallax")[0].style.animationDuration = duration + "s";
            console.log($("#logs")[0])
            $("#logs")[0].appendChild(image.cloneNode(true));
           
        }
    })
}); 

$(function() {
    $('#minusButton').on('click',function(){
        if(duration>2){
            duration -= 1;
            $(".parallax")[0].style.animationDuration = duration + "s";
            $("#logs")[0].removeChild($("#logs")[0].lastElementChild);
        }
    })  
});
