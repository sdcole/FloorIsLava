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
        if (this.y >= ctx.canvas.height - 50) {
            this.onGround = true;
        }
        else {
            this.onGround = false;
        }

        if (leftIsPressed && this.x > 0) {
            this.x -= 10;
        }
        if (rightIsPressed && this.x < ctx.canvas.width - 50) {
            this.x += 10;
        }
        /*if (upIsPressed && rectangle.y > 0) {
            rectangle.y -= 10;
        }
        
        if (downIsPressed && rectangle.y < ctx.canvas.height - 50) {
            rectangle.y += 10;
        }
        */

        if (!this.onGround && this.jumpTime <= 500) {
           this.y += 2;
        
        }
        if (spaceIsPressed && this.y > 0 && this.onGround) {
           this.y -= 2;
           this.jumpTime = 1000;
           
        }
        else if(this.jumpTime > 500 && this.y > 0 && !this.onGround) {

        }

        if (this.jumpTime > 500) {
            this.jumpTime -= 10;
            this.y -= 2

        }

    }


}