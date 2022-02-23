import Component from "../engine/Component.js";
import Input from "../engine/Input.js"
import Time from "../engine/Time.js";
let canvas = document.querySelector("#canv");
let ctx = canvas.getContext("2d");
class RectangleUpdateComponent extends Component {

    constructor(parent, x, y, width, height, onGround, jumpTime) {
        super(parent);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.onGround = onGround;
        this.jumpTime = jumpTime;

    }

    update() {

        
    
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        if (this.y >= ctx.canvas.height - 100) {
            this.onGround = true;
        }
        else {
            this.onGround = false;
        }

        //First lava block collision test.
        if (this.onGround && this.x >= 100 && this.x <= 300 ) {
            this.reset();
        }

        //Second lava bloc collision test.
        if (this.onGround && this.x >= 400 && this.x <= 700) {
            this.reset();
        }


        if ((Input.getKey("ArrowLeft") == true || Input.getKey("a") == true) && this.x > 0) {
            this.x -= 10;
        }
        if ((Input.getKey("ArrowRight") == true || Input.getKey("d")) && this.x < ctx.canvas.width - 50) {
            this.x += 10;
        }
        /*if (upIsPressed && rectangle.y > 0) {
            rectangle.y -= 10;
        }
        
        if (downIsPressed && rectangle.y < ctx.canvas.height - 50) {
            rectangle.y += 10;
        }
        */

        if (!this.onGround && this.jumpTime <= 250) {
           this.y += 4;
        
        }
        if ((Input.getKey(" ") == true || Input.getKey("ArrowUp") == true || Input.getKey("w") == true) && this.y > 0 && this.onGround) {
           this.y -= 4;
           this.jumpTime = 500;
           
        }
        else if(this.jumpTime > 250 && this.y > 0 && !this.onGround) {

        }

        if (this.jumpTime > 250) {
            this.jumpTime -= 10;
            this.y -= 4

        }
        

    }

    reset() {
        this.x = 0;
        this.y = ctx.canvas.height - 100;
        Time.timePassed = 0;
    }

    



}
export default RectangleUpdateComponent;

