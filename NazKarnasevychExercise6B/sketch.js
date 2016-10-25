//set up array of squares
var squares = [];

function setup() {
	//create canvas and populate array
    createCanvas(800, 800);
    background('#0978bd'); //dark blue 
    for (i = 0; i < 150; i += 1) {
        squares[i] = new Square();
    }
}

function draw() {
	//refresh the background with each loop
    background('#0978bd');

   	//loops trhough the even spots in the array
    for (i = 0; i < 150; i += 2) {
    	//calls update, checks the position and then draws the square
        squares[i].update();
        squares[i].checkEdges();
        squares[i].display();
    }

    //loops trhough the odd spots in the array
    for (i = 1; i < 150; i += 2) {
    	//calls update for odd numbered squares, checks edges, checks if at corner, and then displays the square
        squares[i].updateOdd();
        squares[i].checkEdges();
        squares[i].checkCorner();
        squares[i].display();
    }
    
    
}
