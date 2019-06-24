let trigger = document.querySelector('#add-post');

let cross = document.querySelector('#add-post img')

let close = document.querySelector('.close-nav')

let nav = document.querySelector('nav');

trigger.addEventListener('click', function(){
  nav.classList.toggle('nav-unfold');
  cross.classList.toggle('rotate')
});

close.addEventListener('click', function(){
  nav.classList.remove('nav-unfold');
})
