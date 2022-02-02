// 윈도우가 다 로드된 후에 실행 -onload
window.onload = function(){
  let cursor = document.querySelector("#cursor");

  window.addEventListener("mousemove", mouseFunc, false);
  
  function mouseFunc(e){
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  }
}