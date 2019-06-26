
let currentPage = 0;

let next = document.querySelector('.next');
let prev = document.querySelector('.prev')

function checkPostName(){
  console.log('fireddd')
  const postNameInput = document.querySelector('#validatePostName')
  const feedbackElement = document.createElement('div')
  feedbackElement.setAttribute('class', 'feedback')
  postNameInput.addEventListener('change', (e)=>{
const regex = /[!@#$%^&*(),.?":{}|<>]/g
const feedBackArea = document.querySelector('.input-field > h2')
   
    // console.log(e.target.match(/^[A-Za-z\s]+$/))
    if(e.target.value.match(regex)){
console.error('Waarschuwing: speciale karakters zijn niet toegestaan in input[name="postName"]')
console.error(e.target.value.match(regex))
      
      console.log('rendering feedback')
      feedbackElement.innerHTML = `OOPS, \n je kunt helaas geen speciale karakters gebruiken in de titel van je post` 
      console.log(feedBackArea)
      console.log(feedBackArea.childNodes.length)
      if(feedBackArea.childNodes.length <= 1 ){
        feedBackArea.insertAdjacentElement('beforeend', feedbackElement)
        
      }
    } else{
      if(feedBackArea.querySelector('.feedback')){
        const feedback = feedBackArea.querySelector('.feedback')
        console.log(feedback)
        feedBackArea.removeChild(feedback)
      }
    }
    })
  }
checkPostName()

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
