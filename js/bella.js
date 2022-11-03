$(document).ready(function(){
  console.log("bella page loaded");
  $(".bella-info").hide();
  $(".bella-posts").hide();
  $(".bella-reviews").hide();
  $(".bella-history").hide();
  $("#menu").addClass("current-tab");

  $("#menu").click(function(){
    $(".bella-menu").show();
    $(".bella-info").hide();
    $(".bella-posts").hide();
    $(".bella-reviews").hide();
    $(".bella-history").hide();
    $("#menu").addClass("current-tab");
    $("#info").removeClass("current-tab");
    $("#posts").removeClass("current-tab");
    $("#reviews").removeClass("current-tab");
    $("#history").removeClass("current-tab");
  });

  $("#info").click(function(){
    $(".bella-info").show();
    $(".bella-menu").hide();
    $(".bella-posts").hide();
    $(".bella-reviews").hide();
    $(".bella-history").hide();
    $("#info").addClass("current-tab");
    $("#menu").removeClass("current-tab");
    $("#posts").removeClass("current-tab");
    $("#reviews").removeClass("current-tab");
    $("#history").removeClass("current-tab");
    $("#history").removeClass("current-tab");
  });

  $("#posts").click(function(){
    $(".bella-posts").show();
    $(".bella-info").hide();
    $(".bella-menu").hide();
    $(".bella-reviews").hide();
    $(".bella-history").hide();
    $("#posts").addClass("current-tab");
    $("#info").removeClass("current-tab");
    $("#menu").removeClass("current-tab");
    $("#reviews").removeClass("current-tab");
    $("#history").removeClass("current-tab");
  });

  $("#reviews").click(function(){
    $(".bella-reviews").show();
    $(".bella-info").hide();
    $(".bella-menu").hide();
    $(".bella-posts").hide();
    $(".bella-history").hide();
    $("#reviews").addClass("current-tab");
    $("#info").removeClass("current-tab");
    $("#posts").removeClass("current-tab");
    $("#menu").removeClass("current-tab");
    $("#history").removeClass("current-tab");
  });

  $("#history").click(function(){
    $(".bella-history").show();
    $(".bella-info").hide();
    $(".bella-posts").hide();
    $(".bella-reviews").hide();
    $(".bella-menu").hide();
    $("#history").addClass("current-tab");
    $("#info").removeClass("current-tab");
    $("#posts").removeClass("current-tab");
    $("#reviews").removeClass("current-tab");
    $("#menu").removeClass("current-tab");
  });

});
