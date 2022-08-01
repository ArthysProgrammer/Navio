var ship ,ship_running;
var sea, seaImage;


function preload(){//PRÉ-CARREGAMENTO DOS ARQUIVOS DE IMAGEM E DE SOM
  ship_running = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
  seaImage = loadImage("sea.png")
}

function setup(){//CRIAR COISAS
  createCanvas(400,400)
  
  sea = createSprite(200,200,400,400)
  sea.addImage(seaImage)

  ship = createSprite(200,200,100,100)
  ship.addAnimation("running", ship_running)
  ship.scale = 0.5
}


function draw(){
  background(200)

  drawSprites()
}