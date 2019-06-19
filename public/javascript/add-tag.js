let input = document.querySelector('#add-tags input');

let button = document.querySelector('#add-tags button');

let tagArea = document.querySelector('#tags')

button.addEventListener('click', function(){
  let tag = document.createElement('div');
  tag.classList.add('tag');

  let tagName = document.createElement('h3');
  tagName.innerText = input.value;

  tag.appendChild(tagName);
  tagArea.appendChild(tag);

  input.value = ""
})
