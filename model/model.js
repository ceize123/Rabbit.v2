

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


// Ipad
// hamburger
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar");
const links = document.querySelectorAll(".navbar ul li");
const lines = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  // foreach裡面的參數可以隨意取
  lines.forEach(line => {
    line.classList.toggle("purpleToggle");
  });
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

$(document).ready(function(){
  $('.navBtn').click(function(){
    $(this).next('nav ul .navToggle').toggle();
    $(this).children('span').toggleClass('rotate');
  });
  $('.hamburger').click(function(){
    $('nav ul .navToggle').slideUp();
    $('.navBtn').children('span').removeClass('rotate');
  });
});
