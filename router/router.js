// this file contains all routes, it is used by index.js in the root directory!
const express = require('express')
const router = express.Router()

// index page
router.get('/',(req,res)=>{

    console.log('entered index')
    console.log('entered startup')

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


module.exports = router;
