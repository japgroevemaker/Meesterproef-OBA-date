
let currentPage = 0;

let next = document.querySelector('.next');
let prev = document.querySelector('.prev')


function addEvent(){
  next.addEventListener('click', clickNext)
}
addEvent()


function clickNext(event){
    currentPage++
    console.log(currentPage);

    let section = document.querySelectorAll('.section');
    section.forEach(function(hide){
      hide.classList.add('none')
    })

    document.getElementById(currentPage).classList.remove('none')
    document.getElementById(currentPage).classList.add('section')
  addEvent()
}

  prev.addEventListener('click', function(){
    currentPage--
    console.log(currentPage);

    let section = document.querySelectorAll('.section');
    section.forEach(function(hide){
      hide.classList.add('none')
    })

    document.getElementById(currentPage).classList.remove('none')
  })
