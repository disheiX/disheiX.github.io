var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var xPos = -100;
var yPos = 50;
var motionTrailLength = 10;
var positions = [];
function storeLastPosition(xPos, yPos) {
// push an item
positions.push({
    x: xPos,
    y: yPos
});

//get rid of first item
if (positions.length > motionTrailLength) {
    positions.shift();
}
}
function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    for (var i = 0; i < positions.length; i++) {
        var ratio = (i + 1) / positions.length;
        drawCircle(positions[i].x, positions[i].y, ratio);
    }
    
    drawCircle(xPos, yPos, "source");
    
    storeLastPosition(xPos, yPos);
    
    // update position
    if (xPos > 800) {
        xPos = -100;
        yPos = 50
    }
    if (xPos > 100 && xPos < 360){
        xPos += 5	;
    } else {
        xPos += 10;
    }
    if (xPos > 100 && xPos < 110) {
        yPos += 12;
    } else if (xPos > 110 && xPos < 130) {
        yPos -= 12;
    } else if (xPos > 130 && xPos < 150) {
        yPos += 12;
    } else if (xPos > 150 && xPos < 170) {
        yPos -= 12;
    } else if (xPos > 170 && xPos < 190) {
        yPos += 12;
    } else if (xPos > 190 && xPos < 210) {
        yPos -= 12;
    } else if (xPos > 210 && xPos < 230) {
        yPos += 12;
    } else if (xPos > 230 && xPos < 250) {
        yPos -= 12;
    } else if (xPos > 250 && xPos < 270) {
        yPos += 12;
    } else if (xPos > 270 && xPos < 290) {
        yPos -= 12;
    } else if (xPos > 290 && xPos < 310) {
        yPos += 12;
    } else if (xPos > 310 && xPos < 330) {
        yPos -= 12;
    } else if (xPos > 330 && xPos < 350) {
        yPos += 12;
    } else if (xPos > 350 && xPos < 360) {
        yPos -= 12;
    }
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