import PrefabRectangle from "../engine/prefabs/PrefabRectangle.js";
import FloorController from "./FloorController.js";
import Constants from "./Constants.js";

class PrefabFloor extends PrefabRectangle{
  constructor(name, x, y, w, h){
    super(name, x, y, w, h);
  }

  start(){
    super.start();
    this.getComponent("RectangleDraw").fillStyle = Constants.floorColor;
    
  }

}

export default PrefabFloor;