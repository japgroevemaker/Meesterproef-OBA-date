let socket = io()


const handlePost = {
    listener: function(data){
        
        if(window.location.pathname === '/msg'){
            const button = document.querySelector('#postButton')
            button.addEventListener('click', (e)=>{
                console.log('saving post')
                const data = {
                    postName: document.querySelector('#postName').innerText,
                    postContent: document.querySelector('#postContent').innerText,
                    username: document.querySelector('#username').innerText,
                    date: document.querySelector('#Date').innerText,
                    tags: document.querySelector('#tagField').innerText,
                    image: document.querySelector('#imagePreview').src               
                }
                console.log(data)

                socket.emit('savePost', data)
            })

        }
    }
}

handlePost.listener()

export default handlePost;