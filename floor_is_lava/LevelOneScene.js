import Scene from "../engine/Scene.js"
import RectangleGameObject from "./RectangleGameObject.js";
import FloorGameObject from "./FloorGameObject.js";
import LavaGameObject from "./LavaGameObject.js";
import LevelEndGameObject from "./LevelEndGameObject.js";
import Constants from "./Constants.js";

class LevelOneScene extends Scene {
    constructor(ctx) {
    super("Level One Scene");
    this.ctx = ctx;
    }
    start() {
        let width = 50;
        let height = 50;
        this.gameObjects.push(new FloorGameObject(0, this.ctx.canvas.height - 50, this.ctx.canvas.width, 50, Constants.platformColor));
        this.gameObjects.push(new LavaGameObject(100, this.ctx.canvas.height - 50, 250, 50, Constants.lavaColor, this.ctx));
        this.gameObjects.push(new LavaGameObject(600, this.ctx.canvas.height - 50, 400, 50, Constants.lavaColor, this.ctx));
        this.gameObjects.push(new LavaGameObject(1250, this.ctx.canvas.height - 50, 250, 50, Constants.lavaColor, this.ctx));
        this.gameObjects.push(new LevelEndGameObject(this.ctx.canvas.width - 50, this.ctx.canvas.height - 75, 50, 100, Constants.levelEndColor));
        this.gameObjects.push(new RectangleGameObject(0, this.ctx.canvas.height - 100, width, height, Constants.rectColor, true));
    
    }
}

export default LevelOneScene;