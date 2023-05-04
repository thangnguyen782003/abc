
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const BtnList=document.querySelector(".bars");
const Modal=document.querySelector('.modal');
BtnList.addEventListener('click',function(event){
 Modal.classList.add('open');
 ModalContainer.classList.remove('remove');
})
const Overlay=document.querySelector(".modal_overlay");
Overlay.addEventListener('click',function(event){
  Modal.classList.remove('open');
  ModalContainerRegister.classList.remove('open');
})

// modal register
const ModalContainer=document.querySelector(".modal_container");
const BtnRegister=document.querySelector(".js-register-btn");
const ModalContainerRegister=document.querySelector(".modal_container-register");
BtnRegister.addEventListener('click',function(event){
  ModalContainer.classList.add('remove');
  ModalContainerRegister.classList.add('open');
})


