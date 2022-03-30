import Scene from "../engine/Scene.js"
import RectangleGameObject from "./RectangleGameObject.js";
import FloorGameObject from "./FloorGameObject.js";
import LavaGameObject from "./LavaGameObject.js";
import LevelEndGameObject from "./LevelEndGameObject.js";
import Constants from "./Constants.js";

class LevelOneScene extends Scene {
    constructor(ctx) {
    super("Level One Scene");
    let width = 50;
    let height = 50;
    this.ctx = ctx;
    this.gameObjects.push(new FloorGameObject(0, ctx.canvas.height - 50, ctx.canvas.width, 50, Constants.platformColor));
    this.gameObjects.push(new LavaGameObject(100, ctx.canvas.height - 50, 250, 50, Constants.lavaColor));
    this.gameObjects.push(new LavaGameObject(600, ctx.canvas.height - 50, 400, 50, Constants.lavaColor));
    this.gameObjects.push(new LavaGameObject(1250, ctx.canvas.height - 50, 250, 50, Constants.lavaColor));
    this.gameObjects.push(new LevelEndGameObject(ctx.canvas.width - 50, ctx.canvas.height - 75, 50, 100, Constants.levelEndColor));
    this.gameObjects.push(new RectangleGameObject(0, ctx.canvas.height - 100, width, height, Constants.rectColor, false));
    
    }
}

export default LevelOneScene;