var sortingImage = $("#draggable");
var sortingTitle = $("#item-title");
var randomImage = [];
var allImages = ["coffee.png", "gascan.png", "coat.png", "wineglass.png", "bottlecap.png", "coffee-cup.png","toaster.png", "battery.png", "tshirt.png", "couch.png", "applecore.png", "foam.png", "banana.png", "beer.png", "bike.png", "box.png", "bottle2.png", "can.png", "cheese.png", "eggs.png", "fish.png", "hypodermic.png", "iphone.png","laptop.png", "leaves.png", "milk.png", "pizzabox.png", "spoon.png", "tv.png", "wrapper.png"]
var itemsRecycle = ["coffee-cup.png", "box.png", "beer.png", "bottle2.png", "can.png", "milk.png"];
var itemsCompost = ["coffee.png", "applecore.png", "banana.png", "cheese.png", "eggs.png", "fish.png", "leaves.png", "pizzabox.png"];
var itemsTrash = ["wineglass.png", "bottlecap.png", "toaster.png", "foam.png", "spoon.png", "wrapper.png"];
var itemsOther = ["gascan.png", "coat.png", "battery.png", "tshirt.png", "couch.png", "bike.png", "hypodermic.png", "iphone.png", "laptop.png", "tv.png"]
var itemsTransfer = ["couch.png", "bike.png"];
var itemsHHW = ["gascan.png", "battery.png", "hypodermic.png"];
var itemsThread = ["coat.png", "tshirt.png"];
var itemsEwaste = ["iphone.png", "laptop.png", "tv.png"];
var basePath = "img/";
var highscore = $("#high-score");
var height = document.body.clientHeight;
var width = document.body.clientWidth;
score = 0;
time =30;

if(localStorage.highscore == undefined){
	localStorage.highscore= 0;
}
//load intro text 
function onLoad(){
  $("#intro").addClass("animated bounceInDown");
}
//click event to start timer and set initial image on delay
$("#start-button").on("click", function(){
  $("#intro").addClass("animated bounceOutUp");
	setTimeout(setImage, 900);
  startTimer();
})
//start timer based on start-button click event
function startTimer(){
function tick(){
    time -= 1;
    $("#timer").text("Time Remaining: " +time);
    if(time<6){
    $("#timer").css("color","red").addClass("animated bounce infinite");
    }
    if(time<0){
      clearInterval(interval);
      gameOver();
    } 
}
  interval = setInterval(tick, 1000);
}
//set initial random image
function setImage(){
	var randImg = allImages[Math.floor(Math.random() * allImages.length)];
	randomImage.push(randImg);
	var imageSrc = basePath+randImg;
  $("#main-image-div").addClass("animated fadeInDown");
	sortingImage.attr("src", imageSrc);
  allImages.splice(allImages.indexOf(randImg), 1);
  $("#draggable").draggable({
    containment: [0, 0, width-200, height-300]
  });
  $(".drop-text").css("display", "inline-block").addClass("animated pulse").fadeOut(4500);
  setName();
}
//create random image following a match
function newImage(){
  var randImg = allImages[Math.floor(Math.random() * allImages.length)];
  randomImage.push(randImg);
  var imageSrc = basePath+randImg;
  $("#main-image-div").append($("<img>", {id:"draggable", src: basePath+randomImage[0]}));
  $("#draggable").draggable({
              containment: [0, 0, width-200, height-300]
          });          
  setName();
  allImages.splice(allImages.indexOf(randImg),1);
}
//reset the screen with main sorting after "other" sort screen pops up
function resetMainSort(){
  $(".other-items").fadeOut(150);
  $(".sorting-div").fadeIn(1000);
  setTimeout(newImage, 400);  
}
//run this when timer ends to clear screen and bring up final win/score screen
function gameOver(){
  $("#timer").remove();
  $("#main-image-div").remove();
  $(".other-items").remove();
  $("#final-score").text("Your Score: "+score);
  if(score>10){
    $("#end-message").text("You're a Master Sorter");
  }else if(score<=10 && score>5){
    $("#end-message").text("Room for Improvement");
  }else if(score<=5){
    $("#end-message").text("Time to Study Up");
  }
  $("#game-over").css("display","inline-block");
  $("#game-over").addClass("animated bounceInDown");
  if(score >= localStorage.highscore){
    localStorage.highscore = score;
  $("#new-high-score").text("you got the high score!!").css("display", "inline-block").addClass("animated rollIn").fadeOut(3000);
  }
  $("#high-score").text("High Score: " + localStorage.highscore);
}

onLoad();

