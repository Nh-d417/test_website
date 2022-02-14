const cursor = document.querySelector(".cursor");
const logo = document.querySelector(".logo");
const menu = document.querySelectorAll(".menu ul li");
const container1_txt = document.querySelector(".container1 .txt");
const container1_boxs = document.querySelector(".container1 .boxs");
const aboutPop = document.querySelector(".aboutPop");
const closeA = document.querySelector(".aboutPop .title .closebtn");

// 윈도우가 다 로드된 후에 실행 -onload
window.onload = function(){

  window.addEventListener("mousemove", mouseFunc, false);
  window.addEventListener("scroll", scrollEvent);

  function mouseFunc(e){
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }

  // 트랜지션으로 스크롤 
  function scrollEvent(e){
    let scroll= document.documentElement.scrollTop;
    let per = Math.ceil(scroll/(document.body.scrollHeight - window.innerHeight) * 100);
  
    if(per>=20 ){
      container1_txt.style.opacity="1";
    }else{
      container1_txt.style.opacity="0"
    }

    if(per>=30 ){
      container1_boxs.style.opacity="1";
    }else{
      container1_boxs.style.opacity="0"
    }
  }
}

function onmouseover_event(e){
  console.dir(e);
  if (e.type ==="mouseleave"){
    cursor.classList.remove("on");
  }else if(e.type ==="mouseenter"){
    cursor.classList.add("on");
  }
 
  //     aboutPop.classList.add("on");
  //     text.addEventListener("click", e=>{s
  //       if (text.innerText == "About") {
  //         // aboutPop.classList.add("on");
  //         //
  //       }else{
  //         console.log(text);
  //       }
  //     });
  //   });
  // }
}

logo.addEventListener("mouseenter", onmouseover_event);
logo.addEventListener("mouseleave", onmouseover_event);

 for (let le of menu) {
  //  console.log(le);
   le.addEventListener("mouseenter", onmouseover_event);
   le.addEventListener("mouseleave", onmouseover_event);
   le.addEventListener("click" , e =>{
    aboutPop.classList.toggle("on");
   })
 }

 closeA.addEventListener("click",  popupClosed);

function popupClosed(){
  aboutPop.classList.remove("on")
}