import Component from "./Component.js"

class LavaDraw extends Component {
    constructor(parent) {
        super(parent);

    }
    draw(ctx) {
        let rectangle = this.parent.getComponent("Rectangle");
        ctx.fillStyle = "#EE4B2B";
        
        ctx.fillRect(
            rectangle.x, 
            rectangle.y, 
            rectangle.w, 
            rectangle.h);

        ctx.fill();
        ctx.stroke();
      }

}

export default LavaDraw