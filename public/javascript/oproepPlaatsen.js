// hierin bevindt zich alle logica voor de oproepPlaatsen.ejs pagina

import events from './events.js'
const init = {
    start: function(){
        const volgendeButton = document.querySelectorAll('.volgende')
        let oproepForm = document.querySelector('#oproepForm')
      oproepForm =   Array.from(oproepForm.children);
        console.log(oproepForm)
console.log(volgendeButton)

let index = 0;

function volgende(){
        volgendeButton.forEach(button =>{
   addEventListener('click', (event)=>{
       oproepForm[index].classList.add('hideElement')
       oproepForm[index+1].classList.remove('hideElement')
       event.preventDefault();
    }
        )})
}
volgende()
    }
}

init.start()

const purpose = {
    hideAndShow: function(element1, element2){
    events.hideElement(element1)
    events.showElement(element2)
    }
}