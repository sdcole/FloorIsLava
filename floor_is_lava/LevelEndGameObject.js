import GameObject from "../engine/GameObject.js";
import LevelEndUpdateComponent from "./LevelEndUpdateComponent.js";
import Rectangle from "../engine/Rectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js";

class LavaGameObject extends GameObject {

    constructor(x, y, w, h, color) {
        super();
        this.components.push(new Rectangle(this, x, y, w, h, color));
        this.components.push(new RectangleDraw(this));
        this.components.push(new LevelEndUpdateComponent(this, x, y, w, h));
        
    }

}
export default LavaGameObject;