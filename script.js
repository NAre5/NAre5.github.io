var flag = true;
var nflag = 1;
var filter = "none";
function changeColor() {
  flag = !flag;
  nflag = (nflag + 1) % 3;

  if (nflag == 0) {
    filter = "grayscale(100%)";
    style_button.value = "noraml";
  } else if (nflag == 1) {
    filter = "none";
    style_button.value = "blue";
  } else {
    filter = "sepia(200%) hue-rotate(190deg) saturate(1000%)";
    style_button.value = "greyscale";
  }

  var elements = document.getElementsByTagName("section");
  for (e of elements) {
    e.style.filter = filter;
  }
}
