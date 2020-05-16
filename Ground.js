class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(200,330,400,20,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      noStroke();
      fill(0);
      rectMode(CENTER);
      rect(pos.x, pos.y, 400, 20);
      //rectMode(CENTER);
      /* fill("brown");
      rect(pos.x, pos.y, this.width, this.height); */
    }
};