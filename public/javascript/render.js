import handlePost from './handlepost.js'
import handleReactions from './reactions.js'

// id reaction gets a class reaction
const render = {
  renderInputData: function (data) {
if(data === {}){console.error('Data is empty')}
    // Call postRequest Submit Event Listener
    handlePost.listener(data)
    // console.log(data)
    const elements = document.querySelectorAll('.data')
    // console.log(elements)
    // console.log(elements)

    // check each element
    elements.forEach(element => {
      // check each
      data.postArray.forEach(prop => {
        // check if the prop name and the element name are the same
        // also check if the data is not an array of tags
        // if the the data are the tags, check if it is an array
        if (prop.name === "tags") {
          console.log('prop is tags')
          if (prop.data.push) {
            // data is an array --> render it
            prop.data.forEach(tag => {
              element.insertAdjacentHTML('beforeend', `<h3 name="tag">${tag}</h3>`)
            })
          } else {
            // data is not an array --> render it
            element.insertAdjacentHTML('beforeend', `${tag}`)
          }
        } else {
          if (prop.name === element.attributes.name) {
            console.log('prop is not tags')
            element.insertAdjacentHTML('beforeend', `${prop.data}`)
          }
        }
      })
    })
  },
  newPost: function (data) {
    console.log('New data Retrieved: creating post HTML'.yellow)
    console.log(typeof (data) != "Array")
    if (!data.push) {
      // console.log(data)
      data = [data]
      // console.log(data)
    }

    const allMessages = document.querySelectorAll('.messages')
    console.log(allMessages)
    // if(data._id != )
console.log(data)
    // for each doc
    data.forEach(post => {
      // console.log(data)
console.log(post._id)
const postElement = document.createElement('section')
postElement.innerHTML =  `

  <section name=${post.activity} class="message" id=${post.postName.replace(/ /g, '_')}>

  <div id="header">
  <h2>${post.postName}</h2>
  <h4>${post.date}</h4>
  </div>
  <p>${post.postContent}</p>
  </div>
  <div id="profilePic-name">
  
  <img src="${post.profilePic}" alt="Profile image">
  <p id="username">${post.username}</p>
  </div>
  
  <div id="reactions">
  <form class="reaction-form">
  <img src="">
  <input placeholder="schrijf een opmerking..." type="text" class="reaction-input">
  <input type="submit" value="plaats" class="button">
  <p class="none" id="dataID"> ${post._id} </p>
  </form>
  
</div>
</section>

}) 
`
const newPostArea = document.querySelector('#thread')
newPostArea.append(postElement) 





      
      
      // // create script after page loads
      // const head = document.querySelector('head');
      // const script = document.createElement('script');
      // script.setAttribute('type', 'module');
      // script.src = "../javascript/reactions.js"
      
      // head.appendChild(script)
      
      // const thread = document.querySelector('#thread')
      // const element = document.createElement('section')
      // element.setAttribute('class', 'message')
      // element.setAttribute('id', doc.postName.replace(/ /g, "_"))
      
      // const headerDiv = document.createElement('div')
      // headerDiv.setAttribute('id', 'header')
      
      // const title = document.createElement('h2');
      // title.innerHTML = doc.postName;
      
      
      // const date = document.createElement('h4');
      // date.innerHTML = doc.date

      // const postContent = document.createElement('p');
      // postContent.innerHTML = doc.postContent
      
      // let tags = document.createElement('div');
      // tags.setAttribute('id', 'tags')
      
      // let newTag = doc.tags
      
      // newTag.forEach(function(completeTag){
        
      //   const tag = document.createElement('div');
      //   tag.setAttribute('class', 'tag')
      //   tag.setAttribute('data-bind', completeTag)
        
      //   const tagName = document.createElement('h3');
      //   tagName.innerHTML = completeTag

      //   tags.appendChild(tag);
      //   tag.appendChild(tagName);
      // })
      
      
      // const profilePicName = document.createElement('div')
      // profilePicName.setAttribute('id', 'profilePic-name');
      
      // const profilePic = document.createElement('img');
      // profilePic.src = doc.profilePic
      
      // if (!doc.profilePic) {
      //   profilePic.src = "/assets/placeholder.jpg"
      // }

      // const reactions = document.createElement('div');
      // reactions.setAttribute('id', 'reactions')
      
      // const reactionForm = document.createElement('form');
      // reactionForm.setAttribute('class', 'reaction-form')
      
      // const reactionInput = document.createElement('input');
      // reactionInput.setAttribute('placeholder', 'schrijf een opmerking...')
      // reactionInput.setAttribute('type', 'text')
      // reactionInput.setAttribute('class', 'reaction-input')
      
      // const reactionProfilePic = document.createElement('img');
      // reactionProfilePic.src = doc.profilePic
      
      // // PROFILE NAME - create, add attribute + content 
      // const profileName = document.createElement('p')
      // profileName.setAttribute('id', 'username')
      // profileName.innerText = doc.username
      
      // const placeReaction = document.createElement('input');
      // placeReaction.setAttribute('type', 'submit');
      // placeReaction.setAttribute('value', 'plaats')
      // placeReaction.setAttribute('class', 'button')
      
      // // placeReaction.setAttribute('disabled', 'disabled')
      
      
      // // add an element that holds the db id of the data
      // // (invisible)
      // const dataID = document.createElement('p')
      // dataID.setAttribute('class', 'none')
      // dataID.setAttribute('id', 'dataID')
      // dataID.innerText = doc._id
      
      // const activity = document.createElement('p')
      // activity.setAttribute('name', doc.activity)
      // activity.setAttribute('class', 'none')
    
      // if (!doc.profilePic) {
      //   profilePic.src = "/assets/placeholder.jpg"
      // }
      
      // element.appendChild(headerDiv);
      // headerDiv.appendChild(title);
      // headerDiv.appendChild(date);
      
      // element.appendChild(postContent);
      
      // element.appendChild(tags);
      // // tags.appendChild(tag);
      // // tag.appendChild(tagName);
      
      // element.appendChild(profilePicName)
      // profilePicName.appendChild(profilePic)
      // profilePicName.appendChild(profileName)
      
      // element.appendChild(reactions)
      // reactions.appendChild(reactionForm);
      // reactionForm.appendChild(reactionProfilePic)
      //     reactionForm.appendChild(reactionInput)
      //     reactionForm.appendChild(placeReaction);
      //     reactionForm.append(dataID)
      //     reactionForm.append(activity)
          
      //     thread.appendChild(element)
          
      //     console.log(element)
      //     // post htm;
          
          //              element.innerHTML += `
          // <div id="header">
          //     <h2>${doc.postName}</h2>
      //     <h4>${doc.date}</h4>
      // </header>
      // <p>${doc.postContent}</p>
      //
      //  <div id="tags">
      //    <div class="tag">
      //      <h3>${doc.tags}</h3>
      //    </div>
      //  </div>
      //
      //  <div id="profilePic-name">
      //    ${
      //      (setImgSrc => {
      //        if (doc.profilePic) {
      //          return element `<img src="${doc.profilePic}"/>`
      //        } else {
      //          return element `<img src="/assets/placeholder.jpg"/>`
      //        }
      //      })
      //    }
      //
      //  ${JSON.stringify(doc)}
      //  </div>
      // `
      // console.log(element)
      // thread.appendChild(element)



      // need 2 remake the image from encoding
    })

  }






  // // get all data elements from DOM
  // const elements = document.querySelectorAll('.data')
  // console.log(data)
  // // for each element
  // elements.forEach(element => {
  //     element.innerHTML = "";
  //     console.log(element.parentElement)
  //     // check in data in each doc
  //     data.forEach((doc) => {
  //         const key = element.attributes.name.value
  //         // if is has a key that matches the name prop of an element
  //         if (key in doc) {
  //             // case: it has -> render it to DOM
  //             // if there is allready content we need to make a new post element right now all titles end up in one box

  //            if(element.innerHTML !== ""){

  //            }
  //             element.insertAdjacentHTML('beforeend', `${doc[key]}`)
  //         }
  //     })
  // })

  
}

export default render;
