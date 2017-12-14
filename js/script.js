var sortingImage = $("#draggable");
var sortingTitle = $("#item-title");
var randomImage = [];
var itemsRecycle = ["coffee-cup.png", "box.png", "beer.png", "bottle2.png", "can.png", "milk.png"];
var itemsCompost = ["applecore.png", "banana.png", "cheese.png", "eggs.png", "fish.png", "leaves.png", "pizzabox.png"];
var itemsTrash = ["wineglass.png", "bottlecap.png", "toaster.png", "foam.png", "spoon.png", "wrapper.png"];
var itemsOther = ["battery.png", "tshirt.png", "couch.png","mattress.png", "bike.png", "hypodermic.png", "iphone.png", "laptop.png", "tv.png"]
var itemsTransfer = ["couch.png", "bike.png", "mattress.png"];
var itemsHHW = ["battery.png", "hypodermic.png"];
var itemsThread = ["tshirt.png"];
var itemsEwaste = ["iphone.png", "laptop.png", "tv.png"];
var basePath = "img/";
var allImages = ["wineglass.png", "bottlecap.png", "coffee-cup.png","toaster.png", "battery.png", "tshirt.png", "couch.png",  "mattress.png", "applecore.png", "foam.png", "banana.png", "beer.png", "bike.png", "box.png", "bottle2.png", "can.png", "cheese.png", "eggs.png", "fish.png", "hypodermic.png", "iphone.png","laptop.png", "leaves.png", "milk.png", "pizzabox.png", "spoon.png", "tv.png", "wrapper.png"];
var highscore = $("#high-score");
score = 0;
time =70;

if(localStorage.highscore == 4){
	localStorage.highscore= 0;
}
function onLoad(){
  $("#intro").addClass("animated bounceInDown");
	$("#start-button").on("click", function(){
	console.log("button clicked");
  $("#intro").addClass("animated bounceOutUp");
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
		setTimeout(setImage, 900);
	})
};
function setImage(){
	var randImg = allImages[Math.floor(Math.random() * allImages.length)];
	randomImage.push(randImg);
	var imageSrc = basePath+randImg;
  sortingImage.addClass("animated fadeInDown");
	sortingImage.attr("src", imageSrc);
  allImages.splice(allImages.indexOf(randImg), 1);
  setName();
}

function celebrateRec(){
  console.log("celebrate");
          $("#win-image-rec").css({
            opacity: 1.0,
            height: "-60%"
          })
          $("#win-image-rec").animate({
            opacity: 0,
            height: "+60%",
          }, 2000, function(){
          });
}
function celebrateComp(){
  console.log("celebrate");
          $("#win-image-comp").css({
            opacity: 1.0,
            height: "-60%"
          })
          $("#win-image-comp").animate({
            opacity: 0,
            height: "+60%",
          }, 2000, function(){
          });
}
function celebrateTrash(){
  console.log("celebrate");
          $("#win-image-trash").css({
            opacity: 1.0,
            height: "-60%"
          })
          $("#win-image-trash").animate({
            opacity: 0,
            height: "+60%",
          }, 2000, function(){
          });
}

// .css("display", "none").height(160).width(auto);
$(function(){
    $("#draggable").draggable();
    $("#droppable1").droppable({
      drop: function(){
        if(itemsRecycle.includes(randomImage[0])){
          console.log("in it");
          $("#draggable").remove();
          $("#draggable").remove();
          $("#image-name").text("");
          randomImage.splice(0,1);
          score++
          $("#score").text("Your Score: "+score);
          celebrateRec();
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
      		celebrateComp();
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
          celebrateTrash();
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
  $(".other-items").addClass("animated fadeInLeft");
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
  $(".other-items").css("display", "none");
  $("#timer").remove();
  $("#main-image-div").remove();
  $("#final-score").text("Your Score: "+score);
  if(score>10){
    $("#end-message").text("You're a Master Sorter");
  }else if(score<=10 && score>5){
    $("#end-message").text("Room for Improvement");
  }else if(score<=5){
    $("#end-message").text("Time to Study Up");
  }
  $("#game-over").css("display","inline-block");
  if(score >= localStorage.highscore){
    localStorage.highscore = score;
    $("#new-high-score").text("you got the high score!!").css("display", "inline-block").addClass("animated rollIn").fadeOut(3000);
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
  }else if(randomImage[0] === "battery.png"){
    $("#image-name").text("Rechargeable battery");
  }else if(randomImage[0] === "toaster.png"){
    $("#image-name").text("Broken toaster");
  }else if(randomImage[0] === "coffee-cup.png"){
    $("#image-name").text("Clean coffee cup");
  }else if(randomImage[0] === "bottlecap.png"){
    $("#image-name").text("Bottle cap");
  }else if(randomImage[0] === "wineglass.png"){
    $("#image-name").text("Broken wine glass");
  }
}
onLoad();

