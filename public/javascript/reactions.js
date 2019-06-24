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

      let time = Date()
      let timeStamp = time.slice(16, 21)
      console.log(timeStamp);

      let date = Date()
      let dateStamp = date.slice(4, 10)
      console.log(dateStamp);

      let reactionImg = document.createElement('img');
      reactionImg.setAttribute('src', '/assets/placeholder.jpg')
      let reactionBox = document.createElement('div');
      reactionBox.setAttribute('class', 'reaction');
      let dateTimeParagraph = document.createElement('p');
      dateTimeParagraph.setAttribute('class', 'date-time')
      dateTimeParagraph.innerHTML = `${dateStamp} ${timeStamp}`
      let reaction = document.createElement('p');
      console.log(e.target);
      reaction.innerHTML = f.childNodes[1].value

      reactionContainer.appendChild(reactionImg)
      reactionBox.appendChild(reaction)
      reactionContainer.appendChild(reactionBox);
      reactionContainer.appendChild(dateTimeParagraph);

      f.childNodes[1].value = ""
    })
  })
