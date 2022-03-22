import GameObject from "../engine/GameObject.js";
import RectangleUpdateComponent from "./RectangleUpdateComponent.js";
import Rectangle from "../engine/Rectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js"
class RectangleGameObject extends GameObject {

    constructor(x, y, w, h, onGround) {
        super();
        this.components.push(new Rectangle(this, x, y, w, h))
        this.components.push(new RectangleDraw(this));
        this.components.push(new RectangleUpdateComponent(this, x, y, w, h, onGround));
        
    }

}
export default RectangleGameObject;