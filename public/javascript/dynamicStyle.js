import colors from './dashboard.js'


console.log(colors)

const element = document.querySelector("body")


if(window.location.pathname == '/helpme'){
    element.style.background = colors[5]
}
if(window.location.pathname == '/somethingTogether'){
    element.style.background = colors[4]
}
if(window.location.pathname == '/shareKnowledge'){
    element.style.background = colors[3]
}
