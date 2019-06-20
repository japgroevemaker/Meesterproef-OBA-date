import getInput from './catchInput.js'


let form = document.querySelector('form');

form.addEventListener('submit', function(e){
  e.preventDefault()
})

let preview = document.querySelector('#profile-pic-preview');

let inputImg = document.querySelector('#pic')

let removePic = document.querySelector('#remove-pic');

// added event as param and prevented page reload
removePic.addEventListener('click', function(event){
  removePreview()
  event.preventDefault()
})
// added event as param and prevented page reload
inputImg.addEventListener('change', function(event){
  showPic()
  event.preventDefault()
});

function showPic () {
  let img = inputImg.files[0]
  let reader = new FileReader();
  reader.readAsDataURL(img);
  
  
  
  
  reader.onload = function(event) {
    preview.setAttribute('src', reader.result)
    getInput.getInput.handleImage(reader.result)
    event.preventDefault()

  }
}

function removePreview () {
    preview.setAttribute('src', "/assets/placeholder.jpg")
}
