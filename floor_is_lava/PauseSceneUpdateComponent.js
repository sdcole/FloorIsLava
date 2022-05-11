import Component from "../engine/Component.js"
import Game from "../engine/Game.js";
import Time from "../engine/Time.js"


class StartUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
    this.time = 0;
  }
  update() {
    this.time += Time.secondsBetweenFrame;
    Game.persist.lives = 3;
    if(this.time > 3){
      Game.changeScene(0)
    }
  }
}

export default StartUpdateComponent;