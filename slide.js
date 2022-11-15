const openbutton = document.getElementById('open');
const closebutton = document.getElementById('close');
const popup = document.getElementById('popup');

function openpop(); {
  popup.showModal();
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
  var vid = document.getElementById("video");
  vid.pause();
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}