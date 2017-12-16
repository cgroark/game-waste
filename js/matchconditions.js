//drag and drop functions for four main bin options
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

//pop-up other sort options when "other sort" is a match
function otherSort(){
  $("#draggable").remove();
  $("#main-image-div").append($("<img>", {id:"draggable", src: basePath+randomImage[0]}));
  $("#draggable").draggable();
  $(".sorting-div").css("display", "none");
  $(".other-items").addClass("animated fadeInLeft");
  $(".other-items").css("display", "inline-block");
  $("#draggable").draggable({
    containment: [0, 0, width-200, height-300]
  });
}

//run these when match is found within "other" options
function otherCorrect(){
  $("#draggable").remove();
  $("#image-name").text("");
  randomImage.splice(0,1);
  score++
  $("#score").text("Your Score: "+score);
  setTimeout(resetMainSort, 600);
}

//drap and drop functions for four "other" bin options
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

//run these if there is a match with trash item and bin for three main bin options
function correct(){
  $("#draggable").remove();
  $("#image-name").text("");
  randomImage.splice(0,1);
  score++
  $("#score").text("Your Score: "+score);
  setTimeout(newImage, 100);  
}

//run this if item does not match the selected bin for all eight options
function incorrect(){
  $("#draggable").remove();
  $("#main-image-div").append($("<img>", {id: "draggable", src: basePath+randomImage[0]}));
  $("#draggable").draggable({
  containment: [0, 0, width-200, height-300]
  });          
  setName();
}

//image appears when match is correct for each of 7 bin options
function celebrateRec(){
  $("#win-image-rec").css({
    opacity: 1.0,
    height: "-140%"
  })
  $("#win-image-rec").animate({
    opacity: 0,
    height: "+140%",
  }, 1000, function(){
  });
}
function celebrateComp(){
  $("#win-image-comp").css({
      opacity: 1.0,
      height: "-140%"
    })
    $("#win-image-comp").animate({
      opacity: 0,
      height: "+140%",
    }, 1000, function(){
    });
}
function celebrateTrash(){
  $("#win-image-trash").css({
    opacity: 1.0,
    height: "-140%"
  })
  $("#win-image-trash").animate({
    opacity: 0,
    height: "+140%",
  }, 1000, function(){
  });
}
function celebrateTransfer(){
  $("#win-image-transfer").css({
    opacity: 1.0,
    height: "-140%"
  })
  $("#win-image-transfer").animate({
    opacity: 0,
    height: "+140%",
  }, 1000, function(){
  });
}
function celebrateThread(){
  $("#win-image-thread").css({
    opacity: 1.0,
    height: "-140%"
  })
  $("#win-image-thread").animate({
    opacity: 0,
    height: "+140%",
  }, 1000, function(){
  });
}
function celebrateEwaste(){
  $("#win-image-ewaste").css({
    opacity: 1.0,
    height: "-140%"
  })
  $("#win-image-ewaste").animate({
    opacity: 0,
    height: "+140%",
  }, 1000, function(){
  });
}
function celebrateHaz(){
  $("#win-image-haz").css({
    opacity: 1.0,
    height: "-140%"
  })
  $("#win-image-haz").animate({
    opacity: 0,
    height: "+140%",
  }, 1000, function(){
  });
}