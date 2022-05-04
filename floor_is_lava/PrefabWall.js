import PrefabRectangle from "../engine/prefabs/PrefabRectangle.js";
import Constants from "./Constants.js";

class PrefabWall extends PrefabRectangle {
    constructor(name, x, y, w, h) {
        super(name, x, y, w, h);
    }

    start() {
        super.start();
        this.getComponent("RectangleDraw").fillStyle = Constants.wallColor;
    }
}

export default PrefabWall;