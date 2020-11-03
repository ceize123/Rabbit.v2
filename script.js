

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

function indicatorParentsAdd() {
  indicatorParents.children[sectionIndex].classList.add('selected');
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
  indicatorParentsAdd();
  refresh();
});

rightArrow.addEventListener('click', function() {
  sectionIndex = ( sectionIndex < 2) ? sectionIndex + 1 : 2;
  setIndex();
  indicatorParentsAdd();
  refresh();
});

// 自動切換
timer3s = setInterval(function(){
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

// 重新計時
function refresh() {
  clearInterval(timer3s);
  timer3s = setInterval(function(){
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
