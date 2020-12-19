class Paper{
    constructor(x,y){
       var option=
       { 
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
      }
        this.body=Matter.Bodies.circle(x,y,10,option)
        World.add(world,this.body)
        this.image=loadImage("paperImage.png")
        
    }
    display()
    {
        imageMode(CENTER)
        fill("pink")
        image(this.image,this.body.position.x,this.body.position.y,40,40) 
    }
    }