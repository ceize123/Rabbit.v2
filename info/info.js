$(document).ready(function() {
  $(".question").click(function() {
    $(this).next(".answer").slideToggle();
    $(this).children(".drop").toggleClass('rotate');
  });
  $('.questionLineIpad').click(function(){
    $('.hiddenQuestion').toggleClass('flex');
    $(this).children('div').toggleClass('rotate');
    $('.hiddenAnswer').css('display', 'none');
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


//換行
if (jQuery(window).width() < 1200) {
  $('.freQues span').prepend('<br>');
};
