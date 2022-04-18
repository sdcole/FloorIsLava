import Component from "../engine/Component.js";
import Game from "../engine/Game.js";

class ElevatorUpdateComponent extends Component {

    constructor(parent, x, y, width, height, minMoveHeight,ctx) {
        super(parent);

        this.ctx = ctx;
        this.minMoveHeight = minMoveHeight;
        this.goingUp = true;


    }
    update(ctx) {

        let elevatorRectangle = this.parent.getComponent("Rectangle");
        let rectangleGameObject = Game.findByType("RectangleGameObject")[0];
        let characterRectangle = rectangleGameObject.getComponent("Rectangle");


        if (elevatorRectangle.y <= this.minMoveHeight) {
            this.goingUp = false;
        }
        if (elevatorRectangle.y >= ctx.canvas.height - 50) {
            this.goingUp = true;
        }
        if (this.goingUp) {
            elevatorRectangle.y -= 2;
            if (characterRectangle.x > elevatorRectangle.x && characterRectangle.x < elevatorRectangle.x + this.width) {
                console.log(characterRectangle.y + "WOO");
                characterRectangle.y -= 2;
                characterRectangle.onGround = true;
            }
        }
        else {
            elevatorRectangle.y += 2;
            console.log(characterRectangle.y + "WOO");
            if (characterRectangle.x > elevatorRectangle.x && characterRectangle.x < elevatorRectangle.x + this.width) {
                characterRectangle.y += 2;
                characterRectangle.onGround = true;
            }
        }

        console.log(elevatorRectangle.y);
    }

}
export default ElevatorUpdateComponent;