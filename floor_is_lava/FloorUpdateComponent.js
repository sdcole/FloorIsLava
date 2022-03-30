import Component from "../engine/Component.js";

class FloorUpdateComponent extends Component {

    constructor(parent) {
        super(parent);

    }
    update() {
        let rectangle = this.parent.getComponent("Rectangle");
    }

}
export default FloorUpdateComponent;