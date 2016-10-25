function Square() {
  //assigning parameters like position, velocity and acceleration
    this.position = createVector(random(0, width-60), random(0, height-60));
    this.velocity = createVector(random(-3, 3), random(-3, 3));
    this.acceleration = createVector(random(0, 1), random(0, 1));

    //values for the color of the border
    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);

    //randomly assigned strokeWeight for the border
    this.weight = random(0, 20);

    //setting up array of corners
    leftUp = createVector(0, 0);
    leftDown = createVector(0, 800);
    rightUp = createVector(800, 0);
    rightDown = createVector(800, 800)
    var corners = [leftUp, leftDown, rightUp, rightDown];
    //each square gets a corner value that if moves to when the updateOdd is called
    this.corner = random(corners);

    this.update = function() {

        //code borrowed from mover.js to make the squares move
        //if the mouse is pressed, the square moves towards the mouse
        if (mouseIsPressed) {
            var mouse = createVector(mouseX, mouseY);
            this.acceleration = p5.Vector.sub(mouse, this.position);
            this.acceleration.setMag(0.2);
            this.velocity.add(this.acceleration);
            this.velocity.limit(5);
        }
        this.position.add(this.velocity);
    };
    this.updateOdd = function() {
        //if the mouse is pressed, the square moves to a corner
        if (mouseIsPressed) {;
            this.acceleration = p5.Vector.sub(this.corner, this.position);
            this.acceleration.setMag(0.2);
            this.velocity.add(this.acceleration);
            this.velocity.limit(5);
        }
        this.position.add(this.velocity);
    }

    this.display = function() {
      //display function for the square
        stroke(this.r, this.g, this.b);
        strokeWeight(this.weight);
        rect(this.position.x, this.position.y, 50, 50);
    }

    this.checkEdges = function() {

        //if the square is outside of the canvas, its direction is reversed
        if (((this.position.x + 60) > width) || (this.position.x < 0)) {
            this.velocity.x = this.velocity.x * -1;
        }
        if (((this.position.y + 60) > height) || (this.position.y < 0)) {
            this.velocity.y = this.velocity.y * -1;
        }

    }
    this.checkCorner = function() {
        //checks if the square is close to its corner value and assigns it a new corner
        //this is done so that the squares don't just stay in one corner and wobble around there
        if ((abs(this.position.x - this.corner.x) < 100) && abs(this.position.y - this.corner.y) < 100) {
            this.corner = random(corners);

        }
    }
}
