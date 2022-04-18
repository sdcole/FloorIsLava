import Scene from "../engine/Scene.js"
import RectangleGameObject from "./RectangleGameObject.js";
import FloorGameObject from "./FloorGameObject.js";
import LavaGameObject from "./LavaGameObject.js";
import ElevatorGameObject from "./ElevatorGameObject.js";
import Constants from "./Constants.js";

class LevelFourScene extends Scene {
    constructor(ctx) {
    super("Level Four Scene");
    this.ctx = ctx;
    }

    start() {
        let width = 50;
        let height = 50;
        this.gameObjects.push(new FloorGameObject(0, this.ctx.canvas.height - 50, this.ctx.canvas.width, 50, Constants.platformColor));


        this.gameObjects.push(new ElevatorGameObject(500, this.ctx.canvas.height - 100, 250, 25, 250));
        this.gameObjects.push(new RectangleGameObject(0, this.ctx.canvas.height - 100, width, height, Constants.rectColor, true));
    
    }
    
}

export default LevelFourScene;