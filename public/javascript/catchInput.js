import render from './render.js'

const socket = io()
const getInput = {
    postRequest: function(){
        const postButton = document.querySelector('postButton')
        if(postButton){
            postButton.addEventListener('click', ()=>{
                socket.emit('postRequest')
            })
        }
    },
    locate: function(){
        console.log('catchinput fired')

        // set input fields
        const element = document.querySelectorAll('input, textarea')
        // check for emptiness (validation)
        element.forEach(element=>{
            if(element.value == ''){
                console.log('reminder!!! Add user feedBack for empty inputfields!!!')
            }
            if(element.value != ''){
                const input = {
                    name: element.name,
                    data: element.value
                }
                console.log(input)
                socket.emit('input', input)
            }

        })
        console.log(element)


    // if(form.value != null || undefined || ''){
    //     console.log()
    // }


    },
}

const renderInput = {
    getData: function(){
        // when at the messageOverview page, retrieve the input data
        if(window.location.pathname == '/messageOverview'){
            socket.emit('askData')
            socket.on('emitData', function(data){
                render.renderInputData(data)
                
            })
        }

    }
}

renderInput.getData()

export default {getInput, renderInput};