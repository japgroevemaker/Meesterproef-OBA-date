import render from './render.js'

const socket = io()
const getInput = {
    locate: function (currentPage) {
        console.log('catchinput fired')

        // set input fields
        let postContent = document.querySelector('textarea[name="postContent"]')
        let postName = document.querySelector('input[name="postName"]')
        let username = document.querySelector(' input[name="username"]')
        let pic = document.querySelector(' input[name="pic"]')

        let tags = document.querySelector('#tags')

console.log(postContent)
console.log(postName)
console.log(username)
console.log(pic)
console.log(tags)
        // check for emptiness (validation)
        
            getInput.handleInput(postContent)
            getInput.handleInput(postName)
            getInput.handleInput(tags)

            if(currentPage === 1){
                if(username.value === ""){
                    console.log('no username was given')
                    username.value = "anoniem"
                }

                const input = {
                    name: "username",
                    data: username.value
                }
                         // send to server
                         socket.emit('input', input)

            }
        


        // if(form.value != null || undefined || ''){
        //     console.log()
        // }


    },
    handleInput: function (element, currentPage) {
        console.log(element)
        
        // /////////////////////////////////////////////handle tags
        if (element.getAttribute('id') == 'tags') {
            console.log('found tags')
            element = [element]

            // check if the tags are in an array
            //   console.log(element[0].childNodes)
            // if they are handle it seperately from the other inputs
            let tagArray = []
            // console.log(element[0].innerText)
            element[0].childNodes.forEach(tag => {
                // the object holds a [0].innerText value of undefined by default so Error handling was added below
                if (tag.innerText == undefined || tag.innerText == null) {
                    console.log('tag.innerText == undefined || null . Tag Deleted')
                } else {

                    tagArray.push(tag.innerText)
                    console.log(tag.innerText)
                }
                // tagArray = 
                const input = {
                    name: "tags",
                    data: tagArray
                }
                // console.log(input)
                // send to server
                socket.emit('input', input)

            })
            // console.log(element.children[0].innerText)
        }

        //////////////////////////////////////////// if input element is empty show feedback


        // handle postContent
        if(element.name === "postContent"){
            if(element.value === ""){
                element.value = "onbekend"
            }
            const input = {
                name: "postContent",
                data: element.value
            }
            // send to server
            socket.emit('input', input)
        }
        // handle postName
        if(element.name === "postName"){
            if(element.value === ""){
                element.value = "onbekend"
            }
            const input = {
                name: "postName",
                data: element.value
            }
            // send to server
            socket.emit('input', input)
        }
 



    //     //////////////////////////////////////////////  handle DOM text input 
    //    else if (element.type != 'file') {
    //         if (element.value == undefined || element.name == undefined) {
    //             console.log('reminder!!! Add user feedBack for empty inputfields!!!')
    //             console.log(element)
                const input = {
                    name: element.name,
                    data: element.value
                }

                // send to server
                socket.emit('input', input)
                // console.log(input)
            // }
        // }


    },


    handleImage: function (base64Image) {
        console.log('handleimageFired')
        //console.log(base64Image)
        const input = {
            name: 'imageBase64Encoded',
            data: base64Image.toString()
            // data: base64Image
        }
        console.log(input)
        socket.emit('input', input)
    },

}

const renderInput = {
    getData: function () {
        // when at the messageOverview page, retrieve the input data
        if (window.location.pathname == '/messageOverview') {
            console.log('renderinput Fired')
            socket.emit('askData')
            socket.on('emitData', function (data) {
                render.renderInputData(data)

            })
        }

    }
}
export default {
    getInput,
    renderInput
};