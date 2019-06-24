let socket = io()

let form = document.querySelectorAll(`.reaction-form`)

form.forEach(f => {
  let uniqueSectionID = f.parentElement.parentElement.id
  f.addEventListener('submit', e => {
    e.preventDefault()

    reaction(uniqueSectionID, e, f)

    // when the server broadcasts a updateReaction message, update DOM on clients
    //////////////////
    ///////////
    ////
    ///// at the moment there's a bug that duplicates the reactions. there are no duplicates in the data
    // vailiants message had no prop: reactions?
    ////
    socket.on('updateReaction', function (data) {
      console.log(data)
      console.log(f.parentElement)



      function addOnReceived(data) {
        data[0].reactions.forEach(receivedReaction => {
          let reactionContainer = document.querySelector(`#${uniqueSectionID} #reactions`)
          console.log(reactionContainer)
          // reactionContainer.innerHTML = '';
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
          reaction.innerHTML = receivedReaction
          reactionContainer.appendChild(reactionImg)
          reactionBox.appendChild(reaction)
          reactionContainer.appendChild(reactionBox);
          reactionContainer.appendChild(dateTimeParagraph);
        })
      }
      addOnReceived(data)


    })

  })


})

function reaction(uniqueSectionID, e, f) {
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

  // send the socket reaction to the server. Add the Data ID and the reaction
  // add all reactions to an array and update the reactions prop with the new array that includes all reactions
  let reactionArray = []
  console.log(reactionContainer.childNodes)
  let allReactions = reactionContainer.childNodes
  allReactions.forEach(element => {
    if (element.className === "reaction") {
      // console.log(element.textContent)
      if (!allReactions.push) {
        allReactions = [allReactions]
      }
      reactionArray.push(element.textContent)
    }
  })

  const reactionData = {
    id: f.querySelector('#dataID').innerText,
    data: reactionArray
  }
  console.log('sending out new Reaction')
  socket.emit('newReaction', reactionData)
  socket.emit('updateReaction', reactionData)


  // reset the reaction input to ""
  f.childNodes[1].value = ""


}