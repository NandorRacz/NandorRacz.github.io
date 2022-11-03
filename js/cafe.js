$(document).ready(function(){
  console.log("Cafe page loaded");
  $(".cafe-info").hide();
  $(".cafe-posts").hide();
  $(".cafe-reviews").hide();
  $(".cafe-events").hide();
  $("#menu").addClass("current-tab");

  $("#menu").click(function(){
    $(".cafe-menu").show();
    $(".cafe-info").hide();
    $(".cafe-posts").hide();
    $(".cafe-reviews").hide();
    $(".cafe-events").hide();
    $("#menu").addClass("current-tab");
    $("#info").removeClass("current-tab");
    $("#posts").removeClass("current-tab");
    $("#reviews").removeClass("current-tab");
    $("#events").removeClass("current-tab");
  });

  $("#info").click(function(){
    $(".cafe-info").show();
    $(".cafe-menu").hide();
    $(".cafe-posts").hide();
    $(".cafe-reviews").hide();
    $(".cafe-events").hide();
    $("#info").addClass("current-tab");
    $("#menu").removeClass("current-tab");
    $("#posts").removeClass("current-tab");
    $("#reviews").removeClass("current-tab");
    $("#events").removeClass("current-tab");
    $("#events").removeClass("current-tab");
  });

  $("#posts").click(function(){
    $(".cafe-posts").show();
    $(".cafe-info").hide();
    $(".cafe-menu").hide();
    $(".cafe-reviews").hide();
    $(".cafe-events").hide();
    $("#posts").addClass("current-tab");
    $("#info").removeClass("current-tab");
    $("#menu").removeClass("current-tab");
    $("#reviews").removeClass("current-tab");
    $("#events").removeClass("current-tab");
  });

  $("#reviews").click(function(){
    $(".cafe-reviews").show();
    $(".cafe-info").hide();
    $(".cafe-menu").hide();
    $(".cafe-posts").hide();
    $(".cafe-events").hide();
    $("#reviews").addClass("current-tab");
    $("#info").removeClass("current-tab");
    $("#posts").removeClass("current-tab");
    $("#menu").removeClass("current-tab");
    $("#events").removeClass("current-tab");
  });

  $("#events").click(function(){
    $(".cafe-events").show();
    $(".cafe-info").hide();
    $(".cafe-posts").hide();
    $(".cafe-reviews").hide();
    $(".cafe-menu").hide();
    $("#events").addClass("current-tab");
    $("#info").removeClass("current-tab");
    $("#posts").removeClass("current-tab");
    $("#reviews").removeClass("current-tab");
    $("#menu").removeClass("current-tab");
  });

});
