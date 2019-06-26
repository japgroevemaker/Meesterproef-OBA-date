let search = document.querySelector('#search-tags');



search.addEventListener('keyup', (e)=>{
  e.preventDefault();

  let filter = search.value.toUpperCase()
  
  let thread = document.querySelector('#thread')
  
  let messages = thread.querySelectorAll('.message')
  
  let tags = document.querySelectorAll('.tag')
  
  
  messages.forEach(function(filterTag) {
    search.querySelectorAll('.tag')
  
    if (filterTag.innerHTML.toUpperCase().indexOf(filter) > -1) {
      filterTag.classList.remove('none')
    } else {
      filterTag.classList.add('none')
    }
  })

}) 
