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
time =35;

if(localStorage.highscore == undefined){
	localStorage.highscore= 0;
}
function onLoad(){
  $("#intro").addClass("animated bounceInDown");
	$("#start-button").on("click", function(){
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
  $("#main-image-div").addClass("animated fadeInDown");
	sortingImage.attr("src", imageSrc);
  allImages.splice(allImages.indexOf(randImg), 1);
  $("#draggable").draggable({
    containment: [0, 0, width, height-300]
  });
  $(".drop-text").css("display", "inline-block").addClass("animated pulse").fadeOut(3500);
  setName();
}
function resetMainSort(){
  $(".other-items").fadeOut(150);
  $(".sorting-div").fadeIn(1000);
  setTimeout(newImage, 400);  
}
function newImage(){
  var randImg = allImages[Math.floor(Math.random() * allImages.length)];
  randomImage.push(randImg);
  var imageSrc = basePath+randImg;
  $("#main-image-div").append($("<img>", {id:"draggable", src: basePath+randomImage[0]}));
  $("#draggable").draggable({
              containment: [0, 0, width, height-300]
          });          
  setName();
  allImages.splice(allImages.indexOf(randImg),1);
}
function correct(){
  $("#draggable").remove();
  $("#image-name").text("");
  randomImage.splice(0,1);
  score++
  $("#score").text("Your Score: "+score);
  setTimeout(newImage, 100);  
}
function incorrect(){
  $("#draggable").remove();
  $("#main-image-div").append($("<img>", {id: "draggable", src: basePath+randomImage[0]}));
  $("#draggable").draggable({
  containment: [0, 0, width, height-300]
  });          
  setName();
}
$(function(){
    $("#droppable1").droppable({
      drop: function(){
        if(itemsRecycle.includes(randomImage[0])){
          correct();
          celebrateRec();
        }else{
          incorrect();
          $(".recycle-div").effect("shake",{times:4},300);
        }
      }
    });
});
$(function(){
    $("#droppable2").droppable({
      drop: function(){
      	if(itemsCompost.includes(randomImage[0])){
      		correct();
      		celebrateComp();
      	}else{
          incorrect();
      		$(".compost-div").effect("shake",{times:4},300);
      	}
      }
    });
});
$(function(){
    $("#droppable3").droppable({
      drop: function(){
      	if(itemsTrash.includes(randomImage[0])){
          correct();
          celebrateTrash();
      	}else{
          incorrect();
      		$(".trash-div").effect("shake",{times:4},300);
      	}
      }
    });
});
$(function(){
    $("#droppable4").droppable({
      drop: function(){
      	if(itemsOther.includes(randomImage[0])){
          otherSort();
      	}else{
          incorrect();
      		$(".other-div").effect("shake",{times:4},300);
      	}
      }
    });
});
function otherSort(){
  $("#draggable").remove();
  $("#main-image-div").append($("<img>", {id:"draggable", src: basePath+randomImage[0]}));
  $("#draggable").draggable();
  $(".sorting-div").css("display", "none");
  $(".other-items").addClass("animated fadeInLeft");
  $(".other-items").css("display", "inline-block");
  $("#draggable").draggable({
              containment: [0, 0, width, height-300]
          });
}
function otherCorrect(){
          $("#draggable").remove();
          $("#image-name").text("");
          randomImage.splice(0,1);
          score++
          $("#score").text("Your Score: "+score);
          setTimeout(resetMainSort, 600);
}
$(function(){
    $("#droppable5").droppable({
      drop: function(){
        if(itemsTransfer.includes(randomImage[0])){
          otherCorrect();
          celebrateTransfer();
        }else{
          incorrect();
          $(".transfer-div").effect("shake",{times:4},300);
        }
      }
    });
});
$(function(){
    $("#droppable6").droppable({
      drop: function(){
        if(itemsThread.includes(randomImage[0])){
          otherCorrect();
          celebrateThread();
        }else{
          incorrect();
          $(".thread-div").effect("shake",{times:4},300);
        }
      }
    });
});
$(function(){
    $("#droppable7").droppable({
      drop: function(){
          if(itemsEwaste.includes(randomImage[0])){
          otherCorrect();
          celebrateEwaste();
        }else{
          incorrect();
          $(".ecycle-div").effect("shake",{times:4},300);
        }
      }
    });
});
$(function(){
    $("#droppable8").droppable({
      drop: function(){
        if(itemsHHW.includes(randomImage[0])){
          otherCorrect();
          celebrateHaz();
        }else{
          incorrect();
          $(".hhw-div").effect("shake",{times:4},300);
        }
      }
    });
});
function celebrateRec(){
          $("#win-image-rec").css({
            opacity: 1.0,
            height: "-120%"
          })
          $("#win-image-rec").animate({
            opacity: 0,
            height: "+120%",
          }, 1000, function(){
          });
}
function celebrateComp(){
          $("#win-image-comp").css({
            opacity: 1.0,
            height: "-120%"
          })
          $("#win-image-comp").animate({
            opacity: 0,
            height: "+120%",
          }, 1000, function(){
          });
}
function celebrateTrash(){
          $("#win-image-trash").css({
            opacity: 1.0,
            height: "-120%"
          })
          $("#win-image-trash").animate({
            opacity: 0,
            height: "+120%",
          }, 1000, function(){
          });
}
function celebrateTransfer(){
         $("#win-image-transfer").css({
            opacity: 1.0,
            height: "-60%"
          })
          $("#win-image-transfer").animate({
            opacity: 0,
            height: "+60%",
          }, 1000, function(){
          });
}
function celebrateThread(){
          $("#win-image-thread").css({
            opacity: 1.0,
            height: "-60%"
          })
          $("#win-image-thread").animate({
            opacity: 0,
            height: "+60%",
          }, 1000, function(){
          });
}
function celebrateEwaste(){
          $("#win-image-ewaste").css({
            opacity: 1.0,
            height: "-60%"
          })
          $("#win-image-ewaste").animate({
            opacity: 0,
            height: "+60%",
          }, 1000, function(){
          });
}
function celebrateHaz(){
          $("#win-image-haz").css({
            opacity: 1.0,
            height: "-60%"
          })
          $("#win-image-haz").animate({
            opacity: 0,
            height: "+60%",
          }, 1000, function(){
          });
}
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
function setName(){
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
    $("#image-name").text("Eggshells");
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
  }else if(randomImage[0] === "coat.png"){
    $("#image-name").text("Old coat");
  }else if(randomImage[0] === "gascan.png"){
    $("#image-name").text("Can of gas");
  }else if(randomImage[0] === "coffee.png"){
    $("#image-name").text("Used coffee grounds");
  }
}
onLoad();

