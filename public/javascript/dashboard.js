// import render from './render.js'
import render from '../javascript/render.js'

const socket = io()
const init = {
    getThread: function (socket) {
        // checking for dashboard url and requesting thread data
        console.log('Thread: Listening')
        // listen for thread data message
        socket.on('threadGranted', function (data) {
            console.log('threadgranted')
            // console.log(data)
            render.newPost(data)


        })

    },
    stylePosts: function () {
        const posts = document.querySelectorAll('.message')
const opacity = '0.13'
        const colors = ['rgb(255,160,0)', 'rgb(160,0,120)', 'rgb(0,155,150)', 'rgba(255,160,0,0.10', 'rgba(160,0,120,0.10)', 'rgba(0,155,150,0.10']
        posts.forEach((post) => {
            const activity = post.getAttribute('name')
            console.log(activity)
            if (activity == "shareKnowledge") {

                // post.style.border = `2px solid ${colors[0]}`
                post.style.backgroundColor = colors[3]
            } else if (activity == "somethingTogether") {
                // post.style.border = `2px solid ${colors[1]}`
                post.style.backgroundColor = colors[4]
            } else if (activity == "helpMe") {
                // post.style.border = `2px solid ${colors[2]}`
                post.style.backgroundColor = colors[5]
            } else {
                console.error('No post styles were applied')
            }
        })

    },
    checkboxFilter: function () {
        const filterElement = document.querySelectorAll('#checkbox input')
        filterElement.forEach((checkbox) => {
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    console.log('checked')
                    let messages = thread.querySelectorAll('.message')
                    messages.forEach(function (post) {
                        if (post.getAttribute('name') != e.target.getAttribute('name')) {
                            post.classList.add('none')
                        }
                    })
                } else if (!e.target.checked) {
                    console.log('unchecked')
                    let messages = thread.querySelectorAll('.message')
                    messages.forEach(function (post) {
                        if (post.getAttribute('name') != e.target.getAttribute('name')) {
                            post.classList.remove('none')
                        }
                    })
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