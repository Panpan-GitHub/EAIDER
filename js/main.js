$(function(){

  //Tab hide and show
  $$(".tabs-swipeable-wrap, #nav_top").hide();
  $$("#bot1, #bot3, #bot4").on('touchstart', function() {
    $$(".tabs-swipeable-wrap, #nav_top").hide();
  });
  $$("#bot2").on('touchstart', function() {
    $$(".tabs-swipeable-wrap, #nav_top").show();
  });

  //render content
  $.getJSON("https://api.myjson.com/bins/qqt42", function(json) {
    var template = $("#calendar_template").html();
    var rendered = Mustache.render(template, json)
    $("#calendar_template").html(rendered);
  })
  $.getJSON("https://api.myjson.com/bins/1765oy", function(json) {
    var template = $('#course_msg_template').html();
    Mustache.parse(template);   // optional, speeds up future uses
    var rendered = Mustache.render(template, json);
    $('#course_msg_template').html(rendered);
  })
  $.getJSON("https://api.myjson.com/bins/820fm", function(json) {
    var template = $("#bulletin_template").html();
    var rendered = Mustache.render(template, json)
    $("#bulletin_template").html(rendered);
  })

})

function get_bulletin_info(event) {
  var $target = $(event.target).parent().parent();
  var title = $target.find(".item-title").text();
  var p = $target.find(".item-subtitle").text();
  console.log($target);
  $(".bulletin_info_popup h2").html(title);
  $(".bulletin_info_popup p").html(p);
}
