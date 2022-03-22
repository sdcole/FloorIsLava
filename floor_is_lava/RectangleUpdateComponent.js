import Component from "../engine/Component.js";
import Input from "../engine/Input.js";
import Time from "../engine/Time.js";


class RectangleUpdateComponent extends Component {

    constructor(parent, onGround) {
        super(parent);

        this.onGround = onGround;
        this.jumpTime = 0;

    }

    update(ctx) {

        let rectangle = this.parent.getComponent("Rectangle");
    
        

        if (rectangle.y >= ctx.canvas.height - 100) {
            this.onGround = true;
        }
        else {
            this.onGround = false;
        }

        //First lava block collision test.
        if (this.onGround && rectangle.x >= 100 && rectangle.x <= 300 ) {
            rectangle.x = 0;
            rectangle.y = ctx.canvas.height - 100;
            Time.timePassed = 0;
        }

        //Second lava bloc collision test.
        if (this.onGround && rectangle.x >= 400 && rectangle.x <= 750) {
            rectangle.x = 0;
            rectangle.y = ctx.canvas.height - 100;
            Time.timePassed = 0;
        }


        if ((Input.getKey("ArrowLeft") == true || Input.getKey("a") == true) && rectangle.x > 0) {
            rectangle.x -= 10;
        }
        if ((Input.getKey("ArrowRight") == true || Input.getKey("d")) && rectangle.x < ctx.canvas.width - 50) {
            rectangle.x += 10;
        }
        /*if (upIsPressed && rectangle.y > 0) {
            rectangle.y -= 10;
        }
        
        if (downIsPressed && rectangle.y < ctx.canvas.height - 50) {
            rectangle.y += 10;
        }
        */

        if (!this.onGround && this.jumpTime <= 250) {
            rectangle.y += 4;
        
        }
        if ((Input.getKey(" ") == true || Input.getKey("ArrowUp") == true || Input.getKey("w") == true) && rectangle.y > 0 && this.onGround) {
            console.log("Jump Pressed");
            rectangle.y -= 4;
            this.jumpTime = 500;
           
        }
        else if(this.jumpTime > 250 && rectangle.y > 0 && !this.onGround) {

        }

        if (this.jumpTime > 250) {
            console.log(this.jumpTime);
            this.jumpTime -= 10;
            rectangle.y -= 4

        }
        

    }

    reset() {
        
    }

    



}
export default RectangleUpdateComponent;

