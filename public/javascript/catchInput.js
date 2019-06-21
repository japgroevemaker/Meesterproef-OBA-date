import render from './render.js'

const socket = io()
const getInput = {
    locate: function () {
        console.log('catchinput fired')

        // set input fields
        const element = document.querySelectorAll('input, textarea, #tags')

        // check for emptiness (validation)
        element.forEach(element => {
            getInput.handleInput(element)
        })
        console.log(element)


        // if(form.value != null || undefined || ''){
        //     console.log()
        // }


    },
    handleInput: function (element) {

        if(element.getAttribute('id') == 'tags'){
            console.log('found tags')
            element = [element]
            console.log(element)
            // check if the tags are in an array
            //   console.log(element[0].childNodes)
            // if they are handle it seperately from the other inputs
            let tagArray = []
            // console.log(element[0].innerText)
            element[0].childNodes.forEach(tag =>{
                // the object holds a [0].innerText value of undefined by default so Error handling was added below
            if(tag.innerText == undefined || tag.innerText == null){
                console.log('tag.innerText == undefined || null . Tag Deleted')
            } else{

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
        // if input element is empty show feedback
        if (element.value == '') {
            console.log('reminder!!! Add user feedBack for empty inputfields!!!')
        }
        // if not empty handle the input value
        if (element.value != '' && element.type != 'file') {
            if(element.value == undefined || element.name == undefined){
                console.log('reminder!!! Add user feedBack for empty inputfields!!!')
                
            }
                const input = {
                    name: element.name,
                    data: element.value
                }
                // console.log(input)
                // send to server
                socket.emit('input', input)
            }
        

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
            socket.emit('askData')
            socket.on('emitData', function (data) {
                render.renderInputData(data)

            })
        }

    }
}

renderInput.getData()

export default {
    getInput,
    renderInput
};