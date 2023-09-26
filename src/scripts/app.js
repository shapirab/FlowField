import Player from "./player.js";
import Input from './input.js';

const canvas = document.getElementById('main-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');
let gravity = 0.3;

let position = {
    x: 30,
    y: 30
}
let player = new Player(position, 100, 100, canvas.width, canvas.height, gravity);
let input = new Input(player);

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    if(input.keys.up.pressed){
        player.velocity.y = -10;
    }
    if(input.keys.right.pressed){
        player.velocity.x = 5;
    }
    else if(input.keys.left.pressed){
        player.velocity.x = -5;
    }
    else{
        player.velocity.x = 0;
    }

    player.draw(ctx);
}

animate();