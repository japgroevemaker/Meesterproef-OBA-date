let input = document.querySelector('#add-tags input');

let button = document.querySelector('#add-tags > button');

let tagArea = document.querySelector('#tags')
let tagInputHidden = document.querySelector(`input[name="tags"]`)
const tagArray = []

let tags = []

button.addEventListener('click', function(e){
  e.preventDefault()

  let newTag = document.createElement('div')
  newTag.setAttribute('class', 'tag')
  newTag.innerHTML = ` 
  <h3>${input.value}</h3>
  `

  tagArea.appendChild(newTag);
  tagArray.push(input.value)
  tagInputHidden.value = tagArray.toString()
  input.value = ""
  console.log(tagInputHidden.value)

})