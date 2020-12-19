class Rect
{
   
   constructor(x,y,width,height)
   {
   var option={
      isStatic:true
   }
      this.body=Matter.Bodies.rectangle(x,y,width,height,option)
      World.add(world,this.body)
      this.image=loadImage("dustbingreen.png")
      
      this.w=width;
      this.h=height;
   }


display()
{
  
   imageMode(CENTER)

   image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
}
}