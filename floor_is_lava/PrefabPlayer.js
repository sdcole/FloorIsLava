import PrefabRectangle from "../engine/prefabs/PrefabRectangle.js";
import Constants from "./Constants.js";

class PrefabPlayer extends PrefabRectangle{
  constructor(name, x, y, w, h, lives){
    super(name, x, y, w, h);
  }

  start(){
    super.start();
    this.getComponent("RectangleDraw").fillStyle = Constants.playerColor;
  }

}

export default PrefabPlayer;