import Component from "../engine/Component.js";
import GameObject from "../engine/GameObject.js";
import LavaUpdateComponent from "./LavaUpdateComponent.js";
import LavaDrawComponent from "./LavaDrawComponent.js";
class LavaGameObject extends GameObject {

    constructor(x, y, width, height) {
        super();
        this.components.push(new LavaUpdateComponent(this, x, y, width, height));
        this.components.push(new LavaDrawComponent(this));
    }
    update() {
        this.components.filter(c=>c.update).forEach(c=>c.update());
    }
    draw() {
        let canvas = document.querySelector("#canv");
        let ctx = canvas.getContext("2d");
        this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx));
    }
}
export default LavaGameObject;