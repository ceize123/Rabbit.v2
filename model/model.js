

// 定義slide
const slider = document.querySelector('.modelPic');
const leftArrow = document.querySelector('.arrow1');
const rightArrow = document.querySelector('.arrow2');
const indicatorParents = document.querySelector('.infoCircle ul');
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
  $('.healthTitle').click(function(){
    $('.drop').toggleClass('rotate');
  });
});

// 換行
var br = document.createElement("br");;
if (jQuery(window).width() < 1200) {
  $('.healthRecord span').prepend(br);
};

var sectionIndexIpad = 0;

function setIndexIpad() {
  document.querySelector('.infoCircle .selected').classList.remove('selected');
  slider.style.transform = 'translate(' + (sectionIndexIpad) * -86.2 + 'vw)';
}

function indicatorParentsAdd() {
  indicatorParents.children[sectionIndexIpad].classList.add('selected');
}

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
    sectionIndexIpad = ( sectionIndexIpad > 0) ? sectionIndexIpad - 1 : 0;
    setIndexIpad();
    indicatorParentsAdd();
    // refresh();
  };
  if (touchstartX - touchendX > 5) {
    sectionIndexIpad = ( sectionIndexIpad < 2) ? sectionIndexIpad + 1 : 2;
    setIndexIpad();
    indicatorParentsAdd();
    // refresh();
  };
};

document.querySelectorAll('.infoCircle li').forEach(function(indicator, ind) {
  indicator.addEventListener('click', function(){
    sectionIndexIpad = ind;
    // 這邊setIndex一定要在add前面，不然剛add的'selected'也會被remove
    setIndexIpad();
    indicator.classList.add('selected');
  });
});

// 手機
// 調整順序
if (jQuery(window).width() < 768) {
  $('.model').prependTo('.rabImg');
  $('.adoptInfo h2').prependTo('.imgBlock');
  $('.modelInput').appendTo('.healthRecord');


  function setIndexIpad() {
    document.querySelector('.infoCircle .selected').classList.remove('selected');
    slider.style.transform = 'translate(' + (sectionIndexIpad) * -100 + 'vw)';
  }
};
