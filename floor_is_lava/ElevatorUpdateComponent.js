import Component from "../engine/Component.js";

class ElevatorUpdateComponent extends Component {

    constructor(parent, x, y, width, height, maxMoveWidth, minMoveHeight) {
        super(parent);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.maxMoveWidth = maxMoveWidth;
        this.minMoveHeight = minMoveHeight;
        this.goingUp = true;


    }
    update() {

        let canvas = document.querySelector("#canv");
        let ctx = canvas.getContext("2d");
    
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        if (this.y <= this.minMoveHeight) {
            this.goingUp = false;
        }
        if (this.y >= ctx.canvas.height - 50) {
            this.goingUp = true;
        }
        if (this.goingUp) {
            this.y -= 2;
        }
        else {
            this.y += 2;
        }


    }

}
export default ElevatorUpdateComponent;