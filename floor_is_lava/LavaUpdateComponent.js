import Component from "../engine/Component.js";
class LavaUpdateComponent extends Component {

    constructor(parent, x, y, w, h) {
        super(parent);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

    }
    update() {

    }

}
export default LavaUpdateComponent;