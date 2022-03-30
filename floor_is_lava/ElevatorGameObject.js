import GameObject from "../engine/GameObject.js";
import ElevatorUpdateComponent from "./ElevatorUpdateComponent.js";
import Rectangle from "../engine/Rectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js";

class ElevatorGameObject extends GameObject {

    constructor(x, y, w, h, maxMoveWidth, maxMoveHeight, color) {
        super();
        this.components.push(new Rectangle(this, x, y, w, h, color));
        this.components.push(new RectangleDraw(this));
        this.components.push(new ElevatorUpdateComponent(this, x, y, w, h, maxMoveWidth, maxMoveHeight));
        
    }

}
export default ElevatorGameObject;