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

// findRab
  $('.findRabBtn').click(function(){
    $('.findRabSectionIpad').css('margin-left',0)
  });
  //
  // $('.choseOutside > .choseList').click(function(){
  //   $('.choseInside').css('left',0);
  // });
  $(".choseOutside > .choseList").each(function(index){
    $(this).click(function(){
      $("#Inside"+index+"").css('left',0);
    });
  });

  $('.lessIcon').click(function(){
    $('.choseInside').css('left','-76.2vw');
  });

  $('.findRabRight').click(function(){
    $('.findRabSectionIpad').css('margin-left','-100vw');
    $('.choseInside').css('left','-76.2vw');
  });
