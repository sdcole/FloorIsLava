import Scene from "../engine/Scene.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js";
import Constants from "./Constants.js"
import StartGameObject from "./StartGameObject.js";
import StartUpdateComponent from "./StartUpdateComponent.js";
import PauseGameObject from "./PauseGameObject.js";

class LoseScene extends Scene {
  constructor() {
    super("Lose Scene");
  }
  start(){
   this.gameObjects.push(new PauseGameObject(-105,0, "You Lose."));
    
  }
}

export default LoseScene;