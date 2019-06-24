import render from './render.js'

const socket = io()
const getInput = {
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
                console.log(data)
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