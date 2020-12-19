class Ground{
constructor(x,y,width,height){
   var option={ 
       isStatic:true
   }
    this.body=Matter.Bodies.rectangle(x,y,width,height,option)
    World.add(world,this.body)
    this.w=width;
    this.h=height;
}
display()
{
    rectMode(CENTER)
    fill("yellow")
     rect(this.body.position.x,this.body.position.y,this.w,this.h) 
}
}