$$(".tabs-swipeable-wrap, #nav_top").hide();
$$("#bot1, #bot3, #bot4").on('touchstart', function() {
  $$(".tabs-swipeable-wrap, #nav_top").hide();
});
$$("#bot2").on('touchstart', function() {
  $$(".tabs-swipeable-wrap, #nav_top").show();
});
