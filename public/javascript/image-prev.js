import getInput from './catchInput.js'


// let form = document.querySelector('form');

// form.addEventListener('submit', function(e){
// })

let preview = document.querySelector('#profile-pic-preview');

let inputImg = document.querySelector('#pic')

let imageEncoded = "";


if(window.location.pathname === "/shareKnowledge" || "somethingTogether"){
  let removePic = document.querySelector('#remove-pic');


  let imageInForm = document.querySelector('#imageInForm')

  
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
  
  
  
  
  reader.onload = function(e) {
    e.preventDefault()
    
    // console.log(reader.result)
    const imageInString = document.createElement('input')
    imageInString.setAttribute('name', "picString")
    imageInString.setAttribute('type', "text")
    imageInString.setAttribute('id', "inputImageString")
    // imageInForm.attributes.add('class', 'none')
    imageInString.value = reader.result
    // console.log(imageInForm)
document.querySelector('form').append(imageInString)



    preview.setAttribute('src', reader.result)
  }
}

function removePreview () {
  preview.setAttribute('src', "/assets/placeholder.jpg")
}
} 
