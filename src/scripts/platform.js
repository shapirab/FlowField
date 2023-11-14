
export default class Platform{
    constructor(position, image){
        this.position = {
            x: position.x,
            y: position.y
        }
        this.image = image;       
        this.width = image.width;
        this.height = image.height;
        this.velocityX = 0;
    }

    update(){
        this.position.x += this.velocityX;
    }

    draw(ctx){
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }
}