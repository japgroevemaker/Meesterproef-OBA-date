import getInput from './catchInput.js'


let form = document.querySelector('form');

form.addEventListener('submit', function(e){
  e.preventDefault()
})

let preview = document.querySelector('#profile-pic-preview');

let inputImg = document.querySelector('#pic')

let removePic = document.querySelector('#remove-pic');

removePic.addEventListener('click', function(){
  removePreview()
})

inputImg.addEventListener('change', function(){
  showPic()
});

function showPic () {
  let img = inputImg.files[0]
  let reader = new FileReader();
  reader.readAsDataURL(img);
  
  
  
  
  reader.onload = function() {
    preview.setAttribute('src', reader.result)
  getInput.getInput.handleImage(reader.result)
  }
}

function removePreview () {
    preview.setAttribute('src', "/assets/placeholder.jpg")
}
