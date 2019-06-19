import render from './render.js'

const socket = io()
const getInput = {
    locate: function () {
        console.log('catchinput fired')

        // set input fields
        const element = document.querySelectorAll('input, textarea')

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
        // if input element is empty show feedback
        if (element.value == '') {
            console.log('reminder!!! Add user feedBack for empty inputfields!!!')
        }
        // if not empty handle the input value
        if (element.value != '' && element.type != 'file') {
            
                const input = {
                    name: element.name,
                    data: element.value
                }
                console.log(input)
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