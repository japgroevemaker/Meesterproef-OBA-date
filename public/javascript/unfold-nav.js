let trigger = document.querySelector('#add-post');

let cross = document.querySelector('#add-post img')



let nav = document.querySelector('nav');


if(window.location.pathname === "/dashboard"){

trigger.addEventListener('click', function(){
  nav.classList.toggle('nav-unfold');
  cross.classList.toggle('rotate')
});

}
