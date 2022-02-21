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
        this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx));
    }
}