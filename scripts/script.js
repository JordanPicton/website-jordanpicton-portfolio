// Temp Comment - Scroll Indicator

// When the user scrolls the page, execute scrollFunction
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("jsBar").style.width = scrolled + "%";
}