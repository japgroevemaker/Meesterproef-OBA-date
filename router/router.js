// this file contains all routes, it is used by index.js in the root directory!
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const postModel = require('../data/models/post.js')




// index page
router.get('/',(req,res)=>{
    console.log('entered index')
    console.log('Retrieving Documents'.yellow)
    postModel.find({}, function(err, docs) {
        if (err || !docs) {
            console.log(err.red)
        } else {
            console.log('foundDocuments'.green)
            // logging individual docs

            console.log(docs)
            return docs
        }
        if(docs){return docs} else{console.log('no docs retrieved'.red)}

    }).then((result)=>{
        res.render('./pages/index.ejs', {data:result})

    })

})

// dashboard page
router.get('/dashboard', (req,res)=>{
    console.log('entered index')
    console.log('Retrieving Documents'.yellow)
    postModel.find({}, function(err, docs) {
        if (err || !docs) {
            console.log(err.red)
        } else {
            console.log('foundDocuments'.yellow)
            // logging individual docs

            //console.log(docs)
            return docs
        }
        if(docs){return docs} else{console.error('no docs retrieved')}

    }).then((result)=>{

        res.render('./pages/index.ejs', {data:result})

    })
})

router.get('/iHaveAGoal', (req,res)=>{
    console.log('entered iHaveAGoal')
    res.render('./pages/iHaveAGoal')
})

router.get('/shareKnowledge', (req,res)=>{
    console.log('entered shareKnowledge')
    res.render('./pages/shareKnowledge')
})

router.get('/helpMe', (req,res)=>{
    console.log('entered HelpMe')
    res.render('./pages/helpMe')
})
router.get('/somethingTogether', (req,res)=>{
    console.log('entered somethingTogether')
    res.render('./pages/somethingTogether')
})

router.get('/messageOverview', (req,res)=>{
    console.log('entered messageOverview')
    res.render('./pages/messageOverview')
})


router.post('/msg', (req, res) => {
    console.log(`Posting: ${req.body.postName}`)
const tagArray = req.body.tags.split(',')
console.log(req.body.picString)
if(!req.body.picString){
    req.body.picString = './assets/placeholder.jpg'
}
    data = {
postName: req.body.postName,
postContent: req.body.postContent,
username: req.body.username,
date: new Date(),
tags: tagArray,
image: req.body.picString,
activity: req.body.activity
    }
    console.log('-----------')
    console.log(data.date)
        /* TODO  :
    1. Lees alle variabelen uit.
    2. Stop deze in een obj
    3. Doe een fetch-get naar de server om te kijken of de naam al in gebruik is, zo ja, error, zo niet, naam is goed en kan meteen gefetched-post worden.
    Succes.
    */
    res.render("./pages/messageOverview", data)
})



module.exports = router;
