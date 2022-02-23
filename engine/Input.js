class Input {
    static keys = []; // Keys that are currently down as reported by js events
    static keysDown = []; //Keys that went down this frame as reported by js events
    static keysUp = []; //Keys that went up this frame as reported by js events
    static frameKeysDown = []; //Keys that will be reported as going down next frame
    static frameKeysUp = [];  //Keys that will be reported as going up next frame
  
    
  
    //Update the frame-centric variables
    static update() {
      this.frameKeysDown = this.keysDown;
      this.frameKeysUp = this.keysUp;
      this.keysDown = [];
      this.keysUp = [];
  
      this.frameMouseButtonsDown = this.mouseButtonsDown;
      this.frameMouseButtonsUp = this.mouseButtonsUp;
      this.mouseButtonsDown = [];
      this.mouseButtonsUp = [];
  
      this.lastFrameMousePositionX = this.frameMousePositionX
      this.lastFrameMousePositionY = this.frameMousePositionY
  
      this.frameMousePositionX = this.mousePositionX;
      this.frameMousePositionY = this.mousePositionY;
  
      this.frameScrollWheel = this.scrollWheel;
      this.scrollWheel = 0;
    }
  
    //Get the values of different input states
  
    static getKey(key) {
      return this.keys[key];
    }
    static getKeyDown(key) {
      return this.frameKeysDown[key];
    }
    static getKeyUp(key) {
      return this.frameKeysUp[key];
    }

  
  
    static attach(document) {
      //Setup all the key listeners
      document.body.addEventListener('keydown', keydown);
      document.body.addEventListener('keyup', keyup);
      
  
      function keydown(event) {
        //console.log("Down: " + event.key);
        if (Input.keys[event.key] != true) {
            Input.keysDown[event.key] = true;
        }
        Input.keys[event.key] = true;
      }
  
      function keyup(event) {
        //console.log("Up: " + event.key)
        if (Input.keys[event.key] != false) {
            Input.keysUp[event.key] = true;
        }
        Input.keys[event.key] = false;
      }
  
      
  
      // Based on https://stackoverflow.com/questions/381795/how-to-disable-right-click-context-menu-in-javascript
      // Kills the right mouse context menu
      function contextmenu(event) {
        if (event.preventDefault != undefined)
          event.preventDefault();
        if (event.stopPropagation != undefined)
          event.stopPropagation();
        return false;
      }
    }
  }
  
  export default Input;