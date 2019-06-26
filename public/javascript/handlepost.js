let socket = io()


const handlePost = {
    listener: function(){
        if(window.location.pathname === '/msg'){
            const test = document.querySelector('#profile-pic-preview')
            console.log(test)
            const button = document.querySelector('#postButton')
            button.addEventListener('click', (e)=>{
                const tags = []
                
                const tagElements = document.querySelectorAll('#tagField p')
                tagElements.forEach((tag)=>{
                    // console.log(tag.innerText)
                    tags.push(tag.innerText)
                })
                console.log('saving post')
                const data = {
                    postName: document.querySelector('#postName').innerText,
                    postContent: document.querySelector('#postContent').innerText,
                    username: document.querySelector('#username').innerText,
                    date: document.querySelector('#Date').innerText,
                    tags: tags,
                    image: document.querySelector('#imagePreview').src,           
                    activity: document.querySelector('#activity').value
                }
                console.log(data)
                
                socket.emit('savePost', data)
            })
            
        }
    }
}

handlePost.listener()

