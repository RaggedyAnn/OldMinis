/*
Made by Ann Karring
5th weekly bigger exercise

Tree Generator

Instructions:
You press any key to redraw the sketch and generate a new unique tree

My inspiration for this generator was this example: "P_2_2_4_01" from website: http://www.generative-gestaltung.de/code
I really wanted do something like the branching, but by looking at the code I thought it looked
unncecesarily complicated, if I just wanted to make branching, so I made this as a simpler alternative.

It is a simple contruction, of simple lines, for which the only rules are that they either split in two,
or continue. The same code is repeated for the trunk as for the branches by calling the same function
inside the function(recursion), but with a slight variation with the help of the random function. This 
generates a new unique tree every time you start the program or press a key.

27-03-2016
*/

//rotation degree in radians of turning each branch when it continues
//(try and error, until I found a rotation liked)
var rotc=5;
//rotation degree in radians of turning each branch when it splits
//(try and error, until I found a rotation I liked)
var rots=18;
//the thickness of the branches
var sWeight=8;

var tall;
var place;

function setup() {
  createCanvas(600,600);
  noLoop();
  
  //instead of noLoop(); you can make it regenerate the trees itself with this framRate
  //frameRate(0.5);
}

function draw() {
  background("#ACDBFA");
  stroke("#582B02");
  strokeWeight(sWeight);
  push();
  translate(width/2,height); 
  tree(0);
  pop();
}

//the tall variable is to make sure that the tree stops getting more branches after a specific amount of times
function tree (tall){
  //this is the length of each branch in each matrix I make. It is most clear as it is the height of the
  //trunk of the tree
  var branchP=-height/10;
  //I want the tree to stop branching after the function has been called 13 times
  if (tall < 12){
    //The like used for all the branches every time it gets called upon, this makes sense since the line
    //always will have the same placement in the translated and scaled coordinate system
    line(0,0,0,branchP);
    //now the top of the line drawn before is the new (0,0) coordinate, from where a new branch can grow
    translate(0,branchP);
    //randomizes a branch that does not split in two, but continues, will tilt a little to the  left or right
    rotate(radians(random(-rotc,rotc)));
   
   //this if sentence randomizes the length so that half of the time (when the random number between 0 
   //and 10 are lower than 7) then the brances will split in two, else as you can see below, it 
   //draws tree(); -> the branch doesn't split, but continues 
    if (random(10) < 7){ // branching  
      //I scale the new brances down 80% of the previous branch(try and error, and chose what I liked best)
      scale(0.8);
      
      //The Matrix gets rotated to the right and draws the same branch as before there
      rotate(radians(rots));
      //pushMatrix and popMatrix so it only affects that new branching
      push();
      tree(tall + 1);
      pop();
      
      //the Matrix gets rotated back to the same position as before, and the same amount to the left,
      //where a new branch is made, so the two branches point in different directions, but comes out 
      //from the same point
      rotate(radians(-rots*2));
      push();
      tree(tall + 1);   
      pop();    
    
    //as said before, this is the variation of the length of the branches, so that the branch 
    //sometimes doesn't split in two, and just draws a straight branch instead
    } else {  
      tree(tall);
    }
    //calling the function leaf, that I only wants after the function tree has been called 5 times
    if(tall>4) {
      leaf(branchP);
    }
  }
}

//adding some very simple pink leaves in various colours of pink
function leaf(place) {
  noStroke();
  //randomizing the colour to stay in the pink
  fill(255,int(random(59,180)),int(random(213,239)));
  //adding a leaf on each side of wach branch
  ellipse(20,random(place),25,12);
  ellipse(-20,random(place),25,12);
  //so the branches has a stroke, and doesnt disapear
  stroke("#582B02");
}

//you press any key to generate a new tree(run the code over again).
 function keyPressed(){
  redraw(); 
}
