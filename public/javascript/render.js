const render = {
    renderInputData: function(data){
        console.log(data)
const elements = document.querySelectorAll('.data')
console.log(elements)
elements.forEach(element=>{
    data.postArray.forEach(prop=>{
        // console.log(prop.name)
        // console.log(element.attributes.name.value)
        // console.log(prop)
            if(prop.name === element.attributes.name.value){
        
                element.insertAdjacentHTML('beforeend', `<p>${prop.data}</p>`)
            }
        })

})

    }
}

export default render;