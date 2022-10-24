var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var xPos = -100;
var yPos = 50;
var motionTrailLength = 10;



function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    for (var i = 0; i < positions.length; i++) {
        var ratio = (i + 1) / positions.length;
        drawCircle(positions[i].x, positions[i].y, ratio);
    }
    
    drawCircle(xPos, yPos, "source");
            
    requestAnimationFrame(update);
    }
update();
    
function drawCircle(x, y, r) {
    if (r == "source") {
        r = 1;
    } else {
        r /= 4;
    }
    
    context.beginPath();
    context.arc(x, y, 5, 0, 2 * Math.PI, true);
    context.fillStyle = "rgba(249, 0, 77, " + r + ")";
    context.fill();
}