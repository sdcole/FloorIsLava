import Scene from "../engine/Scene.js"
import RectangleGameObject from "./RectangleGameObject.js";
import FloorGameObject from "./FloorGameObject.js";
import LavaGameObject from "./LavaGameObject.js";
import LevelEndGameObject from "./LevelEndGameObject.js";
import ElevatorGameObject from "./ElevatorGameObject.js";
import Constants from "./Constants.js";

class LevelTwoScene extends Scene {
    constructor(ctx) {
    super("Level One Scene");
    let width = 50;
    let height = 50;
    this.ctx = ctx;
    }
    start() {
        let width = 50;
        let height = 50;
        this.gameObjects.push(new FloorGameObject(0, this.ctx.canvas.height - 50, this.ctx.canvas.width, 50, Constants.platformColor));
        this.gameObjects.push(new LevelEndGameObject(this.ctx.canvas.width - 50, this.ctx.canvas.height - 75, 50, 100, Constants.levelEndColor));
        this.gameObjects.push(new ElevatorGameObject(this.ctx.canvas.width - 500, this.ctx.canvas.width + 50, 200, 10, 0, 750, Constants.platformColor))
        this.gameObjects.push(new RectangleGameObject(0, this.ctx.canvas.height - 100, width, height, Constants.rectColor, true));
    
    }
    
}

export default LevelTwoScene;