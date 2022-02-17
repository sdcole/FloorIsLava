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