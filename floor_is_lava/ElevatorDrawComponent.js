import Component from "../engine/Component.js";
import GameObject from "../engine/GameObject.js";
import ElevatorUpdateComponent from "./ElevatorUpdateComponent.js";

class ElevatorDrawComponent extends Component {
    constructor(parent) {
      super(parent);
    }
    draw(ctx) {
      let updateComponent = this.parent.components.find(c=>c instanceof ElevatorUpdateComponent);
      
      ctx.fillStyle = "#7FFFD4";
      ctx.fillRect(updateComponent.x, updateComponent.y, updateComponent.width, updateComponent.height);
      ctx.fill();
      ctx.stroke();
    }
  }
  export default ElevatorDrawComponent;