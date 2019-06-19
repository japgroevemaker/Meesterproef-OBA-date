let placeTime = document.querySelector('.time-text');
let placeDate = document.querySelector('.date-text')

let timeStamp = Date()
let time = timeStamp.slice(15, 21)

placeTime.innerHTML = time

let dateStamp = Date()
let date = dateStamp.slice(0, 10)

placeDate.innerHTML = date
