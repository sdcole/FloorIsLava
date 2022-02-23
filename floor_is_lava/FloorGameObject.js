import Component from "../engine/Component.js";
import GameObject from "../engine/GameObject.js";
import FloorUpdateComponent from "./FloorUpdateComponent.js";
import FloorDrawComponent from "./FloorDrawComponent.js";
class FloorGameObject extends GameObject {

    constructor(x, y, width, height) {
        super();
        this.components.push(new FloorUpdateComponent(this, x, y, width, height));
        this.components.push(new FloorDrawComponent(this));
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
export default FloorGameObject;