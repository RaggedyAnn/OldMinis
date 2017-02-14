/*
Made by Ann Karring
4th weekly mini exercise

What is your favourite colour?
The program asks you a question, but it gives you a very little amount of possibilities to choose from. 

Let's say you choose one anyway. Now the program makes a rude comment about your choice. Then you might 
try another colour, but the same happens, another rude comment.

At some point you insist on one colour and confirm that this is the colour you want to choose. Now the 
program gives you positive feedback on the choice you made. 
What does this mean?

You kept getting negative feedback, but if you go with the colour YOU want, you will get credit for
sticking to your own choice and not letting others opinion change your mind without having a valid reason.

I made this as a sort of representation of the impression you easily can get of how it is to communicate 
on the internet, especially on forums where people hide behind usernames or the alike, and where it becomes 
near impossible to express even an insignificant opinion, without anybody throwing hate at you, or 
deliberately making a 'shitstorm'. But don't let hate get to you, because you are entitled to have an 
opinion, so stick to it. It will probably benefit you in the long run.

NB! Yes, this program has no limits for pressing the keys, so if you keysmash the keyboard there will
happened some mistakes, but it is always possible to reset by clicking the mouse ;) 

IMPORTANT: The so called "rude comments" in this program is in no way similar to my own personal opinions, 
just making sure that's clear.

13-03-2016
*/
  var cs;
  var nice;
  var youChose
function preload() {
  //loading text
  youChose=loadStrings("yourFavouriteColour.txt");
  //load fonts
  //creating the Comic Sans font, a well know font for irony and 'trolling' on the internet
  //cs=loadFont("comic.ttf");
  //chosing a more simple and serious font than the Comic Sans font, to seem more genuine
  //nice=loadFont("cour.ttf");
}


//The question
var favourite="What is your favourite colour?";
/*
//Making a stringdict to match the rude comments with theirr respective colours.
StringDict ExplDict=new StringDict(); {
  ExplDict.set("White","What are you? Racist?");
  ExplDict.set("Mint","The weirdest choice, well aren't you a special snowflake. NOT.");
  ExplDict.set("Blue","Blue like the sky? Can't you be a little more creative?");
  ExplDict.set("Pink","That's a little gay");
  ExplDict.set("Black","That's dark, would it kill you to cheer up a little?");
}
*/

//The rude comments in an array
var colourExpl=["What are you? Racist?","The weirdest choice, well aren't you a special snowflake. NOT.","Blue like the sky? Can't you be a little more creative?", "That's a little gay","That's dark, would it kill you to cheer up a little?"];   

//An array for my 5 colours: white, mint, blue, pink and black
var colourA;

//The keys for choosing a colour
var pressK="Press '";
var keyCho=['a','b','c','d','e'];

//Instructions for choosing a colour
var choose=["' for WHITE","' for MINT","' for BLUE","' for PINK","' for BLACK"];

//placement of the Instructions on the y-axis
var yP=200;

//Instructions for confirming the picked colour
var keyCon=['w','v','x','y','z'];
var confirm1="' to confirm colour, or choose another colour";

//the connection of the explanations
var congrats="Congratulations! \n";
var press="\n Press mouse to restart!";

//variables to the function offend:
var col1;
var con;
//variables to the function confirmText 
var col2;

//variables to the function choice
var x;
var y;

  
  
function setup (){
  //var youChose;
  colourA = [ color(255), color(102,255,178), color(0,162,255), color(255,1,214), color(0)];
  //all the settings
  createCanvas(1200,800);
  background(255);
  //a black outline of the circles (and for the text)
  stroke(0);
  
  //a for loop for placing the circles with the same distance inbetween and giving them the right colours
  var pos=0;
  for (var i=0;i<colourA.length;i++) {
    fill(colourA[i]);
    pos=pos+yP;
    ellipse(pos,height/2,75,75);
  }
  //cs=loadFont("comic.ttf");
  textSize(15);
  //textFont(cs);
  //making sure the text is aligned around the center instead of to the left
  textAlign(CENTER,CENTER);
  //a for loop for placing the different instructions in the array "choose" under the circles 
  var dis=0;
  for (var j=0; j<choose.length; j++) {
    //referring to the function below called choice()
    choice(j,dis);
    dis=dis+yP;
  }
  
  //placing the question 
  textSize(32);
  text(favourite,width/2,yP);  
}


function draw () {
  //when a certain key is pressed a colour is picked
  if (keyIsPressed) {
    //a for loop for what happens if you press a key and choose a colour, the rude comment that appear after 
    //choosing a colour and the key you have to press to confirm the colour
    for(var i=0;i<colourExpl.length;i++) {
      if (key==keyCho[i]) {
        //referring to the function offend() below
        offend(colourExpl[i],pressK+keyCon[i]+confirm1);
      }
    }
    
    //a for loop for what happens after you confirmed the colour
    for(var j=0;j<keyCon.length-1;j++) {
      if(key==keyCon[j]) {
      background(colourA[j]);
      //referring to the function confirmText() below
      confirmText (j);
      }
    }
    //press z to confirm black, needs to be in a seperate if sentence, since I want the text to be white
    if(key=='z') {
      background(colourA[4]);
      fill(255);
      confirmText (4);
    }    
  }
  
  //to restart and pick a new colour press the mouse
  if (mouseIsPressed) {
    setup();
  }
}


//show the right rude comment for the right colour picked
function offend (col1,con) {
  //a white rectangle if you pick a different colour, so the new rude comment wont be on top of the old
  fill(255);
  stroke(255);
  rect(width/2,height-100,width,300);
  //text settings for the rude comment
  textSize(32);
  fill(0);
  text(col1,width/2,600);
  //text settings for the instructions underneath
  textSize(20);
  text(con,width/2,700);
}


//write the choices under the coloured circles and limit them within a rectangle 90x80
function choice (x,y){
 rectMode(CENTER);
 text(pressK+keyCho[x]+choose[x],y+yP,height/2+100,90,80);
}


//loading the different texts for explanations for each colour, from a txt document in the data folder
function confirmText (col2) {
  //joining the text into one string
  var one=join(youChose," ");
  //splitting the string into the explanations for each colour
  var expl=split(one,"-");
  //adding the "congratulations" and "press mouse to restart" to each explanation
  var yay=congrats+expl[col2]+press;
  //textFont(nice);
  textSize(30);
  //the text and the text placement and limiting rectangle
  text(yay,width/2,height/2,700,700);
}