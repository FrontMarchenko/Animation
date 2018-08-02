
var i = 0;

function changeClass() {
  $('body').removeClass('anim' + i);
  i = (i === 6) ? 1 : i + 1;
  $('body').addClass('anim' + i);
}
var gogo = setInterval(changeClass, 2500);
setTimeout(changeClass, 500);
$('.canvas').click(function(event) {
  clearInterval(gogo);
  changeClass();
  gogo = setInterval(changeClass, 2500);
});
