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
var itemsOther = ["tshirt.png", "couch.png","mattress.png", "bike.png", "hypodermic.png", "iphone.png", "laptop.png", "tv.png"]
var itemsTransfer = ["couch.png", "bike.png", "mattress.png"];
var itemsHHW = ["hypodermic.png"];
var itemsThread = ["tshirt.png"];
var itemsEwaste = ["iphone.png", "laptop.png", "tv.png"];
var basePath = "img/";
var allImages = ["tshirt.png", "couch.png",  "mattress.png", "applecore.png", "foam.png", "banana.png", "beer.png", "bike.png", "box.png", "bottle2.png", "can.png", "cheese.png", "eggs.png", "fish.png", "hypodermic.png", "iphone.png", "juicebox.png", "laptop.png", "leaves.png", "milk.png", "pizzabox.png", "spoon.png", "tv.png", "wrapper.png"];
var highscore = $("#high-score");
score = 0;
time =25;

if(localStorage.highscore == 21){
	localStorage.highscore= 0;
}

function onLoad(){
	$("#start-button").on("click", function(){
	console.log("button clicked");
	$("#intro").fadeOut("slow");
	var tick = function(){
		time -= 1;
		$("#timer").text("Time Remaining: " +time);
		if(time<6){
    $("#timer").css("color","red").addClass("animated bounce infinite");
		}
		if(time<=0){
			clearInterval(interval);
			gameOver();
		}	
	}
		interval = setInterval(tick, 1000);
		setTimeout(setImage, 700);
	})
};
function setImage(){
	var randImg = allImages[Math.floor(Math.random() * allImages.length)];
	randomImage.push(randImg);
	var imageSrc = basePath+randImg;
	sortingImage.attr("src", imageSrc);
  allImages.splice(allImages.indexOf(randImg), 1);
  setName();
}
$(function(){
    $("#draggable").draggable();
    $("#droppable1").droppable({
      drop: function(){
        if(itemsRecycle.includes(randomImage[0])){
          console.log("in it");
          $("#draggable").remove();
          $("#image-name").text("");
          randomImage.splice(0,1);
          score++
          $("#score").text("Your Score: "+score);
          // $(".win-image-rec").css({
          //   opacity: "0",
          //   height: "160px",
          //   width: "160px"
          //   })
          // $(".win-image-rec").animate({
          //   opacity: 0.95,
          //   height: "+50",
          //   width: "+50"
          // }, 300, function() {
          // });
          // $(".win-image-rec").fadeOut("slow");
          newImage();  
        }else{
          console.log("not");
          $("#draggable").remove();
          $(".recycle-div").effect("shake",{times:4},300);
          $("#main-image-div").append($("<img>", {id: "draggable", src: basePath+randomImage[0]}));
          $("#draggable").draggable();
          setName();
        }
      }
    });
});
$(function(){
    $("#draggable").draggable();
    $("#droppable2").droppable({
      drop: function(){
      	if(itemsCompost.includes(randomImage[0])){
      		console.log("in it");
      		$("#draggable").remove();
          $("#image-name").text("");
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
          setName();

      	}
      }
    });
});
$(function(){
    $("#draggable").draggable();
    $("#droppable3").droppable({
      drop: function(){
      	if(itemsTrash.includes(randomImage[0])){
      		console.log("in it");
      		$("#draggable").remove();
          $("#image-name").text("");
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
          setName();

      	}
      }
    });
});
$(function(){
    $("#draggable").draggable();
    $("#droppable4").droppable({
      drop: function(){
      	if(itemsOther.includes(randomImage[0])){
      		console.log("in it");
          $("#draggable").remove();
          $("#main-image-div").append($("<img>", {id:"draggable", src: basePath+randomImage[0]}));
          $("#draggable").draggable();
          $(".sorting-div").css("display", "none");
          otherSort();
      	}else{
      		console.log("not");
      		$("#draggable").remove();
      		$(".other-div").effect("shake",{times:4},300);
      		$("#main-image-div").append($("<img>", {id:"draggable", src: basePath+randomImage[0]}));
      		$("#draggable").draggable();
          setName();
      	}
      }
    });
});
function otherSort(){
  console.log("other");
  $(".other-items").css("display", "inline-block");




}
$(function(){
    $("#draggable").draggable();
    $("#droppable5").droppable({
      drop: function(){
        if(itemsTransfer.includes(randomImage[0])){
          console.log("in it");
          $("#draggable").remove();
          $("#image-name").text("");
          randomImage.splice(0,1);
          score++
          $("#score").text("Your Score: "+score);
          newImage();
          $(".other-items").css("display", "none");
          $(".sorting-div").css("display", "inline-block");
        }else{
          console.log("not");
          $("#draggable").remove();
          $(".transfer-div").effect("shake",{times:4},300);
          $("#main-image-div").append($("<img>", {id:"draggable", src: basePath+randomImage[0]}));
          $("#draggable").draggable();
          setName();
        }
      }
    });
});
$(function(){
    $("#draggable").draggable();
    $("#droppable6").droppable({
      drop: function(){
        if(itemsThread.includes(randomImage[0])){
          console.log("in it");
          $("#draggable").remove();
          $("#image-name").text("");
          randomImage.splice(0,1);
          score++;
          $("#score").text("Your Score: "+score);
          newImage();
          $(".other-items").css("display", "none");
          $(".sorting-div").css("display", "inline-block");
        }else{
          console.log("not");
          $("#draggable").remove();
          $(".thread-div").effect("shake",{times:4},300);
          $("#main-image-div").append($("<img>", {id:"draggable", src: basePath+randomImage[0]}));
          $("#draggable").draggable();
          setName();
        }
      }
    });
});
$(function(){
    $("#draggable").draggable();
    $("#droppable7").droppable({
      drop: function(){
          if(itemsEwaste.includes(randomImage[0])){
          console.log("in it");
          $("#draggable").remove();
          $("#image-name").text("");
          randomImage.splice(0,1);
          score++;
          $("#score").text("Your Score: "+score);
          newImage();
          $(".other-items").css("display", "none");
          $(".sorting-div").css("display", "inline-block");
        }else{
          console.log("not");
          $("#draggable").remove();
          $(".ecycle-div").effect("shake",{times:4},300);
          $("#main-image-div").append($("<img>", {id:"draggable", src: basePath+randomImage[0]}));
          $("#draggable").draggable();
          setName();
        }
      }
    });
});
$(function(){
    $("#draggable").draggable();
    $("#droppable8").droppable({
      drop: function(){
        $(this).toggleClass("newClass");
        if(itemsHHW.includes(randomImage[0])){
          console.log("in it");
          $("#draggable").remove();
          $("#image-name").text("");
          randomImage.splice(0,1);
          score++;
          $("#score").text("Your Score: "+score);
          newImage();
          $(".other-items").css("display", "none");
          $(".sorting-div").css("display", "inline-block");
        }else{
          console.log("not");
          $("#draggable").remove();
          $(".hhw-div").effect("shake",{times:4},300);
          $("#main-image-div").append($("<img>", {id:"draggable", src: basePath+randomImage[0]}));
          $("#draggable").draggable();
          setName();
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
  setName()
  allImages.splice(allImages.indexOf(randImg),1);
}
function gameOver(){
  console.log("no time");
  $(".other-items").css("display", "none");

  $("#final-score").text("Your Score: "+score);
  if(score>10){
    $("#end-message").text("You're a Master Sorter");
  }else if(score<=10){
    $("#end-message").text("Room for Improvement");
  }else if(score<=5){
    $("#end-message").text("Study Up");
  }
  $("#draggable").remove();
  $("#game-over").css("display","inline-block");
  if(score >= localStorage.highscore){
    localStorage.highscore = score;
    $("#new-high-score").text("you got the high score!!");
    $("#new-high-score").css("display","inline-block");
    $("#new-high-score").fadeOut(3000);
  }
  $("#high-score").text("High Score: " + localStorage.highscore);
}
function setName(){
  console.log('name');
  if(randomImage[0] === "bike.png"){
    $("#image-name").text("Bicycle");
  }else if(randomImage[0] === "spoon.png"){
    $("#image-name").text("Plastic spoon");
  }else if(randomImage[0] === "fish.png"){
    $("#image-name").text("Rotten Fish");
  }else if(randomImage[0] === "foam.png"){
    $("#image-name").text("Foam Packaging");
  }else if(randomImage[0] === "banana.png"){
    $("#image-name").text("Banana Peel");
  }else if(randomImage[0] === "beer.png"){
    $("#image-name").text("Glass Bottle");
  }else if(randomImage[0] === "bike.png"){
    $("#image-name").text("Busted Bicycle");
  }else if(randomImage[0] === "bottle2.png"){
    $("#image-name").text("Plastic Bottle with Cap");
  }else if(randomImage[0] === "can.png"){
    $("#image-name").text("Aluminum Can");
  }else if(randomImage[0] === "cheese.png"){
    $("#image-name").text("Moldy Cheese");
  }else if(randomImage[0] === "eggs.png"){
    $("#image-name").text("Rotten Eggs");
  }else if(randomImage[0] === "applecore.png"){
    $("#image-name").text("Apple-core");
  }else if(randomImage[0] === "box.png"){
    $("#image-name").text("Cardboard Box");
  }else if(randomImage[0] === "hypodermic.png"){
    $("#image-name").text("Hypodermic Needle");
  }else if(randomImage[0] === "iphone.png"){
    $("#image-name").text("Broken iPhone");
  }else if(randomImage[0] === "juicebox.png"){
    $("#image-name").text("Juicebox");
  }else if(randomImage[0] === "laptop.png"){
    $("#image-name").text("Broken Laptop");
  }else if(randomImage[0] === "leaves.png"){
    $("#image-name").text("Leaves");
  }else if(randomImage[0] === "milk.png"){
    $("#image-name").text("Milk Carton");
  }else if(randomImage[0] === "pizzabox.png"){
    $("#image-name").text("Soiled Pizzabox");
  }else if(randomImage[0] === "tv.png"){
    $("#image-name").text("Broken TV");
  }else if(randomImage[0] === "wrapper.png"){
    $("#image-name").text("Candy Wrapper");
  }else if(randomImage[0] === "mattress.png"){
    $("#image-name").text("Old Mattress");
  }else if(randomImage[0] === "couch.png"){
    $("#image-name").text("Old Couch");
  }else if(randomImage[0] === "tshirt.png"){
    $("#image-name").text("Old T-shirt");
  }
}



//if dropped item is in array of dropped area, score++; dissapear current image; create another image; 
	//else if image is not in array, move image back to top 

//appemd text to images
//build in timer
//fix score

//remove image from allImages array once used by onLoad

onLoad();

