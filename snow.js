class snows{
    constructor(x,y){
        this.body=Bodies.circle(x,y,30)
        World.add(world,this.body)
        this.image=loadImage("snow4.png")
        
    }
    display(){
        imageMode(RADIUS)
        image(this.image,this.body.position.x,this.body.position.y,30,30)
        
    }
}