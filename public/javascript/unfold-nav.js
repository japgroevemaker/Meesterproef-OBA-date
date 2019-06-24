let trigger = document.querySelector('#add-post');

let cross = document.querySelector('#add-post img')

let close = document.querySelector('.close-nav')

let nav = document.querySelector('nav');


if(window.location.pathname === "/dashboard"){

trigger.addEventListener('click', function(){
  nav.classList.toggle('nav-unfold');
  cross.classList.toggle('rotate')
});


  
  burger.addEventListener('click', function(){
    nav.classList.add('nav-unfold');
  });
  
  close.addEventListener('click', function(){
    nav.classList.remove('nav-unfold');
  })
}
