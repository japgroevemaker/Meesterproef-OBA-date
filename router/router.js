// this file contains all routes, it is used by index.js in the root directory!
const express = require('express')
const router = express.Router()

// index page
router.get('/',(req,res)=>{
    console.log('entered index')
    res.render('./pages/index')
})

// dashboard page
router.get('/dashboard', (req,res)=>{
    console.log('entered dashboard')
    res.render('./pages/dashboard')
})

// chat page
router.get('/chat', (req,res)=>{
    console.log('entered chat')
    res.render('./pages/chat')
})

// login page
router.get('/login', (req,res)=>{
    console.log('entered login')
    res.render('./pages/login')
})

// create new call page
router.get('/oproepPlaatsen', (req,res)=>{
    console.log('entered oproepPlaatsen')
    res.render('./pages/oproepPlaatsen')
})
// create register page
router.get('/register', (req,res)=>{
    console.log('entered register')
    res.render('./pages/register')
})

module.exports = router;
