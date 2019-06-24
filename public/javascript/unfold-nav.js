let burger = document.querySelector('.burger');

let close = document.querySelector('.close-nav')

let nav = document.querySelector('nav');

if(window.location.pathname === "/dashboard"){

  
  burger.addEventListener('click', function(){
    nav.classList.add('nav-unfold');
  });
  
  close.addEventListener('click', function(){
    nav.classList.remove('nav-unfold');
  })
}
