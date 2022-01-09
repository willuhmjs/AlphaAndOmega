Wconst godlyEntrance = function () {
  $(this).removeClass("text-light");
  $(this).addClass("text-dark");

  $("#secondaryHeading").hide();
  $("#subHeading").hide();

  $("body").removeClass("bg-dark");
  $("body").addClass("gifBackground");
}

const godlyExit = function () {
  $(this).addClass("text-light");
  $(this).removeClass("text-dark");

  $("#secondaryHeading").show();
  $("#subHeading").show();
  
  $("body").removeClass("gifBackground");
  $("body").addClass("bg-dark");
}

$("#mainHeading").hover(godlyEntrance);
$("#mainHeading").on('mouseleave', godlyExit);