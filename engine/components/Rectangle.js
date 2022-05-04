import Component from "../Component.js"

class Rectangle extends Component {
    constructor(parent, x, y, w, h) {
        super(parent);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    centerX(){
        return this.x + this.w/2;
    }
    centerY(){
        return this.y + this.h/2;
    }

}

export default Rectangle