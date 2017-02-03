var a=140
var b=200
var c=100
var d=50
var e=150
function setup() {
  createCanvas(400,500);
  background(b,0,60);
  

  
}

function draw() {
  
 
 a=map(mouseX,mouseY,500,0,255);
background(a,d,c);
 
 noStroke();
  fill(b,60,60,c);
  ellipse(b,b,a,a);
  
  fill(210,40,70,d);
  ellipse(90,290,a,a);
  
  fill(190,30,80,e);
  ellipse(90,380,a,a);
  
  fill(220,100,90,c);
  ellipse(b,380,a,a);
  
  fill(b,120,80,d);
  ellipse(310,380,a,a);
  
  fill(210,130,100,e);
  ellipse(90,110,a,a);
  
  fill(210,120,110,c);
  ellipse(b,110,a,a);
  
  fill(210,90,100,d);
  ellipse(310,110,a,a);
  
  fill(220,80,95,e);
  ellipse(310,b,a,a);
  
  fill(220,70,105,c);
  ellipse(310,290,a,a);
  
  fill(225,90,105,d);
  ellipse(b,290,a,a);
  
  fill(230,60,115,e);
  ellipse(90,b,a,a);
 
 
 
 //a=a+5




 
  
  

 
  
  
  
  
  
  
  
}