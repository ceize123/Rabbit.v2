// Ipad
// hamburger
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar");
const links = document.querySelectorAll(".navbar ul li");
const lines = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  // foreach裡面的參數可以隨意取
  // 漢堡變色
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
  let count = 0;
  $('.findRabBtn').click(function(){
    $('.findRabSectionIpad').css('margin-left',0);
    // 讓背景固定，不能滑動
    $("body").css("overflow", "hidden");
  });

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
    $("body").css("overflow", "auto");
  });


// 創造空set、空attribute，利用它們判斷是否已經新增
  const checkValue = new Set();

  $('.choseInside > .choseList').click(function() {
    // 檢查set裡面有沒有這個value，沒有的話才新增
    if ( checkValue.has($(this).attr('value')) == false ) {
    // 在cleanAll外部新增，所以用before
      $('.cleanAll').before('<div class="choosenItem"><img src="../images/兔兔類別總覽/x.svg" />' + $(this).attr('value') + '</div>');
      checkValue.add($(this).attr('value'));
      console.log($(this).attr('value'));
      $('.cleanAll p').css('opacity', 1);
      count++;
    };
  });

  // 個別清除 delegate
  $('.choosenSection').delegate('.choosenItem','click',function(){
    console.log($(this).text());
    $(this).remove();
    checkValue.delete($(this).text());
    count--;
    if (count <= 0){
      $('.cleanAll p').css('opacity', 0);
    };
  });


  // 清空
  $('.cleanAll').click(function(){
    $('.choosenItem').remove();
    checkValue.clear();
    $('.cleanAll p').css('opacity', 0);
    count = 0;
  });
