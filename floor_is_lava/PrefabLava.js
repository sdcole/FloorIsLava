import PrefabRectangle from "../engine/prefabs/PrefabRectangle.js";
import LavaController from "./LavaController.js";
import Constants from "./Constants.js";

class PrefabLava extends PrefabRectangle{
  constructor(name, x, y, w, h){
    super(name, x, y, w, h);
  }

  start(){
    super.start();
    this.getComponent("RectangleDraw").fillStyle = Constants.lavaColor;
    this.components.push(new LavaController(this));
    
  }

}

export default PrefabLava;