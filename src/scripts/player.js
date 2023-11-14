export default class Player {
    constructor(position, width, height, canvasWidth, canvasHeight, gravity){
        this.position = {
            x: position.x,
            y: position.y
        }
        this.width = width;
        this.height = height;
        this.velocity = {
          x: 0,
          y: 0  
        };
        this.gravity = gravity;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }

    update(){
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if(this.position.y <= this.canvasHeight - this.height){
            this.velocity.y += this.gravity;
        }
        else{
            this.velocity.y = 0;
        }

        
    }

    draw(ctx){
        ctx.fillStyle = "gold";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}