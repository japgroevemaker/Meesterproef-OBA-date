const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    console.log('indexPage')
    res.render('./pages/index')
})

router.get('/about', (req,res)=>{
    console.log('ABOUT PAGE')
    res.render('./pages/about')
})

module.exports = router;
