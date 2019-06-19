import getInput from './catchInput.js'
if(window.location.pathname == '/shareKnowledge'){

  let currentPage = 0;
  
  let next = document.querySelector('.next');
  let prev = document.querySelector('.prev')
  
  next.addEventListener('click', function(){
    getInput.getInput.locate()
    currentPage++
    console.log(currentPage);
    
    let section = document.querySelectorAll('.section');
    section.forEach(function(hide){
      hide.classList.add('none')
    })
  
    document.getElementById(currentPage).classList.remove('none')
    document.getElementById(currentPage).classList.add('section')
  })
  
  prev.addEventListener('click', function(){
    currentPage--
    console.log(currentPage);

    let section = document.querySelectorAll('.section');
    section.forEach(function(hide){
      hide.classList.add('none')
    })
  
    document.getElementById(currentPage).classList.remove('none')
  })

}
