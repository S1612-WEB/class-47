var teacher , teacherImg
function preload(){ 
    backgroundImage = loadImage("classroom.jpg");
    playerImg = loadAnimation ("player1.png", "player2.png");
    teacherImg = loadImage("teacher.png");
    momImg = loadImage("mom.png");
    dadImg = loadImage("dad.png");

    aplusImg = loadImage("aplus.jpeg");
    ps4Img = loadImage("ps4.png");
    smartPhoneImg = loadImage("smartphone.png");
    footballImg = loadImage("FOOTBALL.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);

    player = createSprite(130, height-160)
    player.addAnimation("run" , playerImg)
    player.scale = 0.6
    player.frameDelay = 10
   player.loop = false

    ground = createSprite(width/2 , height+25 , width , 20)
    ground.visible = false

    treatsGroup = createGroup()


}

function draw(){
    background(backgroundImage);
  
    var n =  Math.round(random(1,3))

    if (n ==  1){ 
        createTeacher()
    }
    else if (n ==2){
        createMom()
    } 
    else {
        createDad()
    }

    if(keyDown("space")){
        aplus = createSprite(player.x+120 , player.y)
        aplus.addImage(aplusImg)
        aplus.velocityX = 7
        aplus.scale=0.2
    }

    if(keyDown("up")){
        player.velocityY = -10
    }

    player.velocityY += 1

    player.collide(ground)

    if(treatsGroup.isTouching(player)){
        for(var i=0;i<treatsGroup.length;i++){     
            
         if(treatsGroup[i].isTouching(player)){
            treatsGroup[i].destroy()
              //player.destroyEach()
             
            } 
        
        }
      }
      

    createTreats()

    drawSprites()
}

function createTeacher(){
    if(frameCount % 120 == 0){
        teacher = createSprite(width+50 , height-220)
        teacher.addImage(teacherImg)
        teacher.velocityX = -5
    }
}

function createMom(){
    if(frameCount % 150 == 0){
        mom = createSprite(width+50 , height-200)
        mom.addImage(momImg)
        mom.velocityX = -5
        mom.scale=1.4
    }
}

function createDad(){
    if(frameCount % 140 == 0){
        dad = createSprite(width+50 , height-250)
        dad.addImage(dadImg)
        dad.velocityX = -5
        dad.scale=1.6
    }
}



function createTreats(){
    if(frameCount % 100 == 0){
        //treats = createSprite( round(random(50 , width-50)) , 20)
        treats = createSprite( round(random(50 , 200)) , 20)

        n = round(random(1,3))

        if(n == 1){
            treats.addImage(ps4Img)
            
        }
        else if(n == 2){
            treats.addImage(smartPhoneImg)
            
        }
        else{
            treats.addImage(footballImg)
        }
        
        treats.velocityY = 5
        treats.scale=0.24
        treatsGroup.add(treats)
    }
}