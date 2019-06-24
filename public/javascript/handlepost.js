let socket = io()

const handlePost = {
    listener: function(data){

        if(window.location.pathname == '/messageOverview'){
            const button = document.querySelector('#postButton')
            button.addEventListener('click', ()=>{
                console.log('saving post')
                console.log(data.postArray[0])
                socket.emit('savePost', data )
            })

        }
    }
}

export default handlePost;