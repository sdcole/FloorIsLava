import GameObject from "../engine/GameObject.js";
import FloorUpdateComponent from "./FloorUpdateComponent.js";
import Rectangle from "../engine/Rectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js";

class FloorGameObject extends GameObject {

    constructor(x, y, w, h, color) {
        super();
        this.components.push(new Rectangle(this, x, y, w, h, color));
        this.components.push(new RectangleDraw(this));
        this.components.push(new FloorUpdateComponent(this, x, y, w, h));
        
    }

}
export default FloorGameObject;