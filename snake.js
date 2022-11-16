

// canvas is used to draw graphic
function init(){
  // we have to do this only once
  food_img = new Image(); //created food image object of class Image
  food_img.src = "assets/apple.png";
  trophy_img = new Image();
  trophy_img.src = "assets/trophy.png";
  game_over = false;
  score = 5;
  canvas = document.getElementById("mycanvas");
  W = canvas.width = 1000;
  H = canvas.height = 1000;
  pen = canvas.getContext('2d');
  cs = 66; //the individual block-size of snake body like a square cell
  food = getrandomfood();
  snake = { //Snake object
    inti_len : 5, // the initial length of our snake

    color : "blue", // the color of our snake

    cells : [], //an array of object, each cell of array is the block of the snake body

    direction : "right", //initial direction in which our snake should move

    createSnake : function(){ // an function to create the snake

      for(var i = this.inti_len; i>0; i--){
        this.cells.push({x : i, y : 0}); // an array of object

        //what are we storing in the cell array?
        //ans : we are storing the x and y coordinate for each "block" of the snake body
        //like for eg, the 1st block will have (x, y) = (0, 0) then 2nd will have (1, 0) then 3rd block will have (2, 0) and so on
        // ideally 1st block will start at (0, 0) then, 2nd will start at (1 * cs, 0) then 3rd will be (2 * cs, 0) and so
        //because each block size is (66 X 66)
        //we can make this changes while drawing the snake body in "drawSnake" function
      }
    },

    drawSnake : function(){
      pen.clearRect(0, 0, W, H);
      for(var i = 0; i < snake.cells.length; i++)
      {
        pen.fillStyle = this.color;
        pen.fillRect(this.cells[i].x * cs, this.cells[i].y * cs, cs-2, cs-2);
      }
    },
    updateSnake : function(){
      //how we update the snake is, when moving towards right we, pop the last cell of the array and insert a new one-
      // to the front of it
      var headX = this.cells[0].x;
      var headY = this.cells[0].y;

      if(headX == food.x && headY == food.y){
        food = getrandomfood(); //new coordinates
        score++;
      }
      else{
          this.cells.pop(); // first
      }
      var X, Y;
      if(this.direction == "right"){
        X = headX + 1;
        Y = headY;
      }
      else if(this.direction == "left"){
        X = headX-1;
        Y = headY;
      }
      else if(this.direction == "up"){
        X = headX;
        Y = headY - 1;
      }
      else if(this.direction == "down"){
        X = headX;
        Y = headY + 1;
      }
      this.cells.unshift({x : X, y : Y});
      //if we go out of bound
      var last_x = Math.round(W/cs);
      var last_y = Math.round(H / cs);
      if(this.cells[0].y < 0 || this.cells[0].x < 0 || this.cells[0].x > last_x || this.cells[0].y > last_y){
        game_over = true;
      }
    }

  };
  snake.createSnake();
  function keypressed(e){
    // here e is an object of type keyboard and contains some meta data regarding the key user pressed
    if(e.key == 'ArrowRight'){
      snake.direction = "right";
    }
    else if(e.key == 'ArrowLeft'){
      snake.direction = "left";
    }
    else if(e.key == 'ArrowUp'){
      snake.direction = "up";
    }
    else if(e.key == 'ArrowDown'){
      snake.direction = "down";
    }
  }
  document.addEventListener('keydown', keypressed);
}
function draw(){
  snake.drawSnake();
  pen.fillStyle = food.color;
  pen.drawImage(food_img, food.x*cs, food.y*cs, cs, cs);
  pen.drawImage(trophy_img, 18, 20, cs, cs);
  pen.fillStyle = "blue";
  pen.font = "25px Roboto";
  pen.fillText(score,50, 50);
}
function update(){
  snake.updateSnake();
}
function getrandomfood(){
  var foodX = Math.round(Math.random() * (W - cs) / cs);
  var foodY = Math.round(Math.random() * (H - cs) / cs);
  var food = {
    x : foodX,
    y : foodY,
    color : "red",
  }
  return food;
}
function gameloop(){
  if(game_over == true){
    clearInterval(f);
    alert("Game Over");
  }
  draw();
  update();
}
init();
var f = setInterval(gameloop, 100);
