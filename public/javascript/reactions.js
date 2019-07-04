let socket = io()
import reactionCounter from './reaction-counter.js'
// use reaction counter in function renderReaction!!!!!!

// listen for messages from the server that a new reaction has been placed and call DOM renderer

  socket.on('updateReaction', function (data) {
    console.log('Handling new Reaction')
    console.log(data)
    react.renderReaction(data, data[0].postName.replace(/ /g, '_'))
  })


const react = {
  // listen for this client's reactions, call DOM renderer and emit the message to the server
  myReaction: function () {
    let form = document.querySelectorAll(`.reaction-form`)
    // listen for new reactions by this Client
    console.log(form[0])
    form.forEach(f => {
      // console.log(f)
      let uniqueSectionID = f.parentElement.parentElement.id
      // listen for submit
      f.addEventListener('submit', e => {
        const currentValueInput = f.querySelector('input[name=reaction').value
        e.preventDefault()
        if(currentValueInput != "" || undefined || null){

          console.log(f.querySelector('input[name=reaction').value)
        let reactionContainer = document.querySelector(`#${uniqueSectionID} #reactions`)
      if(!reactionContainer){
        console.error(`Reaction Container is: ${reactionContainer} \n It probably not be located by uniqueSectionID \n UniqueSectionID:${UniqueSectionID}`)
      }

        // add all reactions to an array and update the reactions prop with the new array that includes all reactions

        // define reaction Object
        let reaction = currentValueInput
        console.log(reaction)
        const reactionData = {
          id: f.querySelector('#dataID').textContent,
          data: currentValueInput,
          date: new Date()
        }
        // render this reaction
        // boolean to see if its from this client
        const fromSelf = true;
        react.renderReaction(reactionData, uniqueSectionID, fromSelf)

        // send to server

        console.log('sending out new Reaction')
        socket.emit('newReaction', reactionData)
        // reset the reaction input to ""
        f.childNodes[1].value = ""

      }
      else{
console.error(currentValueInput)
      }
      })
    })
  },


  renderReaction: function (data, uniqueSectionID, fromSelf) {


    
    let reactionString = ""
    let reactionContainer = document.querySelector(`#${uniqueSectionID} #reactions`)
    console.log(document.querySelector(`${uniqueSectionID}`))
    
    if (fromSelf) {
      // create Time Element
      let time = new Date().toString()
      let timeStamp = time.slice(16, 21)
      let date = new Date().toString()
      let dateStamp = date.slice(4, 10)
      reactionString = [reactionContainer.querySelector('.reaction-input').value]
      
      console.log('new reaction from this client')
        reactionString.forEach((reaction) => {

          reactionContainer.innerHTML += `
        <img src="./assets/placeholder.jpg">
        <div class="reaction">
        <p>${reaction}</p>
        </div>
        <p class="date-time">${dateStamp}${timeStamp}</p>
        `
        })
    } else {
      const dateStamp = data[0].date.slice(16,21)
      const timeStamp = data[0].date.slice(4,10)
      
      console.log('new reaction from other client')

      reactionString = data[0].reactions
      reactionString.forEach((reaction) => {

        reactionContainer.innerHTML += `
      <img src="./assets/placeholder.jpg">
      <div class="reaction">
      <p>${reaction.data}</p>
      </div>
      <p class="date-time">${timeStamp}${dateStamp}

      `
      })
    }

    if (fromSelf) {
      console.log('reactivating Listener for this client"s reactions')
      react.myReaction()
    } else{

    }
console.log(reactionCounter)
    reactionCounter()

    // send the socket reaction to the server. Add the Data ID and the reaction
  }





  //           let reactionBox = document.createElement('div');
  //           reactionBox.setAttribute('class', 'reaction');
  //           let dateTimeParagraph = document.createElement('p');
  //           dateTimeParagraph.setAttribute('class', 'date-time')
  //           dateTimeParagraph.innerHTML = `${dateStamp} ${timeStamp}`
  //           let reaction = document.createElement('p');
  //           reaction.innerText = e.target.querySelector('.reaction-input').value;
  //           reaction.innerHTML = reaction
  //           reactionContainer.appendChild(reactionImg)
  //           reactionBox.appendChild(reaction)
  //           reactionContainer.appendChild(reactionBox);
  //           reactionContainer.appendChild(dateTimeParagraph);
  //         }
  //         })

  //               function reaction() {
  //                 let reactionContainer = document.querySelector(`#${uniqueSectionID} #reactions`)

  //           let time = Date()
  //           let timeStamp = time.slice(16, 21)
  //           console.log(timeStamp);

  //           let date = Date()
  //           let dateStamp = date.slice(4, 10)
  //           console.log(dateStamp);

  //           let reactionImg = document.createElement('img');
  //           reactionImg.setAttribute('src', '/assets/placeholder.jpg')
  //           let reactionBox = document.createElement('div');
  //           reactionBox.setAttribute('class', 'reaction');
  //           let dateTimeParagraph = document.createElement('p');
  //           dateTimeParagraph.setAttribute('class', 'date-time')
  //           dateTimeParagraph.innerHTML = `${dateStamp} ${timeStamp}`
  //           let reaction = document.createElement('p');
  //           console.log(e.target);
  //           reaction.innerHTML = f.childNodes[1].value

  //           reactionContainer.appendChild(reactionImg)
  //           reactionBox.appendChild(reaction)
  //           reactionContainer.appendChild(reactionBox);
  //           reactionContainer.appendChild(dateTimeParagraph);

  //       })
}

react.myReaction()

export default react
