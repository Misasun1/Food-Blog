
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });




// receipe of the month 

let btn = document.querySelector('#SwalBtn');
btn.addEventListener("click", ()=> {
  Swal.fire({
    position: "center",
    icon: "heart",
    title: "💕Thank you for rating💕",
    showConfirmButton: true,
    timer: 1500
  });

})





