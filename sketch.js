// Drop is a callback function which means it will be called on click of something.

const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit_constraint,fruit,rope,rope2,rope3;
var eat, sad, blink,bg_img,food_img;
var bunny;
var button;

function preload()
{
  bg_img = loadImage("assets/background.png");
  food_img = loadImage("assets/melon.png");
  rabbit_img = loadImage("assets/Rabbit-01.png");

  blink = loadAnimation("assets/blink_1.png","assets/blink_2.png","assets/blink_3.png");
  eat = loadAnimation("assets/eat_0.png" , "assets/eat_1.png","assets/eat_2.png","assets/eat_3.png","assets/eat_4.png");
  sad = loadAnimation("assets/sad_1.png","assets/sad_2.png","assets/sad_3.png");

  bk_song = loadSound("assets/sound1.mp3");
  eating_sound = loadSound("assets/eating_sound.mp3");
  cut_sound = loadSound("assets/rope_cut.mp3");
  sad_sound = loadSound("assets/sad.wav");
  air = loadSound("assets/air.wav");
}


function setup() 
{
  engine = Engine.create();
  world = engine.world;
  bk_song.play();

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); 
  if(isMobile)
  { 
    canW = displayWidth; 
    canH = displayHeight; 
    // createCanvas(displayWidth+80, displayHeight);
  }

  else
  {
    canW = windowWidth;
    canH = windowHeight;
    // createCanvas(windowWidth)
  }

  createCanvas(canW + 80, canH)

  ground = new Ground(canW/2,canH-30,canW,20); // x = 200 , y = 680 , w = 600  and h = 20
  rope = new Rope(8,{x:40,y:30})
  rope2 = new Rope(7,{x:350,y:45})
  rope3 = new Rope(5,{x:380,y:240})

  // 7 is the number of links to create the rope and x and y are the pos of the points to which rope will be attached.
  fruit = Bodies.circle(220,300,20);
  fruit_constraint = new Link(rope, fruit);
  fruit_constraint2 = new Link(rope2, fruit);
  fruit_constraint3 = new Link(rope3, fruit);
  Composite.add(rope.body, fruit);

  bunny = createSprite(230,620,100,100);
  bunny.scale = 0.2;
  bunny.addAnimation('blinking',blink); // addAnimation has got two arguements label-(i)
  bunny.addAnimation('eating',eat);
  bunny.addAnimation('crying',sad);
  bunny.changeAnimation('blinking');

  button1 = createImg('assets/cut_btn.png');
  button1.position(40,30);
  button1.size(50,50);
  button1.mouseClicked(drop); 

  button2 = createImg('assets/cut_btn.png');
  button2.position(330,40);
  button2.size(50,50);
  button2.mouseClicked(drop2); 

  button3 = createImg('assets/cut_btn.png');
  button3.position(360,225);
  button3.size(50,50);
  button3.mouseClicked(drop3); 

  mute_button = createImg('assets/mute.png');
  mute_button.position(450,20);
  mute_button.size(50,50);
  mute_button.mouseClicked(mute); 

  blower = createImg('assets/balloon.png');
  blower.position(10,250);
  blower.size(100,100);
  blower.mouseClicked(airBlow); 
}

function draw() 
{
  background(51);
  
  Engine.update(engine);
  
  ground.display();
  rope.display();
  rope2.display();
  rope3.display();
  
  imageMode(CENTER);
  
  if(fruit != null)
  {
    image(food_img,fruit.position.x,fruit.position.y,70,70);
  }
  
  // Fruit and Bunny are the parameters being passed in the collide function at line no. 82
  if(collide1(fruit,bunny)==true)
  {
    bunny.changeAnimation('eating');
    eating_sound.play();
  }

  if(fruit!=null && fruit.position.y>=650) 
  { 
    bunny.changeAnimation('crying'); 
    bk_song.stop(); 
    sad_sound.play(); 
    fruit=null; 
  }
  
  drawSprites();
  
}


 function collide1(fruit,sprite)
{
  if(fruit!=null)
  {
    var d = dist(fruit.position.x,fruit.position.y,sprite.position.x,sprite.position.y);
    console.log(d)
     if(d<=80)
    {
     World.remove(world,fruit);
     fruit = null;
     return true; 
    }
     else
    {
     return false;
    }
   }
  }


function drop()
{
  rope.break();
  fruit_constraint.detach();
  fruit_constraint = null;
}

function drop2()
{
  rope2.break();
  fruit_constraint2.detach();
  fruit_constraint2 = null;
}

function drop3()
{
  rope3.break();
  fruit_constraint3.detach();
  fruit_constraint3 = null;
}

function mute()
{
  if(bk_song.isPlaying())
  {
    bk_song.stop();
  }

  else
  {
    bk_song.play();
  }
}

function airBlow()
{
  Body.applyForce(fruit, {x:0 , y:0}, {x:0.01 , y:0})
}




  
  

 
   

