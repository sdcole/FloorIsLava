import Component from "../engine/Component.js";
import Game from "../engine/Game.js";

class LevelEndUpdateComponent extends Component {

    constructor(parent, x, y, w, h) {
        super(parent);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

    }
    update() {
        let rectangleGameObject = Game.findByType("RectangleGameObject")[0];
        let rectangleUpdateComponent = rectangleGameObject.getComponent("RectangleUpdateComponent");
        let rectangle = rectangleGameObject.getComponent("Rectangle");

        if (rectangleUpdateComponent.onGround && rectangle.x >= this.x - 50 && rectangle.x <= this.x + this.w) {
            Game.changeScene(Game.currentSceneIndex + 1);
        }
    }

}
export default LevelEndUpdateComponent;