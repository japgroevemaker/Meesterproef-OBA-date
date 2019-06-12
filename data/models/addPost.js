///

const postModel = require('./post.js')

console.log('addposts')

function addPost(username, profilePic){

    console.log('adding')

    const post = new postModel()


    post.username = username,
    post.profilePic = profilePic


    post.save(function(err){
        if(err){
            console.log(err)
        }
        else{
            console.log('added to db')
        }
    })
}

addPost('stan', 'foto')