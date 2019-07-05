let dateText = document.querySelectorAll('.date-text')

dateText.forEach(function(sliceDateTime){
  let date = sliceDateTime.innerText.slice(0, 10)

  let time = sliceDateTime.innerText.slice(16, 21)
  console.log(time);

  sliceDateTime.innerText = `Op: ${time} ${date}`
})

let reactionDate = document.querySelectorAll('.date-time');

reactionDate.forEach(function(reactionSlice){
  let date = reactionSlice.innerText.slice(5, 10)
  console.log(date);
  let time = reactionSlice.innerText.slice(11, 16)
  console.log(time);

  reactionSlice.innerHTML = `${time}  ${date}`
})
