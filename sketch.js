const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hunter,hunter_img;
var enemy,enemy_img;
var boss,boss_img;
var miniBoss,miniBoss_img;



function preload(){

	boss_img = loadAnimation("img1rem.png","img2rem.png","img3rem.png");
	miniBoss_img = loadAnimation("Screenshot1.png","Screenshot2.png");
	hunter_img = loadImage("hunter.png");
	enemy_img = loadAnimation("Screenshot3","Screenshot4");
	
}

function setup() {

	createCanvas(1300, 650);

	hunter = createSprite(1100,320,1,1)
	hunter.addImage(hunter_img);
	hunter.scale=0.2;

	//enemy_img = loadAnimation("enemy.gif");
	//enemy.addAnimation(enemy_img);

	boss = createSprite(110,320,20,50)
	boss.addAnimation("moving",boss_img);
	boss.scale=0.6;

	miniBoss = createSprite(550,320,1,1)
	miniBoss.addAnimation("attack",miniBoss_img);
	miniBoss.scale=0.8;

	enemy = createSprite(600,320,1,1)
	enemy.addAnimation("attack",enemy_img);
	enemy.scale=0.12;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    // hunter = new Hunter(400,400,1,1);
	 //enemy = new Enemy(800,800,1,1);
	// boss = new boss(600,600,1,1);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  //hunter.scale = 1.2;
  //hunter.display();

  //enemy.scale = 1.2;
  //enemy.display();

  //boss.scale = 1.2;
  //boss.display();

  drawSprites();

}



