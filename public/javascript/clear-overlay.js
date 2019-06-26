let overlay = document.querySelector('.overlay');

let button = document.querySelector('.close');

button.addEventListener('click', function(){
  overlay.classList.add('down');
})
