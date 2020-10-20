class Box{
    constructor(x,y){
        var options = {
            restitution: 0.4,
            friction: 0.001
        }
        this.width = 30;
        this.height = 40;
        this.body = Bodies.rectangle(x,y,this.width,this.height, options);
        World.add(world, this.body);
        this.visibility = 255;
        
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        if(this.body.speed < 3){
            push();
            fill("orangered");
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
        } else {
            World.remove(world, this.body);
            this.visibility -= 5;
            push();
            if(this.visibility < 0){
                noStroke();
            }
            fill(255,0,0, this.visibility);
            rectMode(CENTER);
            rect(pos.x, pos.y, this.width, this.height);
            pop();
        }
        pop();
    }
}