import Player from "./player.js";

export default class Input{
    constructor(player){
        this.player = player;
        this.keys = {
            right: {
                pressed: false
            },
            left: {
                pressed: false
            },
            up: {
                pressed: false
            }
        }

        window.addEventListener('keydown', (e) => {
            switch(e.key){
                case 'ArrowUp':
                    //this.player.velocity.y -= 20;
                    this.keys.up.pressed = true;
                    break;
                case 'ArrowDown':
                    console.log('down');
                    break;
                case 'ArrowRight':
                    //this.player.velocity.x = 1;
                    this.keys.right.pressed = true;
                    break;
                case 'ArrowLeft':
                    this.keys.left.pressed = true;                    
                    break;
            }
        });
        window.addEventListener('keyup', (e) => {
            switch(e.key){
                case 'ArrowUp':  
                    this.keys.up.pressed = false;                
                    break;
                case 'ArrowDown':
                    break;
                case 'ArrowRight':
                    //this.player.velocity.x = 0;
                    this.keys.right.pressed = false;
                    break;
                case 'ArrowLeft':
                    this.keys.left.pressed = false;
                    break;
            }
        });
    }


}