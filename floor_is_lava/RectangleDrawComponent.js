import Component from "../engine/Component.js";
import GameObject from "../engine/GameObject.js";
import RectangleUpdateComponent from "./RectangleUpdateComponent.js";
class RectangleDrawComponent extends Component {
    constructor(parent) {
      super(parent);
    }
    draw(ctx) {
      let updateComponent = this.parent.components.find(c=>c instanceof RectangleUpdateComponent);
      
      ctx.fillStyle = "#b642f5";
      ctx.fillRect(updateComponent.x, updateComponent.y, updateComponent.width, updateComponent.height);
      ctx.fill();
      ctx.stroke();
    }
  }
  export default RectangleDrawComponent;