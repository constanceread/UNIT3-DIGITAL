//for the mic
var mic;

//for the waves
var yoff =0.0;       
var yoff1=0.0;
var yoff2=0.0;
var yoff3=0.0;
var yoff4=0.0;

//for the backgroound
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2;

function setup() {
  createCanvas(1200, 700);
  
  
  //this is for the background too   
  b1 = color(252,8,219);
  b2 = color(255,89,0);
  c1= color(255,89,0);
  c2= color(255, 214,33);

  // for the mic
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(200);
  
    // Background
  setGradient(0, 0, width/2, height, b1, b2, X_AXIS);
  setGradient(width/2, 0, width/2, height, b2, b1, X_AXIS);



//to do with the mic  
  var vol = mic.getLevel();
  var h = map(vol, 0, 1, height, 0);
 
  
  //for the wavey lines
  
  //the third one
  stroke(225,20,100);
strokeWeight(1);
  fill(225,200,9,170);
  
  beginShape();
  var xoff2=200;
  for(var x=0; x<=width;x+=10){
    var y=map(noise(xoff2,yoff2),0,1,h,vol);
    vertex(x,y);
    xoff2+=0.03;
  }
  yoff2 +=vol;
  vertex(width,height);
  vertex(0,height);
  endShape(CLOSE);
  
  
    //for the first wobbly line
stroke(110,20,255);
strokeWeight(1);
  fill(100,14,200,100);
 
  beginShape(); 
  
  var xoff = 200;      
  
  for (var x = 0; x <= width; x += 10) {
   
    
   
    var y = map(noise(xoff, yoff), 2.5, 0.5, 200,500);

   
    vertex(x, y); 
   
    xoff += 0.06;
  }
  
  yoff += vol;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

//for the second wobbly line
  
    stroke(225,20,25);
strokeWeight(1);
  fill(200,14,200,100);
  
  beginShape();
  var xoff1=200;
  for(var x=0; x<=width;x+=10){
    var y=map(noise(xoff1,yoff1),0,2,270,900);
    vertex(x,y);
    xoff1+=0.06;
  }
  yoff1 +=0.03;
  vertex(width,height);
  vertex(0,height);
  endShape(CLOSE);
  
  //for the forth wobbly line
  
   stroke(0,29,205);
strokeWeight(1);
  noFill();
  
  beginShape();
  var xoff3=200;
  for(var x=0; x<=width;x+=10){
    var y=map(noise(xoff3,yoff3),0,1,300,700);
    vertex(x,y);
    xoff3+=random(0.01,vol);
  }
  yoff3 +=0.01;
  vertex(width,height);
  vertex(0,height);
  endShape(CLOSE);
  
    //for the fifth wobbly line
  
  
//   stroke(255,149,0);
//strokeWeight(1);
//  noFill();
  
//  beginShape();
//  var xoff4=200;
//  for(var x=0; x<=width;x+=10){
//    var y=map(noise(xoff4,yoff4),1,3,400,900);
//    vertex(x,y);
//    xoff4+=0.1;
//  }
//  yoff4 +=0.04;
//  vertex(width,height);
//  vertex(0,height);
//  endShape(CLOSE);
}



//below all for the background gradient

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) { 
    for (var i = y; i <= y+h; i++) {
      
  
  
   
    }
  }  
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}




