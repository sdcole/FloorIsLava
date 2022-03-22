import GameObject from "../engine/GameObject.js";
import ElevatorUpdateComponent from "./ElevatorUpdateComponent.js";
import Rectangle from "../engine/Rectangle.js";
import ElevatorDraw from "../engine/ElevatorDraw.js";

class ElevatorGameObject extends GameObject {

    constructor(x, y, w, h, maxMoveWidth, maxMoveHeight) {
        super();
        this.components.push(new Rectangle(this, x, y, w, h));
        this.components.push(new ElevatorDraw(this));
        this.components.push(new ElevatorUpdateComponent(this, x, y, w, h, maxMoveWidth, maxMoveHeight));
        
    }

}
export default ElevatorGameObject;