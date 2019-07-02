window.onscroll = function(){
  let scrollPosY = window.pageYOffset;
  console.log(scrollPosY);

  let header = document.querySelector('#dashboard-header');
  let img = document.querySelector('#dashboard-header #logo');
  let nav = document.querySelector('nav');
  let dashboardSearch = document.querySelector('#dashboard-search');
  let addPost = document.querySelector('#add-post');
  let thread = document.querySelector('#thread');
  let sticky = document.querySelector('.sticky');

  if (scrollPosY > 17) {
    header.classList.add('sticky');
    nav.style = 'margin: 20% auto 10%'
    img.style = 'transition: all 0.5s'
    header.style = 'box-shadow: 0px 0px 14px -4px rgba(0,0,0,0.24) !important;'
  } else {
    header.classList.remove('sticky')
    nav.style = 'margin: 10% auto 10%'
    img.style = 'transition: all 0.5s'
    dashboardSearch.style = 'margin: 0% auto 0 !important;'
    header.style = 'box-shadow: none !important'
  }

  if (scrollPosY > 250) {
    nav.classList.add('fixed-nav');
    dashboardSearch.style = 'margin: 95% auto 0;'
    addPost.style = 'opacity: 1 !important;'
  } else {
    nav.classList.remove('fixed-nav');
    dashboardSearch.style = 'margin: 0% auto 0 !important;'
    addPost.style = 'opacity: 0 !important;'
  }

  if (scrollPosY > 345) {
    dashboardSearch.classList.add('fixed-dashboard-search')
    dashboardSearch.style = 'margin: auto;'
    dashboardSearch.style = 'margin: 0% auto 0 !important;'
    thread.style = 'margin: 135% auto 0;'
    header.style = 'box-shadow: none'

  } else {
    dashboardSearch.classList.remove('fixed-dashboard-search')
    thread.style = 'margin: auto;'
  }
}
