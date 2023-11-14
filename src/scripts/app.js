import Player from "./player.js";
import Input from './input.js';
import Platform from "./platform.js";

const canvas = document.getElementById('main-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');
let gravity = 0.3;
let ground = canvas.height - platformImg.height;
let gapFiller = 2;

let position = {
    x: 30,
    y: 30
}
let platforms = [
    new Platform({x: 0, y: ground}, platformImg), 
    new Platform({x: platformImg.width - gapFiller, y: ground}, platformImg)
];

let player = new Player(position, 100, 100, canvas.width, canvas.height, gravity);
let input = new Input();
let upVelocity = -10;
let sideVelocity = 5;
let rightBorder = 400;
let leftBorder = 100;
let platformsScrollOffset = 0;
let win = false;
let winValue = 1500;
let gameOver = false;

function animate(){
    if(!win){
        requestAnimationFrame(animate);
    };
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    if(input.keys.up.pressed){
        player.velocity.y = upVelocity;
    }

    if(input.keys.right.pressed && player.position.x < rightBorder){
        player.velocity.x = sideVelocity;
    }
    else if(input.keys.left.pressed && player.position.x > leftBorder){
        player.velocity.x = -sideVelocity;
    }
    else{
        player.velocity.x = 0;
    }

    platforms.forEach((platform) => {
        //platform (rectangle) collision detection
        if(player.position.y + player.height <= platform.position.y &&
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width){
                player.velocity.y = 0;          
        }
    
        //side scroller
        if(input.keys.right.pressed){
            platformsScrollOffset += 5;
            platform.velocityX = -sideVelocity;
        }
        else if(input.keys.left.pressed){
            platformsScrollOffset -= 5;
            platform.velocityX = sideVelocity;
        }
        else{
            platform.velocityX = 0;
        }
        
        platform.draw(ctx);
        platform.update();
    });

    player.draw(ctx);

    if(platformsScrollOffset >= winValue){
        console.log('win')
        win = true;
        gameOver = true;        
    }
}

animate();