class LavaDrawComponent extends Component {
    constructor(parent) {
      super(parent);
    }
    draw(ctx) {
      let updateComponent = this.parent.components.find(c=>c instanceof LavaUpdateComponent);
      
      ctx.fillStyle = "	#EE4B2B";
      ctx.fillRect(updateComponent.x, updateComponent.y, updateComponent.width, updateComponent.height);
      ctx.fill();
      ctx.stroke();
    }
  }