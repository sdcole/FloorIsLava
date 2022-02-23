import Component from "../engine/Component.js";
class FloorUpdateComponent extends Component {

    constructor(parent, x, y, width, height) {
        super(parent);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

    }
    update() {
        let canvas = document.querySelector("#canv");
        let ctx = canvas.getContext("2d");
    }

}
export default FloorUpdateComponent;