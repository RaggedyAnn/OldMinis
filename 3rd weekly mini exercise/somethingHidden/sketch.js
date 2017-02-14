/*
Made by Ann Karring
3rd weekly mini exercise
Something Hidden
This code is playing on the old saying "don't judge a book by it's cover". At first it might just look like 
a simple box, slowly turning in empty space, but when you see what's inside you reveal that there is 
something more to it. Other little boxes turning in their own empty space inside the box. It makes you 
wonder if the big box is just floating in it's own empty space in a even bigger box(which, evident in the 
code, it actually is), that you just (barely) can't see. How much more is there that we can't see with our 
eyes?
06-03-2016
*/

/*
NB!
stroke, fill, noStroke and noFill together with text in WEBGL has not been implemeted in P5.js yet T_T
*/

//speed of change of coordinates for the small boxes
var speed=2;
//speed of rotation
var rSpeed=0.01;
//start rotate degree around X axis
var rX=-0.5;
//start rotate degree around Y axis
var rY=1;
//Big box size
var bB=200;
//small box size
var sB=10;
//the limit of the placement of the small boxes in the big box (the 0.1 is so you can't see the small boxes from outside the big box)
var bL =((bB/2)-(sB/2))-((sB/2)+0.1);
//chosing the start positions of the boxes
var pos=5;

//position of the small boxes
var xp;
var yp;
var zp;

function setup() {
 //setting the size of the window
 createCanvas(800,600,WEBGL);
}

function draw() {
  //black background, like the box floating in empty space
  background(0);
  //referring to the function for the explaining text IS NOT IMPLEMENTED IN WEBGL YET!!!!
  //explain();
  //calling the function for making the big box
  bigBox();
  //making 8 small boxes with different coordinates
  smallBox(pos,pos,pos);
  smallBox(-pos,-pos,-pos);
  smallBox(-pos,pos,pos);
  smallBox(pos,-pos,-pos);
  smallBox(pos,pos,-pos);
  smallBox(pos,-pos,pos);
  smallBox(-pos,-pos,pos);
  smallBox(-pos,pos,-pos);
  //making the position of the small boxes change
  pos=pos+speed;
  //limit the small boxes' movement so they keep inside the big box
  if (pos>bL||pos<-bL){
    speed=speed*-1;
  }
  hidden();
}
/*
//all the settings for the explaining text. TEXT IS NOT IMPLEMENTED IN WEBGL YET!!!!
function explain () {
  //I want the explaining text to be white and clear
  fill(255);
  //making the placement of the text depend on the center
  textAlign(CENTER);
  //creating a font, using it and setting the text size
  //PFont OCR =createFont("OCR A Extended",20);
  textFont(OCR);
  //here is the text
  text("Hold down the mouse to see what is inside the box",width/2,550,0);
}
*/

//The function for colouring, rotating and making the big box
function bigBox() {
  //if the mouse is pressed the little boxes inside will be revealed
  if(mouseIsPressed) {
    noFill();
  }else {
    fill(255);
  }
  //putting light on the box
  pointLight(255,255,255,-1,0, 0);
  //making the edges of the box white to stand out
  stroke(255);
  //setting the thickness of the edges
  strokeWeight(5);
  //placing the box in the middle
  //translate(width/2,height/2,0);
  //setting the start rotation around the x and y axis
  rotateX(rX);
  rotateY(rY);
  //making the rotation around the to axis change
  rX=rX+rSpeed;
  rY=rY+rSpeed;
  //drawing the big box
  box(bB);
}

//the function for colouring, placing and drawing the small boxes, so you can decide the coordinates in the beginning
function smallBox (xp, yp, zp) {
  //making sure the small boxes' position get translated for each box
  push();
  //making the boxes white
  fill(255);
  //making the edges white
  stroke(255);
  //setting the thickness of the edges
  strokeWeight(1);
  //the placement of the little box that you can devide in the function calling
  translate(xp,yp,zp);
  //the size of the small boxes
  box(sB);
  pop();
}

//This is the solution to the mystery in this case, the hidden question of what we can see and what we can't, 
//what lies outside the edges of our little "window" to the program and what is invisible to our eyes.
function hidden () {
  fill(0,0,0,0);
  stroke(20);
  box(600);
}