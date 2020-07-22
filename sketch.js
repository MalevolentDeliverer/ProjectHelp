var car,wall;

var speed,weight;



var deformation;

deformation = 0.5 * weight * speed * speed/22500;

function setup() {
  createCanvas(1200,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1100,200,60,height/2);
  speed = random(55,90);
weight = random(400,1500);



}



function draw() {
  background("black");  


  car.velocityX = speed;
  if(car.x-wall.x < car.width/2 + wall.width/2 &&
    wall.x-car.x < wall.width/2 + car.width/2 && 
    wall.y-car.y < wall.height/2 + car.height/2 &&
    wall.y-car.y < wall/2 + car.height/2){
      car.velocityX = 0;
      car.x= 1050;
      //deformation;
    }

  
  drawSprites();
}