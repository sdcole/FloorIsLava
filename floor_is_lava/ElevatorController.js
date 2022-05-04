import Collisions from "../engine/Collisions.js";
import Component from "../engine/Component.js"
import Game from "../engine/Game.js";
import Time from "../engine/Time.js";

class ElevatorController extends Component{
  constructor(parent){
    super(parent)
  }
  update(ctx){
    let playerGameObject = Game.findByNameOne("PrefabPlayer");
    let player = playerGameObject.getComponent("Rectangle");
    let elevator = this.parent.getComponent("Rectangle");

 
    if (elevator.y > this.parent.minH && this.parent.goingUp) {
      elevator.y -= Time.secondsBetweenFrame*100;
    }
    else {
      this.parent.goingUp = false;
    }

    if (elevator.y < this.parent.maxH && !this.parent.goingUp) {
      elevator.y += Time.secondsBetweenFrame*100;
    }
    else {
      this.parent.goingUp = true;
    }

    if(player.x >= elevator.x && player.x + player.w <= elevator.x + elevator.w && Math.abs((player.y + player.h) - elevator.y) < 1){
      console.log("On elevator");
      if(elevator.y > this.minH){
        elevator.y -= Time.secondsBetweenFrame*10;
      }
    }
    else{
      if(elevator.y < this.maxH){
        elevator.y += Time.secondsBetweenFrame * 5;
      }
    }
    

  }
}

export default ElevatorController;