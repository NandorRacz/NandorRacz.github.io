$(document).ready(function(){
  console.log("bella page loaded");
  $(".bella-info").hide();
  $(".bella-events").hide();
  $(".bella-reviews").hide();
  $(".bella-discounts").hide();
  $("#menu").addClass("current-tab");

  $("#bella-nav-button").click(function() {
    $(".bella-nav-list").toggleClass('bella-nav-list-show');
  });

  $("#menu").click(function(){
    $(".bella-menu").show();
    $(".bella-info").hide();
    $(".bella-events").hide();
    $(".bella-reviews").hide();
    $(".bella-discounts").hide();
    $("#menu").addClass("current-tab");
    $("#info").removeClass("current-tab");
    $("#events").removeClass("current-tab");
    $("#reviews").removeClass("current-tab");
    $("#discounts").removeClass("current-tab");
  });

  $("#info").click(function(){
    $(".bella-info").show();
    $(".bella-menu").hide();
    $(".bella-events").hide();
    $(".bella-reviews").hide();
    $(".bella-discounts").hide();
    $("#info").addClass("current-tab");
    $("#menu").removeClass("current-tab");
    $("#events").removeClass("current-tab");
    $("#reviews").removeClass("current-tab");
    $("#discounts").removeClass("current-tab");
    $("#discounts").removeClass("current-tab");
  });

  $("#events").click(function(){
    $(".bella-events").show();
    $(".bella-info").hide();
    $(".bella-menu").hide();
    $(".bella-reviews").hide();
    $(".bella-discounts").hide();
    $("#events").addClass("current-tab");
    $("#info").removeClass("current-tab");
    $("#menu").removeClass("current-tab");
    $("#reviews").removeClass("current-tab");
    $("#discounts").removeClass("current-tab");
  });

  $("#reviews").click(function(){
    $(".bella-reviews").show();
    $(".bella-info").hide();
    $(".bella-menu").hide();
    $(".bella-events").hide();
    $(".bella-discounts").hide();
    $("#reviews").addClass("current-tab");
    $("#info").removeClass("current-tab");
    $("#events").removeClass("current-tab");
    $("#menu").removeClass("current-tab");
    $("#discounts").removeClass("current-tab");
  });

  $("#discounts").click(function(){
    $(".bella-discounts").show();
    $(".bella-info").hide();
    $(".bella-events").hide();
    $(".bella-reviews").hide();
    $(".bella-menu").hide();
    $("#discounts").addClass("current-tab");
    $("#info").removeClass("current-tab");
    $("#events").removeClass("current-tab");
    $("#reviews").removeClass("current-tab");
    $("#menu").removeClass("current-tab");
  });

});
