let cursor = document.querySelector(".cursor");
let logo = document.querySelector(".logo");
let menu = document.querySelectorAll(".menu ul li");
let container1_txt = document.querySelector(".container1 .txt");
let container1_boxs = document.querySelector(".container1 .boxs");
let aboutPop = document.querySelector(".aboutPop");


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


    le.addEventListener("mouseenter", e=>{
      let text = e.currentTarget.querySelector("p");
      cursor.style.zIndex = "5";
      // let aboutPop = document.querySelector(".aboutPop");
      
      aboutPop.classList.add("on");
      text.addEventListener("click", e=>{s
        if (text.innerText == "About") {
          // aboutPop.classList.add("on");
          //
        }else{
          console.log(text);
        }
      });
    });
  }
}

function popup(){
  let closeA = document.querySelector(".aboutPop .title .closebtn");

  closeA.addEventListener("click", e=>{
    console.log("click!");
    aboutPop.classList.remove("on");
  },false);

  closeA.addEventListener("mouseenter", e =>{
    cursor.style.zIndex = "5";
  });

}