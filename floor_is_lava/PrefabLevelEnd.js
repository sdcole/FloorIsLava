import PrefabRectangle from "../engine/prefabs/PrefabRectangle.js";
import LevelEndController from "./LevelEndController.js";
import Constants from "./Constants.js";

class PrefabLevelEnd extends PrefabRectangle{
  constructor(name, x, y, w, h){
    super(name, x, y, w, h);
  }

  start(){
    super.start();
    this.getComponent("RectangleDraw").fillStyle = Constants.levelEndColor;
    this.components.push(new LevelEndController(this));
  }

}

export default PrefabLevelEnd;