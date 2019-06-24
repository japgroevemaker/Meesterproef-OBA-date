let input = document.querySelector('#add-tags input');

let button = document.querySelector('#add-tags button');

let tagArea = document.querySelector('#tags')
let tagInputHidden = document.querySelector(`input[name="tags"]`)

let tags = []

button.addEventListener('click', function(e){
  e.preventDefault()

  let tag = document.createElement('div');
  tag.classList.add('tag');

  let tagName = document.createElement('h3');
  tagName.innerText = input.value;
  tags.push(input.value)
  tagInputHidden.value=tags

  tag.appendChild(tagName);
  tagArea.appendChild(tag);

  input.value = ""
})