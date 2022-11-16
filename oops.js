//OBJECT ORIENTED PROGRAMMING IN javascript

// JS allows to create object without defining the class
//This way of creating object without first making a class is called JSON (javascript object notation)

/* THIS IS JSON
var bird = {
  x : 100,
  y : 20,
  color : "blue",
  eggs : ["one", "two", "three", "four"],
  fly : function(){
    console.log("bird is flying", this.x, this.y);
  }
}; //bird object
for(let i = 0; i<bird.eggs.length; i++){
  console.log(bird.eggs[i]);
}
//for each loop
bird.eggs.forEach(function(val, indx){     // we made a function inside a foreach function
  console.log(indx, val);
})
*/
// ONE WAY TO DEFINE OBJECT
function Fruit(taste, color){
  this.color = color;
  this.taste = taste;
}
let mango = new Fruit("sweet", "yellow"); //MANGO OBJECT
let orange = new Fruit("sour", "orange"); // ORANGE OBJECT

// OTHER WAY TO DEFINE OBJECT
var apple = {
  taste : "sweet",
  color : "red",
}
// CLASS in JS
// OTHER WAY TO DEFINE OBJECT USING CLASS, just like any other programming language

//CLASS DECLARATION (NOT HOISTED)
class FruitClass{
  constructor(taste, color){
    this.color = color;
    this.taste = taste;
  }
};

//CLASS EXPRESSION (NOT BE HOISTED)
let fruitexp = class{
  constructor(taste, color){
    this.color = color;
    this.taste = taste;
  }
}
let kiwi2 = new fruitexp("sour", "green");
let kiwi = new FruitClass("sour", "green");
