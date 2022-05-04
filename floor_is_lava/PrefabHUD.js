import PrefabRectangle from "../engine/prefabs/PrefabRectangle.js";
import HUDController from "./HUDController.js";
import Constants from "./Constants.js";

class PrefabHUD extends PrefabRectangle{
  constructor(name, x, y, w, h){
    super(name, x, y, w, h);
    // this.HUDLifeOne = new HUDLife("HUDLifeOne", 80, this.y + this.h / 2 - 10, 10, 10);
    // this.HUDLifeOne = new HUDLife("HUDLifeTwo", 100, this.y + this.h / 2 - 10, 10, 10);
    // this.HUDLifeOne = new HUDLife("HUDLifeThree", 120, this.y + this.h / 2 - 10, 10, 10);
  }

  start(){
    super.start();
    this.getComponent("RectangleDraw").fillStyle = Constants.HUDColor;
    this.components.push(new HUDController(this));
    
  }

}

export default PrefabHUD;