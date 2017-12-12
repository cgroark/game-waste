var compostImage = $("#compost-img");
var recycleImage = $("#recycle-img");
var trashImage = $("#trash-img");
var otherImage = $("#other-img");
var sortingImage = $("#image-to-sort");
var sortingTitle = $("#item-title");

var itemsRecycle = ["beer.png", "bottle2.png", "can.png", "milk.png", "paperbag.jpg"];
var itemsCompost = ["applecore.png", "banana.png", "cheese.png", "eggs.png", "fish.png", "leaves.png", "pizzabox.png"];
var itemsTrash = ["foam.jpg", "juicebox.png", "spoon.png", "wrapper.png"];
var itemsTransfer = ["bike.png"];
var itemsHHW = ["hypodermic.png"];
var itemsThread = [];
var itemsEwaste = ["iphone.png", "laptop.png", "tv.png"];
var basePath = "img/";
var allImages = ["applecore.png", "banana.png", "beer.png", "bike.png", "box.png", "bottle2.png", "can.png", "cheese.png", "eggs.png", "fish.png", "foam.jpg", "hypodermic.png", "iphone.png", "juicebox.png", "laptop.png", "leaves.png", "milk.png", "paperbag.jpg", "pizzabox.png", "spoon.png", "tv.png", "wrapper.png"];
score = 0;

console.log("HELLOOOO");

function onLoad(){
	var randImg = allImages[Math.floor(Math.random() * allImages.length)];
	var imageSrc = basePath+randImg;
	sortingImage.attr("src", imageSrc);
	allImages.splice(randImg, 1);//this isn't working, fix later

	$(function(){
    $("#draggable").draggable();
    $("#droppable").droppable({
      drop: function(){
      	$(this).toggleClass("newClass");
      	if(itemsCompost.includes(randImg)){
      		console.log("in it");
      		(draggable).remove();
      		score++

      	}else{
      		console.log("not");
      		(draggable).remove();
      		$("#main-image-div").append($("<img>", {id:"image-to-sort", src: basePath+randImg}));
      	}
      }
    });
  });
}

// $(function(){
//     $("#draggable").draggable();
//     $("#droppable").droppable({

// $(".test").on("dragover", function(event){
//     event.preventDefault();  
//     event.stopPropagation();
//     $(this).toggleClass("newClass");
// })})


$(function(){
    $("#draggable").draggable();
    $("#droppable").droppable({
      drop: function(){
      	$(this).toggleClass("newClass");
      	console.log(draggable).attr("src")
      	if(itemsCompost.indexOf(basePath+draggable)!= -1){
      		console.log("in it");
b
      	}else{
      		console.log("not");
      		$(draggable).remove();
      	}
        // $(this).css("border", "solid 5px red")
      }
    });
  });

function divListener(){
document.getElementsByClassName("test").addEventListener("drop", function(){
      		console.log("dropppped")});
}

	// if(arrayinQuestion.includes(randImg) ){
	// 	console.log("nice job");
	// 	count++;s
	// 	 $(draggable).remove();
	// 	onLoad();
	// }else if(arrayinQuestion.indexOf(randimg))

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
