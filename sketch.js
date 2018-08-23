var inv = [];

var sy;
var sx;

var life;

var sec;
var min;
var num;
///variables for the player bounds///
var px;
var py;


function setup() {
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB);
  
  sec = 0;
  num = 0;
  
  life = 3;
  for (var i=0; i<20; i++){
    inv.push(new Invader());
  }

function Add(){
  if(floor(life) > 0){
  num ++}
}
  setInterval(Add,1000);
}

function draw() {
  background(0,0,40);
  
  
  min = floor(num/60);
  sec = num;
  if(sec > 59){sec === 0}
  textSize(50);
  fill(0,0,0);
  text(min + ':' + nf(sec,2),150,50);

  for (var i=0; i<inv.length; i++){
    inv[i].draw();
    inv[i].change();
    inv[i].score();
    if(inv[i].hit()){
      for (var j=0; j<inv.length; j++){
          inv[j].effect();
      }
    }
    if(floor(life) === 0){
      for (var h=0; h<inv.length; h++){
        inv[h].end();
      }
    }
  }
  


///establishing the coordinates of player///
  px = mouseX;
  py = height-40;
  var color = 243;
//actually rendering the player///
  fill(color,100,50);
  stroke(0,0,0);
  ellipse(px,py,40,40);
  
}
///end draw////


////function for the balls///
function Invader(){
////position and velocity to head towards///
  sx = random(-5,5);
  sy = random(3,8);
  this.p = createVector(random(0,width),0);
  this.v = createVector(sx,sy);


/////drawing in the actual balls///
  this.draw = function(){
    sx = random(-5,5);
    sy = random(3,8);
    stroke(0,0,0);
    fill(0,100,60);
    ellipse(this.p.x,this.p.y,20,20);
  };
  
/////making the position and velocity change according to environment///
  this.change = function(){
    this.p.add( this.v );
////respawing them after they hit the bottom///
    if(this.p.y > height){
      this.p = createVector(random(0,width),0);
      this.v = createVector(sx,sy);
    // else if(sec % 30){
    //   this.vel.x += .1;
    //   this.vel.y +=.3;
    }
///bouncing the balls around///
    if(this.p.x < 0 || this.p.x > width){
      this.v.x *= -1;
    }
  };
  

  this.score = function(){
    textAlign(CENTER);
    textSize(50);
    fill(0,0,0);
    text(floor(life),width-150,50);
  };
  
///method in order to detect when the player is hit///
  this.hit = function(){
    ///estbalishing variables for distances///
    var d = dist(px,py,this.p.x,this.p.y);
    if(d < 30){
      return true;
    }else{
      return false;
    }
  };
  
///method that establishes what happens when the player is hit///
  this.effect = function(){
//this establishes the score of the game with three lives///
    life -= 1/20;
    this.p = createVector(random(0,width),0);
  };
}

  this.end = function(){
    this.v = (0,0);
  };

