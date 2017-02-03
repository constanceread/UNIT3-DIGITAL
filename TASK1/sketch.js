


function setup() {
  createCanvas(400, 500);
  lengthof1 = 280;
  lengthof2=280
  background(0);
  colorMode(HSB, 400, 200, 50);
  noStroke();
  frameRate(2);
}

function draw() {
  background(0);
  //for (var x = 50; x <= width; x+=lengthof1) {
    drawGradient(200,200);
    drawGradient(90,290);
    drawGradient(90,380);
    drawGradient(200,380);
    drawGradient(310,380);
    drawGradient(90,110);
    drawGradient(200,110);
    drawGradient(310,110);
    drawGradient(310,200);
    drawGradient(310,290);
    drawGradient(200,290);
    drawGradient(90,200);
  } 


function drawGradient(x, y) {

  var radius = lengthof1/2;
  var h = random(0, 360);
  for (var r = radius; r > 0; --r) {
    fill(h, 90, 90);
    ellipse(x, y, r, r);
    
    h = (h +2) % 360;
  }
}