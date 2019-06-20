import handlePost from './handlepost.js'

const render = {
  renderInputData: function(data) {

    // Call postRequest Submit Event Listener
    handlePost.listener(data)
    // console.log(data)
    const elements = document.querySelectorAll('.data')
    // console.log(elements)
    elements.forEach(element => {
      data.postArray.forEach(prop => {
        if (prop.name === element.attributes.name.value) {
          element.insertAdjacentHTML('beforeend', `${prop.data}`)
        }
      })
    })
  },
  renderThread: function(data) {
    console.log('New data Retrieved')

    console.log(typeof(data) != "Array")
    if (!data.push) {
      console.log(data)
      data = [data]
      console.log(data)
    }


    // for each doc
    data.forEach(doc => {
      console.log(data)

      const thread = document.querySelector('#thread')
      const element = document.createElement('section')
      element.setAttribute('id', 'message')

      const headerDiv = document.createElement('div')
      headerDiv.setAttribute('id', 'header')

      const title = document.createElement('h2');
      title.innerHTML = doc.postName;

      const date = document.createElement('h4');
      date.innerHTML = doc.date

      const postContent = document.createElement('p');
      postContent.innerHTML = doc.postContent

      const tags = document.createElement('div');
      tags.setAttribute('id', 'tags')

      const tag =  document.createElement('div');
      tag.setAttribute('class', 'tag')

      const tagName = document.createElement('h3');
      tagName.innerHTML = doc.tags

      const profilePicName = document.createElement('div')
      profilePicName.setAttribute('id', 'profilePic-name');

      const profilePic = document.createElement('img');
        if (doc.profilePic) {
          profilePic.src = doc.profilePic
        } else {
          profilePic.src = "/assets/placeholder.jpg"
        }


        console.log(element)
        element.appendChild(headerDiv);
          headerDiv.appendChild(title);
          headerDiv.appendChild(date);

        element.appendChild(postContent);

        element.appendChild(tags);
          tags.appendChild(tag);
          tag.appendChild(tagName);

        element.appendChild(profilePicName)
          profilePicName.appendChild(profilePic)

        thread.appendChild(element)

      // post htm;

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
