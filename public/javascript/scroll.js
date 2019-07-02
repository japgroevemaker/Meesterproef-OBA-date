window.onscroll = function(){
  let scrollPosY = window.pageYOffset;
  console.log(scrollPosY);

  let header = document.querySelector('#dashboard-header');
  let img = document.querySelector('#dashboard-header #logo');
  let nav = document.querySelector('nav');
  let dashboardSearch = document.querySelector('#dashboard-search');
  let addPost = document.querySelector('#add-post');

  if (scrollPosY > 17) {
    header.classList.add('sticky');
    nav.style = 'margin: 20% auto 10%'
    img.style = 'transition: all 0.5s'
  } else {
    header.classList.remove('sticky')
    nav.style = 'margin: 10% auto 10%'
    img.style = 'transition: all 0.5s'
  }

  if (scrollPosY > 250) {
    nav.classList.add('fixed-nav');
    dashboardSearch.style = 'margin: 95% auto 0;'
    addPost.style = 'opacity: 1 !important;'
  } else {
    nav.classList.remove('fixed-nav');
    dashboardSearch.style = 'margin: 0% auto 0;'
    addPost.style = 'opacity: 0 !important;'
  }
}
