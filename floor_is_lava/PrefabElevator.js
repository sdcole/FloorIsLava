import PrefabRectangle from "../engine/prefabs/PrefabRectangle.js";
import ElevatorController from "./ElevatorController.js";
import Constants from "./Constants.js";

class PrefabElevator extends PrefabRectangle{
  constructor(name, x, y, w, h, minH, maxH){
    super(name, x, y, w, h);
    this.minH = minH;
    this.maxH = maxH;
    this.goingUp = true;
  }

  start(){
    super.start();
    this.getComponent("RectangleDraw").fillStyle = Constants.floorColor;
    this.components.push(new ElevatorController(this));
    
  }

}

export default PrefabElevator;