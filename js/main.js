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
  function render(url, temp) {
    $.getJSON(url, function(json) {
      var template = $(temp).html();
      var rendered = Mustache.render(template, json)
      $(temp).html(rendered);
    })
  }
  render("http://127.0.0.1:8887/src/calendar.json", "#calendar_template");
  render("http://127.0.0.1:8887/src/course_msg.json", "#course_msg_template");
  render("http://127.0.0.1:8887/src/bulletin.json", "#bulletin_template");
  render("http://127.0.0.1:8887/src/lost_and_found.json", "#lost_and_found_template");

  $("div.timeline-item-inner").on("click", function(event) {
    console.log(event.target);
  })
})

function locate(event, find) {
  var $target = $(event.target).parent().parent();
  return $target.find(find).text();
}

function refresh(textsrc, target) {
  var text = locate(event, textsrc);
  $(target).html(text);
}

function get_bulletin_info(event) {
  refresh(".item-title", ".bulletin_info_popup h2");
  refresh(".item-subtitle", ".bulletin_info_popup p");
}

function get_course_info(event) {
  refresh(".timeline-item-inner", "course_info_popup h2");
}

function get_lost_and_found_info(event) {
  refresh(".item-title", ".lost_and_found_info_popup h2");
  refresh(".item-after", ".lost_and_found_info_popup h3")
  refresh(".item-subtitle", ".lost_and_found_info_popup h4")
  refresh(".item-text", ".lost_and_found_info_popup p")
  $(".lost_and_found_info_popup img").attr("src", $(event.target).parent().parent().find("img").attr("src"));
}
