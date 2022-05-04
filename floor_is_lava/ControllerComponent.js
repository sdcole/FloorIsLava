import Component from "../engine/Component.js"
import Game from "../engine/Game.js"
import Input from "../engine/Input.js"
import Collisions from "../engine/Collisions.js";

import Time from "../engine/Time.js"


class ControllerComponent extends Component {
  constructor(parent) {
    super(parent);
    this.velocityY = 0;
    this.velocityX = 0;
    this.jumpTimer = 0;
    this.jumpStep = 1;
    this.canJump = false;
    this.forceMultiplier = 600;
    this.lateralAcceleration = 250;
    this.gravity = 32 * this.forceMultiplier;
    this.jumpForce = 15 * this.forceMultiplier;
    this.FALLING = 0;
    this.RESTING = 1;
    this.JUMPING = 2;
    this.state = this.FALLING;
    this.restingIndex = -1;
    this.canJump = false;



  }
  update(ctx) {
    let playerGameObject = Game.findByNameOne("PrefabPlayer");
    let player = playerGameObject.getComponent("Rectangle");

    let newY = player.y;
    let newX = player.x;

    let newVelocityY = this.velocityY;
    let newVelocityX = this.velocityX;

    let frameAccelerationY = 0;
    let frameAccelerationX = 0;
    let frameGravity = 0;
    let frameJumpForce = 0;
    let frameCollisionForce = 0;
    frameGravity = this.gravity * Time.secondsBetweenFrame;

    //this.jumpTimer += Time.secondsBetweenFrame;
    frameAccelerationY = frameGravity

    if ((Input.getKeyDown(" ") || Input.getKeyDown("ArrowUp")) && this.canJump) {
      frameJumpForce = -this.jumpForce;
      this.jumpTimer = 0;
    }

    //Deal with left and right movement

    if (Input.getKey("ArrowLeft"))
      frameAccelerationX = -this.lateralAcceleration;
    else if (Input.getKey("ArrowRight"))
      frameAccelerationX = this.lateralAcceleration;
    else {
      frameAccelerationX = 0;
    }

    let floorGameObjects = Game.findByName("PrefabFloor");
    let wallGameObjects = Game.findByName("PrefabWall");
    let elevatorGameObjects = Game.findByName("PrefabElevator");

    if (frameJumpForce != 0) {
      frameAccelerationY = frameJumpForce;
      this.state = this.JUMPING;
      this.canJump = false;
    }
    else {
      if (this.state == this.FALLING) {
        frameAccelerationY = frameGravity;
        this.canJump = true;
      }
      else if (this.state == this.RESTING) {
        frameAccelerationY = 0;
        this.canJump = true;
      }
    }

    //Update velocity based on acceleration
    newVelocityY = this.velocityY + frameAccelerationY * Time.secondsBetweenFrame;
    newVelocityX = this.velocityX + frameAccelerationX * Time.secondsBetweenFrame;

    //Update position based on velocity
    newY += newVelocityY * Time.secondsBetweenFrame;
    newX += newVelocityX * Time.secondsBetweenFrame;


    player.x = newX;
    player.y = newY;

    if (player.y <= -10)
      console.log(50);



    this.velocityX = newVelocityX;
    this.velocityY = newVelocityY;


    var cont = true;
    //Checks Collision for floorGameObjects
    while (cont) {
      let collisions = floorGameObjects.filter(b => Collisions.inCollision(player, b.getComponent("Rectangle"))).map(b => b.getComponent("Rectangle"));
      
      if (collisions.length == 0) break;



      let maxBelow = this.belowMax(collisions, player);
      let maxAbove = this.aboveMax(collisions, player);
      let maxRight = this.rightMax(collisions, player);
      let maxLeft = this.leftMax(collisions, player);

      let max = Math.max(maxBelow, maxAbove, maxRight, maxLeft)
      //console.log(max);
      if (max == maxBelow){
        player.y -= max;
        this.velocityY = 0;
        newVelocityY = 0;
        this.canJump = true;
        //continue;
      }
      else if (max == maxRight){
        player.x -= max;
        this.velocityX = 0;
        newVelocityX = 0;
      }
      else if (max == maxLeft){
        player.x += max;
        this.velocityX = 0;
        newVelocityX = 0;
      }
      else if (max == maxAbove){
        player.y += max;
        this.velocityY = 0;
        newVelocityY = 0;
        //continue;
      }

      break;



    }

    while (cont) {
        let collisions = wallGameObjects.filter(b => Collisions.inCollision(player, b.getComponent("Rectangle"))).map(b => b.getComponent("Rectangle"));
        
        if (collisions.length == 0) break;
  
  
  
        let maxBelow = this.belowMax(collisions, player);
        let maxAbove = this.aboveMax(collisions, player);
        let maxRight = this.rightMax(collisions, player);
        let maxLeft = this.leftMax(collisions, player);
  
        let max = Math.max(maxBelow, maxAbove, maxRight, maxLeft)
        //console.log(max);
        if(max == maxBelow){
          player.y -= max;
          this.velocityY = 0;
          newVelocityY = 0;
          this.canJump = true;
          //continue;
        }
        else if (max == maxRight){
          player.x -= max;
          this.velocityX = 0;
          newVelocityX = 0;

        }
        else if (max == maxLeft){
          player.x += max;
          this.velocityX = 0;
          newVelocityX = 0;

        }
        else if (max == maxAbove){
          player.y += max;
          this.velocityY = 0;
          newVelocityY = 0;
          
          //continue;
        }
  
        break;
  
  
  
      }
    
    
      while (cont) {
        let collisions = elevatorGameObjects.filter(b => Collisions.inCollision(player, b.getComponent("Rectangle"))).map(b => b.getComponent("Rectangle"));
        
        if (collisions.length == 0) break;
  
  
  
        let maxBelow = this.belowMax(collisions, player);
        let maxAbove = this.aboveMax(collisions, player);
        let maxRight = this.rightMax(collisions, player);
        let maxLeft = this.leftMax(collisions, player);
  
        let max = Math.max(maxBelow, maxAbove, maxRight, maxLeft)
        //console.log(max);
        if (max == maxBelow){
          player.y -= max;
          this.velocityY = 0;
          newVelocityY = 0;
          this.canJump = true;
          //continue;
        }
        else if (max == maxRight){
          player.x -= max;
          this.velocityX = 0;
          newVelocityX = 0;
        }
        else if (max == maxLeft){
          player.x += max;
          this.velocityX = 0;
          newVelocityX = 0;
        }
        else if (max == maxAbove){
          player.y += max;
          this.velocityY = 0;
          newVelocityY = 0;
          //continue;
        }
  
        break;
  
  
  
      }


    


    
    // //Now update the text
    // let positionGameObjectY = Game.findByNameOne("PositionTextY");
    // let velocityGameObjectY = Game.findByNameOne("VelocityTextY");
    // let accelerationGameObjectY = Game.findByNameOne("AccelerationTextY");

    // let positionGameObjectX = Game.findByNameOne("PositionTextX");
    // let velocityGameObjectX = Game.findByNameOne("VelocityTextX");
    // let accelerationGameObjectX = Game.findByNameOne("AccelerationTextX");

    // let positionY = positionGameObjectY.getComponent("Text");
    // let velocityY = velocityGameObjectY.getComponent("Text");
    // let accelerationY = accelerationGameObjectY.getComponent("Text");

    // let positionX = positionGameObjectX.getComponent("Text");
    // let velocityX = velocityGameObjectX.getComponent("Text");
    // let accelerationX = accelerationGameObjectX.getComponent("Text");

    // positionY.text = "PositionY: " + player.y.toFixed(2);
    // velocityY.text = "VelocityY: " + this.velocityY.toFixed(2);
    // accelerationY.text = "AccelerationY: " + frameAccelerationY.toFixed(2);


    // positionX.text = "PositionX: " + player.x.toFixed(2);
    // velocityX.text = "VelocityX: " + this.velocityX.toFixed(2);
    // accelerationX.text = "AccelerationX: " + frameAccelerationX.toFixed(2);


  }
  belowMax(collisions, player){
    let belowCollisions = collisions.filter(c => Collisions.isCollidingDown(player, c));
    if (belowCollisions.length > 0) {
      //console.log("Below Collision Resolution");
      let maxBelowCollisionDistance = Math.max(...belowCollisions.map(b => Collisions.collidingDownAmount(player, b)));
      return maxBelowCollisionDistance;
    }
    return -1;
  }
  aboveMax(collisions, player){
    let aboveCollisions = collisions.filter(c => Collisions.isCollidingUp(player, c));
    if (aboveCollisions.length > 0) {
      //console.log("Above Collision Resolution");
      let maxBelowCollisionDistance = Math.max(...aboveCollisions.map(b => Collisions.collidingUpAmount(player, b)));
      return maxBelowCollisionDistance;
    }
    return -1;
  }
  rightMax(collisions, player){
    let rightCollisions = collisions.filter(c => Collisions.isCollidingRight(player, c));
    if (rightCollisions.length > 0) {
      //console.log("Right Collision Resolution");
      let maxRightCollisionDistance = Math.max(...rightCollisions.map(b => Collisions.collidingRightAmount(player, b)));
      return maxRightCollisionDistance;
    }
    return -1;
  }
  leftMax(collisions, player){
    let leftCollisions = collisions.filter(c => Collisions.isCollidingLeft(player, c));
    if (leftCollisions.length > 0) {
      //console.log("Left Collision Resolution");
      let maxLeftCollisionDistance = Math.max(...leftCollisions.map(b => Collisions.collidingLeftAmount(player, b)));
      return maxLeftCollisionDistance;
    }
    return -1;
  }

}



export default ControllerComponent;