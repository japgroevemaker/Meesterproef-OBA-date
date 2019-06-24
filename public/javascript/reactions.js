  // let reactionForm = document.querySelectorAll('.reaction-form');
  //
  // console.log(reactionForm);
  //
  // reactionForm.forEach(function(noDefault){
  //   noDefault.addEventListener('submit', function(e){
  //     e.preventDefault()
  //   })
  // })

  let form = document.querySelectorAll(`.reaction-form`)

  form.forEach(f => {
    let uniqueSectionID = f.parentElement.parentElement.id
    f.addEventListener('submit', e => {
      e.preventDefault()
      let reactionContainer = document.querySelector(`#${uniqueSectionID} #reactions`)

      let reactionBox = document.createElement('div');
      reactionBox.setAttribute('class', 'reaction')
      let reaction = document.createElement('p');
      console.log(e.target);
      reaction.innerHTML = f.childNodes[1].value

      reactionBox.appendChild(reaction)
      reactionContainer.appendChild(reactionBox)

    })
  })
