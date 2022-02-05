let cursor = document.querySelector(".cursor");
let logo = document.querySelector(".logo");
let menu = document.querySelectorAll(".menu ul li");
let scroll= window.screen.height;


// 윈도우가 다 로드된 후에 실행 -onload
window.onload = function(){

  window.addEventListener("mousemove", mouseFunc, false);
  window.addEventListener("scroll", scrollEvent);

  function mouseFunc(e){
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }

  // 트랜지션으로 스크롤 
  function scrollEvent(e){
    console.log(scroll);

    
  }
}

function onmouseover_event(e){
  cursor.classList.add("on");
  // logo.addEventListener("click", e=>{

  // });

  logo.addEventListener("mouseleave", e =>{
    cursor.classList.remove("on");
  });

  for (let le of menu) {
    le.addEventListener("mouseleave", e =>{
      cursor.classList.remove("on");
    });
  }
}