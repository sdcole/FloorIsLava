import Component from "../engine/Component.js";
import Input from "../engine/Input.js";
import Time from "../engine/Time.js";


class RectangleUpdateComponent extends Component {

    constructor(parent) {
        super(parent);

    }

    update(ctx) {
        let rectangle = this.parent.getComponent("Rectangle");
        
        

        if (rectangle.y >= ctx.canvas.height - 100) {
            this.onGround = true;
        }
        else {
            this.onGround = false;
        }



        if ((Input.getKey("ArrowLeft") == true || Input.getKey("a") == true) && rectangle.x > 0) {
            rectangle.x -= 10;
        }
        if ((Input.getKey("ArrowRight") == true || Input.getKey("d")) && rectangle.x < ctx.canvas.width - 50) {
            rectangle.x += 10;
        }

        if (!this.onGround && this.jumpTime <= 250) {
            rectangle.y += 4;
        
        }
        if ((Input.getKey(" ") == true || Input.getKey("ArrowUp") == true || Input.getKey("w") == true) && rectangle.y > 0 && this.onGround) {
            rectangle.y -= 4;
            this.jumpTime = 500;
           
        }
        else if(this.jumpTime > 250 && rectangle.y > 0 && !this.onGround) {

        }

        if (this.jumpTime > 250) {
            this.jumpTime -= 10;
            rectangle.y -= 4

        }

    }


    



}
export default RectangleUpdateComponent;

