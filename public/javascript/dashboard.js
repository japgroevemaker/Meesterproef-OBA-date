// import render from './render.js'
import render from '../javascript/render.js'

const socket = io()
const init = {
    getThread: function (socket) {
        // checking for dashboard url and requesting thread data
        console.log('Thread: Listening')
        // listen for thread data message
        socket.on('threadGranted', function(data){
            console.log('threadgranted')
            console.log(data)
            render.newPost(data)
            
               
           })
           
        },
        stylePosts: function(){
const posts = document.querySelectorAll('.message')
const colors = ['rgb(0,100,200)', 'rgb(160,0,120)', 'rgb(0,155,150)']
posts.forEach((post)=>{
    const activity = post.getAttribute('name')
    console.log(activity)
    if(activity == "shareKnowledge"){
        post.style.border = `2px solid ${colors[0]}`
    }
   else if(activity == "somethingTogether"){
        post.style.border = `2px solid ${colors[1]}`
    }
    else if(activity == "helpMe"){
        post.style.border = `2px solid ${colors[2]}`
    } else{
        console.error('No post styles were applied')
    }
})

        },
        checkboxFilter: function(){
            const filterElement = document.querySelectorAll('#checkbox input')
            filterElement.forEach((checkbox)=>{
                checkbox.addEventListener('change', (e)=>{
                    if(e.target.checked){
                        console.log('checked')

                    } else if(!e.target.checked){
                        console.log('unchecked')
                    }
                })
                console.log(filterElement)
            })
        
        }
    }
    
    if (window.location.pathname == '/dashboard' || '/') {
        init.getThread(socket)
        init.checkboxFilter()
        init.stylePosts()
    }

