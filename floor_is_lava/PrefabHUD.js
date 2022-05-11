import PrefabRectangle from "../engine/prefabs/PrefabRectangle.js";
import HUDController from "./HUDController.js";
import Constants from "./Constants.js";

class PrefabHUD extends PrefabRectangle{
  constructor(name, x, y, w, h){
    super(name, x, y, w, h);
  }

  start(){
    super.start();
    this.getComponent("RectangleDraw").fillStyle = Constants.HUDColor;
    this.components.push(new HUDController(this));
    
  }

}

export default PrefabHUD;