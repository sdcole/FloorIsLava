import GameObject from "../engine/GameObject.js";
import LavaUpdateComponent from "./LavaUpdateComponent.js";
import Rectangle from "../engine/Rectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js";

class LavaGameObject extends GameObject {

    constructor(x, y, w, h, color, ctx) {
        super();
        this.components.push(new Rectangle(this, x, y, w, h, color));
        this.components.push(new RectangleDraw(this));
        this.components.push(new LavaUpdateComponent(this, x, y, w, h, ctx));
        
    }

}
export default LavaGameObject;