let trigger = document.querySelector('#add-post');
let cross = document.querySelector('#add-post img')
let nav = document.querySelector('nav');
let dashboardSearch = document.querySelector('#dashboard-search')

if(window.location.pathname === "/dashboard" || '/'){

trigger.addEventListener('click', function(){
  nav.classList.toggle('nav-unfold');
  cross.classList.toggle('rotate')

  if (nav.classList.contains('nav-unfold')) {
    dashboardSearch.style = 'box-shadow: none !important;';
    console.log('contains');
  } else {
    header.style = 'box-shadow: 0px 0px 14px -4px rgba(0,0,0,0.24) !important;'
  }
});

}
