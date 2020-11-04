

// 定義slide
const slider = document.querySelector('.modelpic');
const leftArrow = document.querySelector('.arrow1');
const rightArrow = document.querySelector('.arrow2');
var sectionIndex = 0;

function setIndex() {
  slider.style.transform = 'translate(' + (sectionIndex) * -34.35 + '%)';
}

// slide--箭頭
leftArrow.addEventListener('click', function() {
  sectionIndex = ( sectionIndex > 0) ? sectionIndex - 1 : 0;
  setIndex();
});

rightArrow.addEventListener('click', function() {
  sectionIndex = ( sectionIndex < 1) ? sectionIndex + 1 : 1;
  setIndex();
});



$(document).ready(function() {
  let counter = 1;
  $(".healthTitle").click(function() {
    $("li.start").nextUntil(".model").slideToggle();
    if (counter == 1) {
      $("ul.toggleUl").addClass("healthScroll");
      counter++;
    }
    else {
      $("ul.toggleUl").removeClass("healthScroll");
      counter = 1;
    };
  });
});
