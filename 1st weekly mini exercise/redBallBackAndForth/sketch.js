//få en cirkel til at bevæge sig frem og tilbage
//a circle that moves back and forth

var xp,yp; //koordinater for start/coordinates in the beginning
var ret=1; //cirkel retning/the direction of the circle
var d=50; //cirkel diameter/the circle's diameter
var r=d/2; //cirklens radius/the circle's radius
var has=4; //cirklens hastighed/the circle's speed

function setup(){
  createCanvas(600,200);
  //start koordinater
  //beginning coordinates
  xp=r;
  yp=height/2;
}

function draw(){
  background(0);
  
  //Cirklens bevægelse: x-koordinat + hvor mange pixlels den skal bevæge sig i hvilken retning
  //The circle's movement: x-coordinate + how many pixels you want it to move, and in which direction 
  xp=xp+(has*ret);
  
  //hvis cirklen rammer højre ELLER venstre side skal den bevæge sig i opposite retning--> gang med -1
  //if the Cicle hits the left OR right side it has to move int he opposite direction--> multiply with -1
  if(xp>width-r ||xp<r ) {
     ret=ret*-1;
  } 
//cirkel
//circle
fill(255,0,0);
ellipse(xp,yp,d,d);
}