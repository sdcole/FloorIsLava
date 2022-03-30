import Component from "./Component.js"

class RectangleDraw extends Component {
    constructor(parent) {
        super(parent);

    }
    draw(ctx) {
        let rectangle = this.parent.getComponent("Rectangle");
        
        ctx.fillStyle = rectangle.color;
        ctx.fillRect(
            rectangle.x, 
            rectangle.y, 
            rectangle.w, 
            rectangle.h);

        ctx.fill();
        ctx.stroke();
      }

}

export default RectangleDraw