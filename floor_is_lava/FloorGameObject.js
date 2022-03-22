import GameObject from "../engine/GameObject.js";
import FloorUpdateComponent from "./FloorUpdateComponent.js";
import Rectangle from "../engine/Rectangle.js";
import FloorDraw from "../engine/FloorDraw.js";

class FloorGameObject extends GameObject {

    constructor(x, y, w, h) {
        super();
        this.components.push(new Rectangle(this, x, y, w, h));
        this.components.push(new FloorDraw(this));
        this.components.push(new FloorUpdateComponent(this, x, y, w, h));
        
    }

}
export default FloorGameObject;