// sticky nav bar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;

let menuToggler = document.getElementById('menuToggler');

function myFunction() {
  if ((window.scrollY >= sticky)) {
    navbar.classList.add("sticky")
    menuToggler.classList.add('menuDisplay');
  } else {
    navbar.classList.remove("sticky");
    menuToggler.classList.remove('menuDisplay');

  }
}

// nav bar back to normal position
let menuIcon = document.getElementById('menuIcon');
menuIcon.addEventListener('click',(event)=>{
    navbar.classList.remove('sticky')

})