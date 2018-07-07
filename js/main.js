$(function() {

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
  render("src/calendar.json", "#calendar_template");
  render("src/course_msg.json", "#course_msg_template");
  render("src/bulletin.json", "#bulletin_template");
  render("src/lost_and_found.json", "#lost_and_found_template");
  render("src/empty_room.json", "#room_template");
  render("src/empty_room.json", "#room_templatec");
  render("src/attend.json", "#attendance_template");
  render("src/activity.json", "#activity_template");



  var info = JSON.parse(localStorage.storage);
  $("#pname").html(info.name);
  $("#psex").html(info.sex);
  $("#pnumber").html(info.username);
  $("#address").attr("value", info.address);
  $("#phone").attr("value", info.phone);

})

function locate(event, closest, find) {
  var $target = $(event.target).closest(closest);
  return $target.find(find).text();
}

function refresh(textsrc, closest, target) {
  var text = locate(event, closest, textsrc);
  $(target).html(text);
}

function get_bulletin_info(event) {
  refresh(".item-title", "a", ".bulletin_info_popup h2");
  refresh(".item-subtitle", "a", ".bulletin_info_popup p");
}

function get_course_info(event) {
  refresh("#course_name", ".timeline-item-inner", ".course_info_popup .card-header");
  refresh("#course_time", ".timeline-item-inner", ".course_info_popup .card-content");
  refresh("#course_place", ".timeline-item-inner", ".course_info_popup .card-footer");
}

function get_course_msg_info(event) {
  refresh(".item-title", "a", ".course_msg_info_popup .card-header");
  refresh(".item-subtitle", "a", ".course_msg_info_popup .card-content");
  refresh(".item-after", "a", ".course_msg_info_popup .card-footer");
}

function get_lost_and_found_info(event) {
  refresh(".item-title", "a", ".lost_and_found_info_popup h4");
  refresh(".item-after", "a", ".lost_and_found_info_popup .demo-facebook-date")
  refresh(".item-subtitle", "a", ".lost_and_found_info_popup .demo-facebook-name")
  refresh(".item-text", "a", ".lost_and_found_info_popup p")
  $(".lost_and_found_info_popup .card-content img").attr("src", $(event.target).parent().parent().find("img").attr("src"));
}

function get_activity_info(event) {
  refresh(".item-title", "a", ".activity_info_popup .block-title");
  refresh(".item-after", "a", ".activity_info_popup h4")
  refresh(".item-subtitle", "a", ".activity_info_popup h5")
  refresh(".item-text", "a", ".activity_info_popup p")
  $(".activity_info_popup .inset img").attr("src", $(event.target).parent().parent().parent().find("img").attr("src"));
}
