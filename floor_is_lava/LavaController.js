import Collisions from "../engine/Collisions.js";
import Component from "../engine/Component.js"
import Game from "../engine/Game.js";

class LavaController extends Component{
  constructor(parent){
    super(parent)
  }
  update(ctx){
    let playerGameObject = Game.findByNameOne("PrefabPlayer");
    let player = playerGameObject.getComponent("Rectangle");
    
    if(Collisions.inCollision(player, this.parent.getComponent("Rectangle"))){
      console.log("HIT");
      if(!Game.persist) {
        Game.persist = {};
        //console.log("MADE");
      }
      if(!Game.persist.lives) {
        Game.persist.lives = 3;
        //console.log("Lives added");
      }
      else{
        //console.log("LIVES" + Game.persist.lives);
        Game.persist.lives--;
      
        if (Game.persist.lives < 1) {
          Game.persist.lives = 3;
          Game.changeScene(0);
        }
        
        
      }
      player.x = -175;
      player.y = 10;
    }


  
}
}
export default LavaController;