

// 定義slide
const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.arrowL');
const rightArrow = document.querySelector('.arrowR');
const indicatorParents = document.querySelector('.infoCircle ul');
var sectionIndex = 0;

// 定義圓圈
const rabSlide = document.querySelectorAll('.rabSlider');
const indicatorParents2 = document.querySelector('.circleBlock');
var circleIndex = 0;


// slide公佈欄
function setIndex() {
  document.querySelector('.infoCircle .selected').classList.remove('selected');
  slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
}

function indicatorParentsAdd() {
  indicatorParents.children[sectionIndex].classList.add('selected');
}

document.querySelectorAll('.infoCircle li').forEach(function(indicator, ind) {
  indicator.addEventListener('click', function(){
    sectionIndex = ind;
    // 這邊setIndex一定要在add前面，不然剛add的'selected'也會被remove
    setIndex();
    indicator.classList.add('selected');
    refresh();
  });
});

// slide--箭頭
leftArrow.addEventListener('click', function() {
  sectionIndex = ( sectionIndex > 0) ? sectionIndex - 1 : 0;
  setIndex();
  indicatorParentsAdd();
  refresh();
});

rightArrow.addEventListener('click', function() {
  sectionIndex = ( sectionIndex < 2) ? sectionIndex + 1 : 2;
  setIndex();
  indicatorParentsAdd();
  refresh();
});

// 自動切換1
if (jQuery(window).width() > 1200) {
  timer1 = setInterval(function(){
    if(sectionIndex < 2) {
      sectionIndex++;
      setIndex();
      indicatorParentsAdd();
    }
    else {
      sectionIndex = 0;
      setIndex();
      indicatorParentsAdd();
    }
  }, 3000);

  // 重新計時1
  function refresh() {
    clearInterval(timer1);
    timer1 = setInterval(function(){
      if(sectionIndex < 2) {
        sectionIndex++;
        setIndex();
        indicatorParentsAdd();
      }
      else {
        sectionIndex = 0;
        setIndex();
        indicatorParentsAdd();
      }
    }, 3000);
  };
};


// hover停止slide
$('.bulletinBlock').mouseover(function(){
  clearInterval(timer1);
});

$('.bulletinBlock').mouseout(function(){
  refresh();
});


// disapear兔兔切換
function setIndex2() {
  document.querySelector('.circleBlock .circleSelected').classList.remove('circleSelected');
}

function disapear() {
  for (i=0; i < rabSlide.length; i++) {
    rabSlide[i].classList.add('notActive');
  }
};

function indicatorParentsAdd2() {
  indicatorParents2.children[circleIndex].classList.add('circleSelected');
  rabSlide[circleIndex].classList.remove('notActive');
};

document.querySelectorAll('.circleBlock button').forEach(function(indicator2, ind2) {
  indicator2.addEventListener('click', function(){
    circleIndex = ind2;
    disapear();
    setIndex2();
    if (jQuery(window).width() > 1200) {
      refresh2();
    };
    if(ind2 < 3) {
      indicatorParentsAdd2();
    };
  });
});


// 自動切換2
if (jQuery(window).width() > 1200) {
  timer2 = setInterval(function(){
    if(circleIndex < 2) {
      circleIndex++;
      disapear();
      setIndex2();
      indicatorParentsAdd2();
    }
    else {
      circleIndex = 0;
      disapear();
      setIndex2();
      indicatorParentsAdd2();
    }
  }, 3000);


  // 重新計時2
  function refresh2() {
    clearInterval(timer2);
    timer2 = setInterval(function(){
      if(circleIndex < 2) {
        circleIndex++;
        disapear();
        setIndex2();
        indicatorParentsAdd2();
      }
      else {
        circleIndex = 0;
        disapear();
        setIndex2();
        indicatorParentsAdd2();
      }
    }, 3000);
  };
};


// hover停止slide
$('.circle, .mouseoverImg, .recBtn, .talk').mouseover(function(){
  clearInterval(timer2);
});

$('.circle, .mouseoverImg, .recBtn, .talk').mouseout(function(){
  refresh2();
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


// swipe手勢

var touchstartX = 0;
var touchendX = 0;

var gesuredZone = document.querySelector('.uppersection2');

gesuredZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
}, false);

gesuredZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    handleGesure();
}, false);

function handleGesure() {
  if (touchendX - touchstartX > 5) {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    setIndex();
    indicatorParentsAdd();
  };
  if (touchstartX - touchendX > 5) {
    sectionIndex = ( sectionIndex < 2) ? sectionIndex + 1 : 2;
    setIndex();
    indicatorParentsAdd();
  };
};
