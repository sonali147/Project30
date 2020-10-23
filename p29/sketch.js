const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, chain;
var ground, stand1, stand2;

var m1, m2, m3, m4, m5;
var m6, m7, m8, m9, m10;
var m11, m12, m13, m14, m15;
var m16, m17, m18, m19, m20;
var m21, m22, m23, m24, m25;

var score = 0;
var bg_color = "white";

function preload(){
    getTime();
}

function setup(){
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    polygon = new Polygon(300,500,30);
    ground = new Ground(width/2, height, width, 40);
    stand1 = new Ground(width/2, height-150, width/5, 10);
    stand2 = new Ground((2*width/3)+100, height-300, width/6, 10);
    chain = new Slingshot(polygon.body, {x:190,y:390});
    //STAND 1
    //level 1
    m1 = new Box(540,430);
    m2 = new Box(560,430);
    m3 = new Box(580,430);
    m4 = new Box(610,430);
    m5 = new Box(620,430);
    m6 = new Box(640,430);
    m7 = new Box(660,430);
    //level 2
    m8 = new Box(560,405);
    m9 = new Box(580,405);
    m10 = new Box(610,405);
    m11 = new Box(620,405);
    m12 = new Box(640,405);
    //level 3
    m13 = new Box(580,380);
    m14 = new Box(610,380);
    m15 = new Box(620,380);
    //level 4
    m16 = new Box(600,355);
    
    //STAND 2
    //level 1
    m17 = new Box(850,275);
    m18 = new Box(870,275);
    m19 = new Box(890,275);
    m20 = new Box(910,275);
    m21 = new Box(930,275);
    //level 2
    m22 = new Box(870,250);
    m23 = new Box(890,250);
    m24 = new Box(910,250);
    //level 3
    m25 = new Box(890,220);

}

function draw(){
    background(bg_color);
    
    Engine.update(engine);
    
    textSize(30);
    fill("crimson");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,50);
    textSize(20);
    fill("green");
    text("SCORE : " + score, 1000, 100);
    
    ground.display();
    stand1.display();
    stand2.display();
    
    chain.display();
    polygon.display();

    //STAND 1
    //level 1
    m1.display();
    m2.display();
    m3.display();
    m4.display();
    m5.display();
    m6.display();
    m7.display();
    //level 2
    m8.display();
    m9.display();
    m10.display();
    m11.display();
    m12.display();
     //level 3
    m13.display();
    m14.display();
    m15.display();
    //level 4
    m16.display();

    //STAND 2
    //level 1
    m17.display();
    m18.display();
    m19.display();
    m20.display();
    m21.display();
    //level 2
    m22.display();
    m23.display();
    m24.display();
    //level 2
    m25.display();

    m1.score();
    m2.score();
    m3.score();
    m4.score();
    m5.score();
    m6.score();
    m7.score();
    m8.score();
    m9.score();
    m10.score();
    m11.score();
    m12.score();
    m13.score();
    m14.score();
    m15.score();
    m16.score();
    m17.score();
    m18.score();
    m19.score();
    m20.score();
    m21.score();
    m22.score();
    m23.score();
    m24.score();
    m25.score();

    //text("X:" + mouseX + ", Y:" + mouseY, mouseX, mouseY);
    
}

function mouseDragged(){
    Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
    Body.setPosition(polygon.body, {x:300, y:300});
    chain.attach(polygon.body);
}

async function getTime(){
    var resp = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var resp_json = await resp.json();
    console.log(resp_json);
    var datetime = resp_json.datetime;
    var hour = datetime.slice(11,13);
    if(hour > 06 && hour < 19){
        bg_color = "cornflowerblue"
    } else {
        bg_color = "midnightblue"
    }
}