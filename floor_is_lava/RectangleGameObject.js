import GameObject from "../engine/GameObject.js";
import RectangleUpdateComponent from "./RectangleUpdateComponent.js";
import Rectangle from "../engine/Rectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js"
class RectangleGameObject extends GameObject {

    constructor(x, y, w, h, color, onGround) {
        super();
        this.lives = 3;
        this.onGround = onGround;
        this.jumpTime = 0;
        this.components.push(new Rectangle(this, x, y, w, h, color))
        this.components.push(new RectangleDraw(this));
        this.components.push(new RectangleUpdateComponent(this, x, y, w, h, this.onGround));
        
        
    }

}
export default RectangleGameObject;