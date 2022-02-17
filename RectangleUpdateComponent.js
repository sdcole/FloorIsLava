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

        if (this.y >= ctx.canvas.height - 100) {
            this.onGround = true;
        }
        else {
            this.onGround = false;
        }

        if (this.onGround && this.x < 201) {
            this.reset();
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

        if (!this.onGround && this.jumpTime <= 250) {
           this.y += 4;
        
        }
        if ((spaceIsPressed  || upIsPressed) && this.y > 0 && this.onGround) {
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
        this.x = ctx.canvas.width / 2 - 50;
        this.y = ctx.canvas.height / 2 - 50;
    }

    



}

