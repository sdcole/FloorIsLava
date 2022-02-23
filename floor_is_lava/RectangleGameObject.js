import Component from "../engine/Component.js";
import GameObject from "../engine/GameObject.js";
import RectangleUpdateComponent from "./RectangleUpdateComponent.js";
import RectangleDrawComponent from "./RectangleDrawComponent.js";
class RectangleGameObject extends GameObject {

    constructor(x, y, width, height, onGround, jumpTime) {
        super();
        this.components.push(new RectangleUpdateComponent(this, x, y, width, height, onGround, jumpTime));
        this.components.push(new RectangleDrawComponent(this));
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
export default RectangleGameObject;