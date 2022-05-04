
import PrefabTextSmall from "../engine/prefabs/PrefabTextSmall.js";
import PrefabEmpty from "../engine/prefabs/PrefabEmpty.js";
import ControllerComponent from "./ControllerComponent.js"
import Scene from "../engine/Scene.js"

import PrefabWall from "./PrefabWall.js";
import PrefabFloor from "./PrefabFloor.js";
import PrefabLevelEnd from "./PrefabLevelEnd.js";
import PrefabPlayer from "./PrefabPlayer.js";
import PrefabLava from "./PrefabLava.js";
import PrefabHUD from "./PrefabHUD.js";
import PrefabElevator from "./PrefabElevator.js";

class LevelFiveScene extends Scene{
  constructor(){
    super();
  }
  start(){

  
    this.gameObjects.push(new PrefabTextSmall("PlatformerTitle", 10, 20, "Floor is Lava"))
    // this.gameObjects.push(new PrefabTextSmall("PushSpace", 10, 40, "Push space to exert an upward force."))
    this.gameObjects.push(new PrefabTextSmall("PositionTextY", 10, 60, ""))
    this.gameObjects.push(new PrefabTextSmall("VelocityTextY", 10, 80, ""))
    this.gameObjects.push(new PrefabTextSmall("AccelerationTextY", 10, 100, ""))

    this.gameObjects.push(new PrefabTextSmall("PositionTextX", 10, 140, ""))
    this.gameObjects.push(new PrefabTextSmall("VelocityTextX", 10, 160, ""))
    this.gameObjects.push(new PrefabTextSmall("AccelerationTextX", 10, 180, ""))



    


    this.gameObjects.push(new PrefabLava("PrefabLava", -200, 150, 400, 150));
    this.gameObjects.push(new PrefabPlayer("PrefabPlayer", -175, 80, 10, 10, 3));
    this.gameObjects.push(new PrefabFloor("PrefabFloor", -175, 120, 175, 10));
    this.gameObjects.push(new PrefabFloor("PrefabFloor", 80, 120, 60, 10));
    this.gameObjects.push(new PrefabElevator("PrefabElevator", 160,100,40,10,-10,120));
    this.gameObjects.push(new PrefabFloor("PrefabFloor", 80, 0, 60, 10));
    this.gameObjects.push(new PrefabLevelEnd("PrefabLevelEnd", 80, -10, 10, 10));
    
    this.gameObjects.push(new PrefabWall("PrefabWall", -200, -200, 10, 400));
    this.gameObjects.push(new PrefabWall("PrefabWall", -200, -200, 400, 10));
    this.gameObjects.push(new PrefabWall("PrefabWall", -190, 190, 400, 10));
    this.gameObjects.push(new PrefabWall("PrefabWall", 190, -200, 10, 400));




    this.gameObjects.push(new PrefabEmpty("Controller").addComponent(new ControllerComponent()));
  }
}

export default LevelFiveScene;