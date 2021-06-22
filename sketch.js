var issImg, bg, spaceCraft1, spaceCraft2, spaceCraft3, spaceCraft4
var iss, spaceCraft, hasDocked = false
var undock

function preload(){
  bg = loadImage("spacebg.jpg")
  issImg = loadImage("iss.png")
  spaceCraft1 = loadImage("spacecraft1.png")
  spaceCraft2= loadImage("spacecraft2.png")
  spaceCraft3 = loadImage("spacecraft3.png")
  spaceCraft4 = loadImage("spacecraft4.png")

}

function setup() {
  createCanvas(800,500);
  spaceCraft = createSprite(300, 350)
  spaceCraft.addImage(spaceCraft1)
  spaceCraft.scale = 0.3
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg)
  undock = createSprite(750,470,70,30)
  undock.shapeColor = "blue"
  undock.visible = false
}

function draw() {
  background(bg); 
    if(!hasDocked){
      spaceCraft.x = Math.round(random(spaceCraft.x-1,spaceCraft.x+1))
    if(keyDown("left")) {
      spaceCraft.x -= 5
      spaceCraft.addImage(spaceCraft4)
      spaceCraft.scale = 0.3
    } else if(keyDown("right")){
      spaceCraft.x += 5
      spaceCraft.addImage(spaceCraft3)
      spaceCraft.scale = 0.3
    } else if(keyDown("up")){
      spaceCraft.y -= 5
      spaceCraft.addImage(spaceCraft1)
    } else if(keyDown("down")){
      spaceCraft.y += 5
      spaceCraft.addImage(spaceCraft2)
      spaceCraft.scale = 0.3
    }else{
      spaceCraft.addImage(spaceCraft1)
      spaceCraft.scale = 0.3
    }
  }
 
  if(spaceCraft.x === 330 && spaceCraft.y === 295){
    hasDocked = true
    spaceCraft.addImage(spaceCraft1)
    spaceCraft.scale = 0.3
    fill("dodgerblue")
    rect(720,450,70,30)
    fill("white")
    text("Undock",735,470)
    textSize(40)
    fill("white")
    text("Docking Sucessful",200, 450)
    if(mousePressedOver(undock)){
      spaceCraft.x = 300
      spaceCraft.y = 350
      hasDocked = false
    }
  }
  drawSprites();
}