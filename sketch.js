const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var , slingshot;

var gameState = "onSling";

var score = 0;

function preload() {
  //  backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new (810,190,70,70);
    box2 = new (860,270,70,70);
    box3 = new (920,350,70,70);
    pig1 = new (810, 350,70,70);
    log1 = new (700,350,370, 70);
    box4 = new (760,270,70,70);
   

     = new (200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(.body,{x:200, y:50});
}

function draw(){
    background("white");

    noStroke();
    textFont("Impact")
    textSize(20)
    fill("Red")
    text("Score : " + score, width-300, 20); 

    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    

    .display();
    platform.display();
    //log6.display();
    slingshot.display();    
   
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(.body);
    }
}

