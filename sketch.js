var tri = [];//this array holds all the Triangle info
var s = 20;//s standsfor size of triangle


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(230);
  for (var i = 0; i < tri.length; i++) { // keeps track of all the triangles being created
    tri[i].display();
  }

  if (mouseIsPressed) { 
    var t = new Tri(mouseX, mouseY);//if mouse is  pressed draw a  triangle there
    tri.push(t); //push function saves the current drawing style settings and transformations
  }
}


function Tri(x, y) { //this is  where  we  define the shape of our  triangle
  this.x = x; //xlocation
  this.y = y;//y  location
  this.s = s;//size
  this.col = (0);//color
  
  this.display = function() { //displays it
    stroke(255);//white stroke
    fill(this.col);//color fill
     for (var j=0; j<100;j++){
    triangle(this.x, this.y, this.x + this.s/2, this.y - this.s*2, this.x - this.s/2, this.y - this.s*2);//this is  the math to  draw the same triangle
       
  }
          
  }
}