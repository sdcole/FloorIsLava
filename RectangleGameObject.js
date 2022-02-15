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
        this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx));
    }
}