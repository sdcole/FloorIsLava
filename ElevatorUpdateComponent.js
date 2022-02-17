class ElevatorUpdateComponent extends Component {

    constructor(parent, x, y, width, height, maxMoveWidth, maxMoveHeight) {
        super(parent);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.maxMoveWidth = maxMoveWidth;
        this.maxMoveHeight = maxMoveHeight;


    }
    update() {
        let goingUp = true;
        if (y <= this.maxMoveHeight) {
            goingUp = false;
        }
        if (y <= ctx.canvas.height - 50) {
            goingUp = true;
        }
        if (goingUp) {
            this.y -= 2;
        }
        else {
            this.y += 2;
        }

    }

}