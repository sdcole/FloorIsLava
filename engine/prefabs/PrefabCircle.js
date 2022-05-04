import GameObject from "../GameObject.js"
import Circle from "../components/Circle.js";
import CircleDraw from "../components/CircleDraw.js";

class PrefabCircle extends GameObject{
  constructor(name, x, y, r){
    super(name);
    this.x = x;
    this.y = y;
    this.r =r;

    this.start();
  }
  start(){
    this.components.push(new Circle(this, this.x,this.y,this.r));
    this.components.push(new CircleDraw(this, "gray", "transparent"));
  }
}

export default PrefabCircle;