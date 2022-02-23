import Component from "../engine/Component.js";
import GameObject from "../engine/GameObject.js";
import ElevatorUpdateComponent from "./ElevatorUpdateComponent.js";
import ElevatorDrawComponent from "./ElevatorDrawComponent.js";

class ElevatorGameObject extends GameObject {

    constructor(x, y, width, height, maxMoveWidth, minMoveHeight) {
        super();
        this.components.push(new ElevatorUpdateComponent(this, x, y, width, height, maxMoveWidth, minMoveHeight));
        this.components.push(new ElevatorDrawComponent(this));
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
export default ElevatorGameObject;