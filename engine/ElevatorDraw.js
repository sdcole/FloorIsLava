import Component from "./Component.js"

class FloorDraw extends Component {
    constructor(parent) {
        super(parent);

    }
    draw(ctx) {
        let rectangle = this.parent.getComponent("Rectangle");
        ctx.fillStyle = "#7FFFD4";
        
        ctx.fillRect(
            rectangle.x, 
            rectangle.y, 
            rectangle.w, 
            rectangle.h);

        ctx.fill();
        ctx.stroke();
      }

}

export default FloorDraw