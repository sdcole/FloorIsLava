import Component from "../engine/Component.js";
import GameObject from "../engine/GameObject.js";
import FloorUpdateComponent from "./FloorUpdateComponent.js";
class FloorDrawComponent extends Component {
    constructor(parent) {
      super(parent);
    }
    draw(ctx) {
      let updateComponent = this.parent.components.find(c=>c instanceof FloorUpdateComponent);
      
      ctx.fillStyle = "#7FFFD4";
      ctx.fillRect(updateComponent.x, updateComponent.y, updateComponent.width, updateComponent.height);
      ctx.fill();
      ctx.stroke();
    }
  }
  export default FloorDrawComponent;