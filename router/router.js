// this file contains all routes, it is used by index.js in the root directory!
const express = require('express')
const router = express.Router()

// index page
router.get('/',(req,res)=>{
    console.log('entered startup')
    res.render('./pages/startup')
})

// dashboard page
router.get('/dashboard', (req,res)=>{
    console.log('entered dashboard')
    res.render('./pages/dashboard')
})

// create new call page
router.get('/oproepPlaatsen', (req,res)=>{
    console.log('entered oproepPlaatsen')
    res.render('./pages/oproepPlaatsen')
})


module.exports = router;
