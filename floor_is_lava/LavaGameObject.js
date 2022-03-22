import GameObject from "../engine/GameObject.js";
import LavaUpdateComponent from "./LavaUpdateComponent.js";
import Rectangle from "../engine/Rectangle.js";
import LavaDraw from "../engine/LavaDraw.js";

class LavaGameObject extends GameObject {

    constructor(x, y, w, h) {
        super();
        this.components.push(new Rectangle(this, x, y, w, h));
        this.components.push(new LavaDraw(this));
        this.components.push(new LavaUpdateComponent(this, x, y, w, h));
        
    }

}
export default LavaGameObject;