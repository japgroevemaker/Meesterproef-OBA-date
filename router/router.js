// this file contains all routes, it is used by index.js in the root directory!
const express = require('express')
const router = express.Router()

// index page
router.get('/',(req,res)=>{
    console.log('entered index')
    res.render('./pages/startup')
})

// dashboard page
router.get('/dashboard', (req,res)=>{
    console.log('entered dashboard')
    res.render('./pages/dashboard')
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
router.get('/break', (req,res)=>{
    console.log('entered break')
    res.render('./pages/break')
})
router.get('/discover', (req,res)=>{
    console.log('entered discover')
    res.render('./pages/discover')
})


router.get('/recognition', (req,res)=>{
    console.log('entered recognition')
    res.render('./pages/recognition')
})
router.get('/messageOverview', (req,res)=>{
    console.log('entered messageOverview')
    res.render('./pages/messageOverview')
})
// create new call page
router.get('/oproepPlaatsen', (req,res)=>{
    console.log('entered oproepPlaatsen')
    res.render('./pages/oproepPlaatsen')
})


router.post('/msg', (req, res) => {
    console.log("hier moet iets komen")
    console.log(req.body.postName)
    data = {
        postName: req.body.postName,
        postContent: req.body.postContent,
        username: req.body.username,
        date: new Date(),
        tags: req.body.tags,
        image: req.body.tags
    }
    console.log(data)
    /* TODO  :
    1. Lees alle variabelen uit.
    2. Stop deze in een obj
    3. Doe een fetch-get naar de server om te kijken of de naam al in gebruik is, zo ja, error, zo niet, naam is goed en kan meteen gefetched-post worden.
    Succes.
    */
    res.render("./pages/messageOverview", data)
})


function renderData(){
    const data = req.body
    console.log(data)
    res.render('/messageOverview', {
        myPizza: pizzaList
    })
}


module.exports = router;
