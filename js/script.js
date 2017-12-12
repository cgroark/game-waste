var compostImage = $("#compost-img");
var recycleImage = $("#recycle-img");
var trashImage = $("#trash-img");
var otherImage = $("#other-img");
var sortingImage = $(".image-to-sort");
var sortingTitle = $("#item-title");

var randomImage = [];
var itemsRecycle = ["box.png", "beer.png", "bottle2.png", "can.png", "milk.png"];
var itemsCompost = ["applecore.png", "banana.png", "cheese.png", "eggs.png", "fish.png", "leaves.png", "pizzabox.png"];
var itemsTrash = ["juicebox.png", "foam.png", "spoon.png", "wrapper.png"];
var itemsOther = ["bike.png", "hypodermic.png", "iphone.png", "laptop.png", "tv.png"]
var itemsTransfer = ["bike.png"];
var itemsHHW = ["hypodermic.png"];
var itemsThread = [];
var itemsEwaste = ["iphone.png", "laptop.png", "tv.png"];
var basePath = "img/";
var allImages = ["applecore.png", "foam.png", "banana.png", "beer.png", "bike.png", "box.png", "bottle2.png", "can.png", "cheese.png", "eggs.png", "fish.png", "hypodermic.png", "iphone.png", "juicebox.png", "laptop.png", "leaves.png", "milk.png", "pizzabox.png", "spoon.png", "tv.png", "wrapper.png"];
score = 0;

console.log("HELLOOOO");

function onLoad(){
	var randImg = allImages[Math.floor(Math.random() * allImages.length)];
	randomImage.push(randImg);
	var imageSrc = basePath+randImg;
	sortingImage.attr("src", imageSrc);
	allImages.splice(randImg, 1);//this isn't working, fix later
}

function newImage(){
	var randImg = allImages[Math.floor(Math.random() * allImages.length)];
	randomImage.push(randImg);
	var imageSrc = basePath+randImg;
	sortingImage.attr("src", imageSrc);
}

$(function(){
    $("#draggable").draggable();
    $("#droppable1").droppable({
      drop: function(){
      	$(this).toggleClass("newClass");
      	if(itemsRecycle.includes(randomImage[0])){
      		console.log("in it");
      		(draggable).remove();
      		randomImage.splice(0,1);
      		score++
      		$("#score").append(" "+score);
      		newImage();
      	}else{
      		console.log("not");
      		(draggable).remove();
      		$("#main-image-div").append($("<img>", {class:"image-to-sort", src: basePath+randomImage[0]}));
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
      		(draggable).remove();
      		randomImage.splice(0,1);
      		score++
      		$("#score").append(" "+score);
      		newImage();

      	}else{
      		console.log("not");
      		(draggable).remove();
      		$("#main-image-div").append($("<img>", {class:"image-to-sort", src: basePath+randomImage[0]}));
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
      		(draggable).remove();
      		randomImage.splice(0,1);
      		score++
      		$("#score").append(" "+score);
      		newImage();

      	}else{
      		console.log("not");
      		(draggable).remove();
      		$("#main-image-div").append($("<img>", {class:"image-to-sort", src: basePath+randomImage[0]}));
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
      		(draggable).remove();
      		randomImage.splice(0,1);
      		score++
      		$("#score").append(" "+score);
      		newImage();

      	}else{
      		console.log("not");
      		(draggable).remove();
      		$("#other-div").effect("shake",{times:4},300);
      		$("#main-image-div").append($("<img>", {class:"image-to-sort", src: basePath+randomImage[0]}));
      	}
      }
    });
});

function newImage(){
	var randImg = allImages[Math.floor(Math.random() * allImages.length)];
	randomImage.push(randImg);
	var imageSrc = basePath+randImg;
	sortingImage.attr("src", imageSrc);
	$("#main-image-div").append($("<img>", {class:"image-to-sort", src: basePath+randomImage[0]}));
	allImages.splice(randImg, 1);//this isn't working, fix later
}
//if dropped item is in array of dropped area, score++; dissapear current image; create another image; 
	//else if image is not in array, move image back to top 

//appemd text to images

//remove image from allImages array once used by onLoad

//hover function to increase image size of new image

//drag and drop image function

//function for matching new image with array or correct images

	//could be indeOf with != or = -1

//create pop-up for other section
onLoad();
