import Player from "./player.js";

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

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    player.draw(ctx);
}

animate();