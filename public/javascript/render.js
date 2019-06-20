import handlePost from './handlepost.js'

const render = {
    renderInputData: function (data) {

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
    renderThread: function (data) {
        console.log('New data Retrieved')

        if (!data.push) {
            data = [data]
            console.log(`Adding new post to thread`)
            console.log(`${data[0].username}: ${data[0].postName}`)
        }

        // for each doc
        data.forEach(doc => {
            console.log(data)
            const thread = document.querySelector('#thread')
            const element = document.createElement('section')

            element.setAttribute('class', 'message')
            // post htm;
            element.innerHTML += ` 
       <div id="header">
           <h2>${doc.postName}</h2>
       </header>
       <p>${doc.postContent}</p>
       
        <div id="tags">
        <p>${doc.tags}</p>
        </div>
    
        <div id="profilePic-name">
        ${JSON.stringify(doc)}
        </div>
       `
            console.log(element)
            thread.appendChild(element)



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