var compostImage = $("#compost-img");
var recycleImage = $("#recycle-img");
var trashImage = $("#trash-img");
var otherImage = $("#other-img");
var sortingImage = $("#draggable");
var sortingTitle = $("#item-title");
var randomImage = [];
var itemsRecycle = ["juicebox.png", "box.png", "beer.png", "bottle2.png", "can.png", "milk.png"];
var itemsCompost = ["applecore.png", "banana.png", "cheese.png", "eggs.png", "fish.png", "leaves.png", "pizzabox.png"];
var itemsTrash = ["foam.png", "spoon.png", "wrapper.png"];
var itemsOther = ["bike.png", "hypodermic.png", "iphone.png", "laptop.png", "tv.png"]
var itemsTransfer = ["bike.png"];
var itemsHHW = ["hypodermic.png"];
var itemsThread = [];
var itemsEwaste = ["iphone.png", "laptop.png", "tv.png"];
var basePath = "img/";
var allImages = ["applecore.png", "foam.png", "banana.png", "beer.png", "bike.png", "box.png", "bottle2.png", "can.png", "cheese.png", "eggs.png", "fish.png", "hypodermic.png", "iphone.png", "juicebox.png", "laptop.png", "leaves.png", "milk.png", "pizzabox.png", "spoon.png", "tv.png", "wrapper.png"];
var highscore = $("#high-score");
score = 0;
time =45;

if(localStorage.highscore == undefined){
	localStorage.highscore= 0;
}

function onLoad(){
	$("#start-button").on("click", function(){
	console.log("button clicked");
	$("#intro").fadeOut("slow");
	var tick = function(){
		time -= 1;
		document.getElementById("timer").textContent = "Time Remaining: " +time;
		if(time<6){
		document.getElementById("timer").style.color = "red";
		}
		if(time<=0){
			clearInterval(interval);
			gameOver();
		}	
	}
		interval = setInterval(tick, 1000);
		setTimeout(setImage, 950)();
	})
};
function setImage(){
	var randImg = allImages[Math.floor(Math.random() * allImages.length)];
	randomImage.push(randImg);
	var imageSrc = basePath+randImg;
	sortingImage.attr("src", imageSrc);
	
if(randImg === "bike.png"){
		$("#image-name").text("Bicycle");
	}else if(randImg === "spoon.png"){
		$("#image-name").text("Spoon");
	}else if(randImg === "fish.png"){
		$("#image-name").text("Rotten Fish");
	}
}	// allImages.splice(randImg, 1);//this isn't working, fix later

$(function(){
    $("#draggable").draggable();
    $("#droppable1").droppable({
      drop: function(){
      	$(this).toggleClass("newClass");
      	if(itemsRecycle.includes(randomImage[0])){
      		console.log("in it");
      		$("#draggable").remove();
      		randomImage.splice(0,1);
      		score++
      		$("#score").text("Your Score: "+score);
      		newImage();  
      	}else{
      		console.log("not");
      		$("#draggable").remove();
      		$(".recycle-div").effect("shake",{times:4},300);
      		$("#main-image-div").append($("<img>", {id: "draggable", src: basePath+randomImage[0]}));
      		$("#draggable").draggable();
      	}
      }
    });
});
$(function(){
    $("#draggable").draggable();
    $("#droppable2").droppable({
      drop: function(){
      	$(this).toggleClass("newClass");
      	if(itemsCompost.includes(randomImage[0])){
      		console.log("in it");
      		$("#draggable").remove();
      		randomImage.splice(0,1);
      		score++
      		$("#score").text("Your Score: "+score);
      		newImage();

      	}else{
      		console.log("not");
      		$("#draggable").remove();
      		$(".compost-div").effect("shake",{times:4},300);
      		$("#main-image-div").append($("<img>", {id:"draggable", src: basePath+randomImage[0]}));
      		$("#draggable").draggable();
      	}
      }
    });
});
$(function(){
    $("#draggable").draggable();
    $("#droppable3").droppable({
      drop: function(){
      	$(this).toggleClass("newClass");
      	if(itemsTrash.includes(randomImage[0])){
      		console.log("in it");
      		$("#draggable").remove();
      		randomImage.splice(0,1);
      		score++
      		$("#score").text("Your Score: "+score);
      		newImage();

      	}else{
      		console.log("not");
      		$("#draggable").remove();
      		$(".trash-div").effect("shake",{times:4},300);
      		$("#main-image-div").append($("<img>", {id:"draggable", src: basePath+randomImage[0]}));
      		$("#draggable").draggable();
      	}
      }
    });
});
$(function(){
    $("#draggable").draggable();
    $("#droppable4").droppable({
      drop: function(){
      	$(this).toggleClass("newClass");
      	if(itemsOther.includes(randomImage[0])){
      		console.log("in it");
      		$("#draggable").remove();
      		randomImage.splice(0,1);
      		score++
      		$("#score").text("Your Score: "+score);
      		newImage();
      	}else{
      		console.log("not");
      		$("#draggable").remove();
      		$(".other-div").effect("shake",{times:4},300);
      		$("#main-image-div").append($("<img>", {id:"draggable", src: basePath+randomImage[0]}));
      		$("#draggable").draggable();
      	}
      }
    });
});
function newImage(){
	var randImg = allImages[Math.floor(Math.random() * allImages.length)];
	randomImage.push(randImg);
	var imageSrc = basePath+randImg;
	$("#main-image-div").append($("<img>", {id:"draggable", src: basePath+randomImage[0]}));
	$("#draggable").draggable();
	allImages.splice(randImg, 1);//this isn't working, fix later
}
function gameOver(){
	console.log("no time");
	$("#final-score").text("Your Score: "+score);
	if(score>10){
		$("#end-message").text("You're a Master Sorter");
	}else if(score<=10){
		$("#end-message").text("Room for Improvement");
	}else if(score<=5){
		$("#end-message").text("Study Up");
	}
	$("#draggable").remove();
	document.getElementById("game-over").style.display = "inline-block";
	if(score >= localStorage.highscore){
		localStorage.highscore = score;
		$("#new-high-score").text("you got the high score!!");
		document.getElementById("new-high-score").style.display = "inline-block";
		$("#new-high-score").fadeOut(3000);
	}
	$("#high-score").text("High Score: " + localStorage.highscore);
}


//if dropped item is in array of dropped area, score++; dissapear current image; create another image; 
	//else if image is not in array, move image back to top 

//appemd text to images
//build in timer
//fix score

//remove image from allImages array once used by onLoad

onLoad();

