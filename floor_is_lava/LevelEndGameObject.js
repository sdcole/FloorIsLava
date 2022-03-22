import GameObject from "../engine/GameObject.js";
import LevelEndUpdateComponent from "./LevelEndUpdateComponent.js";
import Rectangle from "../engine/Rectangle.js";
import LevelEndDraw from "../engine/LevelEndDraw.js";

class LavaGameObject extends GameObject {

    constructor(x, y, w, h) {
        super();
        this.components.push(new Rectangle(this, x, y, w, h));
        this.components.push(new LevelEndDraw(this));
        this.components.push(new LevelEndUpdateComponent(this, x, y, w, h));
        
    }

}
export default LavaGameObject;