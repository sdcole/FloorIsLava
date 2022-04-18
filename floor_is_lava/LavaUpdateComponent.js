import Component from "../engine/Component.js";
import Time from "../engine/Time.js";
import Game from "../engine/Game.js";


class LavaUpdateComponent extends Component {

    constructor(parent, x, y, w, h) {
        super(parent);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

    }
    update(ctx) {
        let rectangleGameObject = Game.findByType("RectangleGameObject")[0];
        let rectangleUpdateComponent = rectangleGameObject.getComponent("RectangleUpdateComponent");
        let rectangle = rectangleGameObject.getComponent("Rectangle");
        if (rectangleUpdateComponent.onGround && rectangle.x >= this.x && rectangle.x <= this.x + this.w - 50) {
            rectangle.x = 0;
            rectangle.y = ctx.canvas.height - 100;
            Time.timePassed = 0;
        }
        
    }



}
export default LavaUpdateComponent;