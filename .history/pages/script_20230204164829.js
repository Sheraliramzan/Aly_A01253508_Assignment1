
const hamburger = document.querySelector(".hamburger");
const navMen = document.querySelector('.navmen');

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  navMen.classList.toggle("active");
})