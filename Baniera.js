

// function carrousel(interval){
//     let index=0
//     var $imageEls = document.querySelectorAll('.first_slideshow .slide')

//     setInterval(() => {
//         index = index + 1 < $imageEls.length ? index + 1 : 0

//         $imageEls[index].classList.add('first')

//         var previous = index - 1 < 0 ? $imageEls.length - 1 : index - 1;

//         $imageEls[previous].classList.remove('first')
//     }, interval)
// }

// document.addEventListener("DOMContentLoaded", function() {
//     carrousel(2000);
//   });