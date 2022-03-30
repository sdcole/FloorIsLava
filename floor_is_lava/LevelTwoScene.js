import Scene from "../engine/Scene.js"
import RectangleGameObject from "./RectangleGameObject.js";
import FloorGameObject from "./FloorGameObject.js";
import LavaGameObject from "./LavaGameObject.js";
import LevelEndGameObject from "./LevelEndGameObject.js";
import Constants from "./Constants.js";

class LevelTwoScene extends Scene {
    constructor(ctx) {
    super("Level One Scene");
    let width = 50;
    let height = 50;
    this.ctx = ctx;
    }
    loadLevel() {

    
    this.gameObjects.push(new FloorGameObject(0, ctx.canvas.height - 50, ctx.canvas.width, 50, Constants.platformColor));

    this.gameObjects.push(new RectangleGameObject(0, ctx.canvas.height - 100, width, height, Constants.rectColor, false));
    }
    
}

export default LevelTwoScene;