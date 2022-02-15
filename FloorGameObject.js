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
        this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx));
    }
}