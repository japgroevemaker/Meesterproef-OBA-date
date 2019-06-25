const postModel = require('../data/models/post')

const io = require('../index.js')
console.log(io)
function savePost(data) {
    return new Promise(function(resolve, reject){
        
        console.log(data)
        
        const newPost = new postModel({
            // tags
            tags: data.tags,
        // title of the post
        postName: data.postName,
        // description
        postContent: data.postContent,
        // user profile pic = base64Encoded
        profilePic: data.image,
        // creator's username
        username: data.username,
        // reactions of other users:
        reactions: "",
        // favorite by user:
        favorites: "",
        // tijd
        date: data.date,
        // activity
        activity: data.activity,
    })
    try {
        newPost.save().then((newpost) => {
            console.log('succesfully Saved Post'.green)
        })
        
    } catch (error) {
        console.log(error)
    }
    resolve()
})
}

module.exports = savePost