class Ball {
    constructor(x, y, width, height, angle) {
        var options = {
            friction:0.005,
            density:10.0
        };
        console.log("l");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
      display(){
        //pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //ellipseMode(CENTER);
        ellipse(0,0, this.width, this.height);
        pop();
      }
}