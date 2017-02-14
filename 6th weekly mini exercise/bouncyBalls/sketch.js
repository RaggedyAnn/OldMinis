/*
Made by Ann Karring
6th weekly mini exercise

Bouncy Balls

I chose to make the inizial postion and size for all the balls fixed, so the difference in the "gravity" and
"weight" of the balls, and how to manipulate their patterns becomes more clear.
I try throughout the code to define what physical phenomna each variable is the equivalent to. fx. "gravity",
"weight" and "acceleration".

03-04-2016
*/


//the number of balls that you want displayed
var numBalls=2;
//a class array for new ball objects
//Ball[] ball= new Ball[numBalls];
var ball=[];

 
function setup() {
  createCanvas(800,400);
  //I make an array for the speeds along the x axis because even though I want to randomize it, I wanted the 
      //balls to go far, so I skipped the numbers inbetween -1 and 1
  var xspeedA=[random(-2.5,-1),random(1,2.5)];
  for( var i=0;i<numBalls;i++) {
    ball[i]={
      //inizial x and y positions
      xpos:width/2,
      ypos:100,
      
      //randomizing which way the balls will go
      xspeed:xspeedA[int(random(xspeedA.length))],
      //inizial speed
      yspeed:0,
    
      //randomizing the colour of the balls on a grey scale
      c:color(random(50,255)),
      //the size of the balls
      size:50,
      
      //the gravity that the ball is pulled down the y-axis with (how fast it falls). This changes the gravity,
      //so if it is really low, its like the ball is on the moon, or you can make the gravity seem very strong.
      grav:random(0.1,0.5),
      //the persentage in decimal numbers the ball will reduce in height each time it hits the bottom.
      //I would say this seems to change the weight of the ball, or the strength that the ball is sent with.
      gravP:random(0.6,0.9),
      
      display:function() {
        //colours
        noStroke();
        fill(this.c);
        //here is the ball
        ellipse(this.xpos, this.ypos, this.size, this.size);
      },
      
      //The function for the conditions for the movement of the ball
      move:function() {
        // I add the gravity to the yspeed to make it a bigger and bigger number that is added to the yposition.
        this.yspeed = this.yspeed + this.grav;
        
        // speed is added to the position
        this.xpos = this.xpos + this.xspeed;
        this.ypos = this.ypos + this.yspeed;
        
        //Making the ball change direction if it hits the sides
        if ((this.xpos > width - this.size/2) || (this.xpos <= this.size/2)) {
          this.xspeed = -this.xspeed;
        }
        
        //Making the ball change directions and bounce back when it hits the bottom of the window.
        if (this.ypos >= height - this.size/2) {
          //making sure the ball doesnt get a y value lower than the edge of the bottom of the window.
          this.ypos = height - this.size/2;
          // reducing the height of the ball with gravP and change the direction.
          this.yspeed = this.yspeed * -this.gravP;
          //to make the balls deaccelerate I reduce the xspeed a little bit for each looping (I didnt find this
          //particularly interesting to play with, so I didnt want it as a variable in the class)
          this.xspeed=this.xspeed*0.997;
        }
      }
    }
  }
}
 
function draw() {
  //clear the background
  background(0);
  //a for loop to make all the numBalls both get displayed and moved
 for( var i=0;i<ball.length;i++) {
   ball[i].display();
   ball[i].move();
 }
}
