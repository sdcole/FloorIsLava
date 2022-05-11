import PrefabTextSmall from "../engine/prefabs/PrefabTextSmall.js";
import PrefabTextLarge from "../engine/prefabs/PrefabTextLarge.js";
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
import Game from "../engine/Game.js";

class LevelThreeScene extends Scene{
  constructor(){
    super();
  }
  start(){

  

    // this.gameObjects.push(new PrefabTextSmall("PushSpace", 10, 40, "Push space to exert an upward force."))
    this.gameObjects.push(new PrefabTextSmall("PositionTextY", 10, 60, ""))
    this.gameObjects.push(new PrefabTextSmall("VelocityTextY", 10, 80, ""))
    this.gameObjects.push(new PrefabTextSmall("AccelerationTextY", 10, 100, ""))

    this.gameObjects.push(new PrefabTextSmall("PositionTextX", 10, 140, ""))
    this.gameObjects.push(new PrefabTextSmall("VelocityTextX", 10, 160, ""))
    this.gameObjects.push(new PrefabTextSmall("AccelerationTextX", 10, 180, ""))


    this.gameObjects.push(new PrefabLava("PrefabLava", -200, 150, 400, 150));
    this.gameObjects.push(new PrefabPlayer("PrefabPlayer", -175, 100, 10, 10, 3));
    this.gameObjects.push(new PrefabFloor("PrefabFloor", -175, 120, 50, 10));
    this.gameObjects.push(new PrefabFloor("PrefabFloor", -20, 120, 50, 10));
    this.gameObjects.push(new PrefabFloor("PrefabFloor", 80, 120, 60, 10));

    this.gameObjects.push(new PrefabLevelEnd("PrefabLevelEnd", 130, 110, 10, 10));
    
    this.gameObjects.push(new PrefabWall("PrefabWall", -200, -200, 10, 400));
    this.gameObjects.push(new PrefabWall("PrefabWall", -200, -200, 400, 10));
    this.gameObjects.push(new PrefabWall("PrefabWall", -190, 190, 400, 10));
    this.gameObjects.push(new PrefabWall("PrefabWall", 190, -200, 10, 400));
    

    this.gameObjects.push(new PrefabHUD("PrefabHUD",-250,-200,500,50));
    if(!Game.persist) {
      Game.persist = {};
      //console.log("MADE");
    }
    if(!Game.persist.lives) {
      Game.persist.lives = 3;
      //console.log("Lives added");
    }

    this.gameObjects.push(new PrefabTextLarge("HUD Lives", -200, -150, ""));
    this.gameObjects.push(new PrefabTextLarge("Level", -25, -150, ""));

    this.gameObjects.push(new PrefabEmpty("Controller").addComponent(new ControllerComponent()));
  }
}

export default LevelThreeScene;