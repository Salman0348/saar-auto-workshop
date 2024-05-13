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

// burgor menu

let burgorIconDiv = document.getElementById('burgorIconDiv');
let burgorIcon = document.getElementById('burgorIcon')
let burgorMenuItems = document.getElementById('burgorMenuItems')

burgorIcon.addEventListener('click',(event)=>{
  if(burgorIcon.classList.contains('fa-bars')){
    burgorIcon.classList.remove('fa-bars');
    burgorIcon.classList.add('fa-xmark');
  }else{
    burgorIcon.classList.remove('fa-xmark');
    burgorIcon.classList.add('fa-bars');

  }
  burgorMenuItems.classList.toggle('burgorMenuItems')
  burgorIconDiv.classList.toggle('burgorDivTranslate')
  burgorIcon.classList.toggle('burgorTranslate')

})
