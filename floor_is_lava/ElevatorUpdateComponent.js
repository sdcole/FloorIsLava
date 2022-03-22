import Component from "../engine/Component.js";

class ElevatorUpdateComponent extends Component {

    constructor(parent, x, y, width, height, maxMoveWidth, minMoveHeight) {
        super(parent);

        this.maxMoveWidth = maxMoveWidth;
        this.minMoveHeight = minMoveHeight;
        this.goingUp = true;


    }
    update(ctx) {

        let rectangle = this.parent.getComponent("Rectangle");
    

        if (rectangle.y <= this.minMoveHeight) {
            this.goingUp = false;
        }
        if (rectangle.y >= ctx.canvas.height - 50) {
            this.goingUp = true;
        }
        if (this.goingUp) {
            rectangle.y -= 2;
        }
        else {
            rectangle.y += 2;
        }


    }

}
export default ElevatorUpdateComponent;