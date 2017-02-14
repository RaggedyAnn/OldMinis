/* 
Made by Ann Karring
2nd weekly mini exercise
A Calming Throbber
A throbber that strives to be more calming than the usual throbber. When spending minutes of your life 
that feels like hours looking at throbbers that in a fast pace keeps going round and round, it can be 
hard not to lose patience. As an attempt to make it easier to keep calm in a situation that feels like an 
endless wait, I made this slow throbber consisting of a globe on which light gets stronger and weaker.
21/02-2016
*/


//The radius of the globe (not neccesary to be a variable, I just like it here so its easy to change)
var r=50;
//the startimg point for the"brightness" of the light on the globe, that controls also the scope of the brightness
var s=70;
//the addition to the specular that defines the speed of the change of "brightness"
var h=2;

function setup (){
  //setting the size and make it 3D
  createCanvas(600,600,WEBGL);
  //Dont want no outline on me globe 
  noStroke();
}

function draw(){
  //making the background black, so the globe will be a light in the dark
  background(0);
  //I want white light bouncing off the globe
  pointLight(255,255,255,0,0,0);
  //still wants white light on the globe, and I want it pointed directly on the globe (0,0,0)
  directionalLight(255, 255, 255, 0, 0, 0);
  //controlling the reflection of the light (the scope of the brightness)
  ambientMaterial(s,s,s);
  //I call the code in the function I defined down below for making the "brightness" rise and fall
  changingLights();
  //and here is the globe
  sphere(r);
}

//here is the function I called earlier
function changingLights() {
  //make the "brightness" rise
  s=s+h;
  //make it loop when the light gets too high OR low
  if(s>255||s<70){
    h=h*-1;
  }
}