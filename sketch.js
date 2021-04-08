const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1, box2,box3,box4,box5,ball1, rope,ground;
var box11, box12,box13,box14,box15

function setup(){
    var canvas = createCanvas(1400,580);
    engine = Engine.create();
    world = engine.world;
 
    ground= new Ground(700,560,1400,40);
   
    box1= new Box(900,100,70,70);
    box2= new Box(900,100,70,70);
    box3= new Box(900,100,70,70);
    box4= new Box(900,100,70,70);
    box5= new Box(900,100,70,70);

    box11= new Box(800,100,70,70);
    box12= new Box(800,100,70,70);
    box13= new Box(800,100,70,70);
    box14= new Box(800,100,70,70);
    box15= new Box(800,100,70,70);
    box16= new Box(800,100,70,70);
    box17= new Box(800,100,70,70);

    box21= new Box(700,100,70,70);
    box22= new Box(700,100,70,70);
    box23= new Box(700,100,70,70);
    box24= new Box(700,100,70,70);
    box25= new Box(700,100,70,70);

    ball1= new Ball(200,200,60,60);
    rope= new Rope(ball1.body,{x:500,y:50});

   // b = new Ball(100,100,20,20);
    console.log("a");
    //slingshot = new Sling(bird.body,{x:200, y:50});
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();

    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    ball1.display();
    rope.display();
}

function mouseDragged(){
    //if (gameState!=="launched"){
        console.log("ss");
        Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
    //}
}

/*
function mouseReleased(){
    slingshot.fly();
    //gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 1){
       bird.trajectory = [];
       Matter.Body.setPosition(bird.body,{x:200, y:50});
       slingshot.attach(bird.body);
    }
}
*/
