

// 自動切換
// let counter = 1;
// setInterval(function(){
//   document.getElementById('radio' + counter).checked = true;
//   counter++;
//   if(counter > 3) {
//     counter = 1;
//   }
// }, 4000)

// 左右slide
const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.arrowL');
const rightArrow = document.querySelector('.arrowR');
const indicatorParents = document.querySelector('.infoCircle ul');
var sectionIndex = 0;

function setIndex() {
  document.querySelector('.infoCircle .selected').classList.remove('selected');
  slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
}

document.querySelectorAll('.infoCircle li').forEach(function(indicator, ind) {
  indicator.addEventListener('click', function(){
    sectionIndex = ind;
    // 這邊setIndex一定要在add前面，不然剛add的'selected'也會被remove
    setIndex();
    indicator.classList.add('selected');
  });
});

leftArrow.addEventListener('click', function() {
  sectionIndex = ( sectionIndex > 0) ? sectionIndex - 1 : 0;
  setIndex();
  indicatorParents.children[sectionIndex].classList.add('selected');
});

rightArrow.addEventListener('click', function() {
  sectionIndex = ( sectionIndex < 2) ? sectionIndex + 1 : 2;
  setIndex();
  indicatorParents.children[sectionIndex].classList.add('selected');
});

// const slides=document.querySelector(".bulletinBlock").children;
// const prev=document.querySelector(".prev");
// const next=document.querySelector(".next");
// let index=0;
//
//
//   prev.addEventListener("click",function(){
//     prevSlide();
//   })
//
//   next.addEventListener("click",function(){
//     nextSlide();
//   })
//
//
//   function prevSlide(){
//     if(index==0){
//       index=slides.length-1;
//     }
//     else{
//       index--;
//     }
//     changeSlide();
//   }
//
//   function nextSlide(){
//     if(index==slides.length-1){
//       index=0;
//     }
//     else{
//       index++;
//     }
//     changeSlide();
//   }
//
//   function changeSlide(){
//       for(let i=0; i<slides.length; i++){
//         slides[i].classList.remove("active");
//       }
//     slides[index].classList.add("active");
//   }
