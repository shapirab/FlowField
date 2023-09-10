export default class Player {
    constructor(position, width, height, canvasWidth, canvasHeight, gravity){
        this.position = {
            x: position.x,
            y: position.y
        }
        this.width = width;
        this.height = height;
        this.velocity = 0;
        this.gravity = gravity;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }

    update(){
        if(this.position.y <= this.canvasHeight - this.height){
            this.position.y += this.velocity;
            this.velocity += this.gravity;
        }
    }

    draw(ctx){
        ctx.fillStyle = "gold";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}