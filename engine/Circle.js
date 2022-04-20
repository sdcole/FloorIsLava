import Component from "./Component.js"

class Circle extends Component {
    constructor(parent, x, y, r, color) {
        super(parent);
        this.color = color;
        this.x = x;
        this.y = y;
        this.r = r;
    }

}

export default Circle