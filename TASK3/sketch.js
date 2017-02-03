var d=150;
var col={
  r:255,
  g:50,
  b:200
}

var bug;
var bug1;
var bug2;
var bug3;
var bug4;
var bug5;
var bug6;
var bug7;
var bug8;
var bug9;
var bug10;
var bug11;

function setup() {
  createCanvas(1200, 730);
  
  background(0);
  
 

  bug=new JitterBug(width/2,height*0.4,d,d);
  bug1=new JitterBug(width*0.225,height*0.58,d,d);
  bug2=new JitterBug(width*0.225,height*0.76,d,d);
  bug3=new JitterBug(width/2,height*0.76,d,d);
  bug4=new JitterBug(width*0.775,height*0.76,d,d);
  bug5=new JitterBug(width*0.225,height*0.22,d,d);
  bug6=new JitterBug(width/2,height*0.22,d,d);
  bug7=new JitterBug(width*0.775,height*0.22,d,d);
  bug8=new JitterBug(width*0.775,height*0.4,d,d);
  bug9=new JitterBug(width*0.775,height*0.58,d,d);
  bug10=new JitterBug(width/2,height*0.58,d,d);
  bug11=new JitterBug(width*0.225,height*0.4,d,d);
  
  
}

function draw() {
  
 col.r=random(0,255);
 col.g=random(0,255);
 col.b=random(0,255);
  
  fill(255,89,0);
  
  
  bug.move();
  bug.display();
  
  fill(255,214,33);
  bug1.move();
  bug1.display();
  
  
  fill(252,8,219);
  bug2.move();
  bug2.display();
  
  fill(190,220,20);
  bug3.move();
  bug3.display();
  
  fill(170,230,90);
  bug4.move();
  bug4.display();
  
  fill(253,40,119);
  bug5.move();
  bug5.display();
  
  fill(123,45,230);
  bug6.move();
  bug6.display();
  
  fill(20,241,164);
  bug7.move();
  bug7.display();
  
  fill(199,3,3);
  bug8.move();
  bug8.display();
  
  fill(90,90,255);
  bug9.move();
  bug9.display();
  
  fill(50,255,200);
  bug10.move();
  bug10.display();
  
  fill(90,13,60);
  bug11.move();
  bug11.display();



 
  
  
//ellipse(width/2,height*0.4,d,d);
//ellipse(width*0.225,height*0.58,d,d);
//ellipse(width*0.225,height*0.76,d,d);
//ellipse(width/2,height*0.76,d,d);
//ellipse(width*0.775,height*0.76,d,d);
//ellipse(width*0.225,height*0.22,d,d);
//ellipse(width/2,height*0.22,d,d);
//ellipse(width*0.775,height*0.22,d,d);
//ellipse(width*0.775,height*0.4,d,d);
//ellipse(width*0.775,height*0.58,d,d);
//ellipse(width/2,height*0.58,d,d);
//ellipse(width*0.225,height*0.4,d,d);
  
  
  
  
}

function JitterBug(tempX,tempY,tempDiameter) {
  
  
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 6;
  


  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
    
  };
}

function mousePressed(){
  background(col.r,col.g,col.b);
  
  
   
    
}
