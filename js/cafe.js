$(document).ready(function(){
  console.log("Cafe page loaded");
  $(".cafe-info").hide();
  $(".cafe-discounts").hide();
  $(".cafe-reviews").hide();
  $(".cafe-events").hide();
  $("#menu").addClass("current-tab");

  $("#cafe-nav-button").click(function() {
    $(".cafe-nav-list").toggleClass('cafe-nav-list-show');
  });

  $("#menu").click(function(){
    $(".cafe-menu").show();
    $(".cafe-info").hide();
    $(".cafe-discounts").hide();
    $(".cafe-reviews").hide();
    $(".cafe-events").hide();
    $("#menu").addClass("current-tab");
    $("#info").removeClass("current-tab");
    $("#discounts").removeClass("current-tab");
    $("#reviews").removeClass("current-tab");
    $("#events").removeClass("current-tab");
    $(".cafe-nav-list").removeClass('cafe-nav-list-show');
  });

  $("#info").click(function(){
    $(".cafe-info").show();
    $(".cafe-menu").hide();
    $(".cafe-discounts").hide();
    $(".cafe-reviews").hide();
    $(".cafe-events").hide();
    $("#info").addClass("current-tab");
    $("#menu").removeClass("current-tab");
    $("#discounts").removeClass("current-tab");
    $("#reviews").removeClass("current-tab");
    $("#events").removeClass("current-tab");
    $("#events").removeClass("current-tab");
    $(".cafe-nav-list").removeClass('cafe-nav-list-show');
  });

  $("#discounts").click(function(){
    $(".cafe-discounts").show();
    $(".cafe-info").hide();
    $(".cafe-menu").hide();
    $(".cafe-reviews").hide();
    $(".cafe-events").hide();
    $("#discounts").addClass("current-tab");
    $("#info").removeClass("current-tab");
    $("#menu").removeClass("current-tab");
    $("#reviews").removeClass("current-tab");
    $("#events").removeClass("current-tab");
    $(".cafe-nav-list").removeClass('cafe-nav-list-show');
  });

  $("#reviews").click(function(){
    $(".cafe-reviews").show();
    $(".cafe-info").hide();
    $(".cafe-menu").hide();
    $(".cafe-discounts").hide();
    $(".cafe-events").hide();
    $("#reviews").addClass("current-tab");
    $("#info").removeClass("current-tab");
    $("#discounts").removeClass("current-tab");
    $("#menu").removeClass("current-tab");
    $("#events").removeClass("current-tab");
    $(".cafe-nav-list").removeClass('cafe-nav-list-show');
  });

  $("#events").click(function(){
    $(".cafe-events").show();
    $(".cafe-info").hide();
    $(".cafe-discounts").hide();
    $(".cafe-reviews").hide();
    $(".cafe-menu").hide();
    $("#events").addClass("current-tab");
    $("#info").removeClass("current-tab");
    $("#discounts").removeClass("current-tab");
    $("#reviews").removeClass("current-tab");
    $("#menu").removeClass("current-tab");
    $(".cafe-nav-list").removeClass('cafe-nav-list-show');
  });

});
