import Component from "./Component.js"

class LevelEndDraw extends Component {
    constructor(parent) {
        super(parent);

    }
    draw(ctx) {
        let rectangle = this.parent.getComponent("Rectangle");
        ctx.fillStyle = "white";
        
        ctx.fillRect(
            rectangle.x, 
            rectangle.y, 
            rectangle.w, 
            rectangle.h);

        ctx.fill();
        ctx.stroke();
      }

}

export default LevelEndDraw