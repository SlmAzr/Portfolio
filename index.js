// // sticky-navbar.js

// window.onscroll = function() {stickyNavbar()};

// var navbar = document.getElementById("myNavbar");
// var sticky = navbar.offsetTop;

// function stickyNavbar() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky");
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }


// // Scroll

// let scrolls = document.querySelectorAll(".scroll");

// window.onscroll = ()=>{
//     scrolls.forEach(sec=>{
//         let top = window.scrollY;
//         let offset= sec.offsetTop-150;
//         let height = sec.offsetHeight;

//         if (top>= offset && top < offset+height){
//             sec.classList.add('show-animate');
//         }
//             else {
//                 sec.classList.remove("show-animate");
//             }

        
//     })
// }

// sticky-navbar.js

// window.onscroll = function () {
//     stickyNavbar();
//     animateSections();
//   };
  
//   var navbar = document.getElementById("myNavbar");
//   var sticky = navbar.offsetTop;
  
//   function stickyNavbar() {
//     if (window.pageYOffset >= sticky) {
//       navbar.classList.add("sticky");
//     } else {
//       navbar.classList.remove("sticky");
//     }
//   }
  
//   function animateSections() {
//     let scrolls = document.querySelectorAll(".scroll");
  
//     scrolls.forEach((sec) => {
//       let top = window.scrollY;
//       let offset = sec.offsetTop - 150;
//       let height = sec.offsetHeight;
  
//       if (top >= offset && top < offset + height) {
//         sec.classList.add("show-animate");
//       } else {
//         sec.classList.remove("show-animate");
//       }
//     });
//   }
  
window.onscroll = function () {
    stickyNavbar();
  };
  
  var navbar = document.getElementById("myNavbar");
  var sticky = navbar.offsetTop;
  
  function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
  

  window.onscroll = function () {
    animateSections();
  };
  
  function animateSections() {
    let scrolls = document.querySelectorAll(".scroll");
  
    scrolls.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 350;
      let height = sec.offsetHeight;
  
      if (top >= offset && top < offset + height) {
        sec.classList.add("show-animate");
      } else {
        sec.classList.remove("show-animate");
      }
    });
  }
  