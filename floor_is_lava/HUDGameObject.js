import GameObject from "../engine/GameObject.js";
import HUDUpdateComponent from "./HUDUpdateComponent.js";
import Rectangle from "../engine/Rectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js";
import Constants from "./Constants.js";
import Circle from "../engine/Circle.js";
import CircleDraw from "../engine/CircleDraw.js";
import PrefabTextSmall from "../engine/prefabs/PrefabTextSmall.js";
import Game from "../engine/Game.js";

class HUDGameObject extends GameObject {

    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.components.push(new Rectangle(this, -250, 0, 500, 100, Constants.HUDColor));
        this.components.push(new RectangleDraw(this));
        this.components.push(new HUDUpdateComponent(this, this, 0, 100, this.ctx.canvas.width, 100));
        
    }

}
export default HUDGameObject;