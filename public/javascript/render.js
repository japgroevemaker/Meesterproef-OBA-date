import handlePost from './handlepost.js'

const render = {
    renderInputData: function(data){

        // Call postRequest Submit Event Listener
        handlePost.listener(data)
        // console.log(data)
const elements = document.querySelectorAll('.data')
// console.log(elements)
elements.forEach(element=>{
    data.postArray.forEach(prop=>{
        // console.log(prop.name)
        // console.log(prop)
        // console.log(element.attributes.name.value)
        // console.log(prop)
        // console.log(prop.name + ' ' + element.attributes.name.value)
            if(prop.name === element.attributes.name.value){
        
                element.insertAdjacentHTML('beforeend', `<p>${prop.data}</p>`)
            }
        })

})

    }
}

export default render;