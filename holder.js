class Holder{
    constructor(){
        var holder_options={
            isStatic: true
          }
        
        this.holder = Bodies.rectangle(200,100,200,10,holder_options);
        World.add(world,this.holder);
    }
    display(){
        noStroke();
        fill ("lightpink");
        rectMode(CENTER);
        rect(this.holder.position.x,this.holder.position.y,200,10);
        
    }
}