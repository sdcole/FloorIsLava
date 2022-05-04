import Collisions from "../engine/Collisions.js";
import Component from "../engine/Component.js"
import Game from "../engine/Game.js";

class FloorController extends Component{
  constructor(parent){
    super(parent)
  }
  update(ctx){
    let playerGameObject = Game.findByNameOne("PrefabPlayer");
    let player = playerGameObject.getComponent("Rectangle");

  }
}

export default FloorController;