import GameObject from "../engine/GameObject.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import PauseSceneUpdateComponent from "./PauseSceneUpdateComponent.js"

class StartGameObject extends GameObject{
  constructor(x,y,text){
    super();
    this.x = x;
    this.y = y;
    this.text = text;
    this.start();
  }
  start(){
    this.components.push(new Text(this, this.x,this.y,this.text, "50px sans"))
    this.components.push(new TextDraw(this, "white", "transparent"))
    this.components.push(new PauseSceneUpdateComponent(this))
  }
}

export default StartGameObject;