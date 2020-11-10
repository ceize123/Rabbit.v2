

// 定義slide
const slider = document.querySelector('.modelPic');
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
    $("li.start").nextUntil(".model").toggle();
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
  $('.healthTitle').click(function(){
    $('.drop').toggleClass('rotate');
  });
});


// swipe手勢

var touchstartX = 0;
var touchendX = 0;

var gesuredZone = document.querySelector('.modelBlock');

gesuredZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    clearInterval(timer1);
}, false);

gesuredZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    handleGesure();
    // refresh();
}, false);

function handleGesure() {
  if (touchendX - touchstartX > 5) {
    sectionIndex = ( sectionIndex > 0) ? sectionIndex - 1 : 0;
    setIndex();
    // refresh();
  };
  if (touchstartX - touchendX > 5) {
    sectionIndex = ( sectionIndex < 2) ? sectionIndex + 1 : 2;
    setIndex();
    // refresh();
  };
};

var sectionIndexIpad = 0;

function setIndexIpad() {
  document.querySelector('.infoCircle .selected').classList.remove('selected');
  slider.style.transform = 'translate(' + (sectionIndexIpad) * -86.13 + 'vw)';
}

document.querySelectorAll('.infoCircle li').forEach(function(indicator, ind) {
  indicator.addEventListener('click', function(){
    sectionIndexIpad = ind;
    // 這邊setIndex一定要在add前面，不然剛add的'selected'也會被remove
    setIndexIpad();
    indicator.classList.add('selected');
  });
});
