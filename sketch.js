var garden, rabbit, apple, orangeleaf,redleaf;
var gardenimg,rabbitimg,carrotimg,orangeimg, appleimg;


function preload(){
  gardenimg = loadImage("garden.png");
  rabbitimg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png");
  orangeimg = loadImage("orangeLeaf.png");
  redimg = loadImage("redImage.png");
}


function setup(){
  createCanvas(400,400);

  garden=createSprite(200,200);
  garden.addImage(gardenimg);


  rabbit = createSprite(160,340,20,20);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitimg);
}

function draw() {
  background(0);
  
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  drawSprites();
  
  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else if (select_sprites == 2) {
      createOrange();
    }else if (select_sprites == 3) {
      createRed();
    }
  }

}

function createApples() {
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.addImage(appleimg);
  apple.scale=0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
  
}

function createOrange() {
  orangeleaf = createSprite(random(50, 350),40, 10, 10);
  orangeleaf.addImage(orangeimg);
  orangeleaf.scale=0.08;
  orangeleaf.velocityY = 3;
  orangeleaf.lifetime = 150;
}

function createRed() {
  redleaf = createSprite(random(50, 350),40, 10, 10);
  redleaf.addImage(redimg);
  redleaf.scale=0.06;
  redleaf.velocityY = 3;
  redleaf.lifetime = 150;
}
