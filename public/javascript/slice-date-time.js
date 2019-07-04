let dateText = document.querySelectorAll('.date-text')

dateText.forEach(function(sliceDateTime){
  let date = sliceDateTime.innerText.slice(0, 10)

  let time = sliceDateTime.innerText.slice(16, 21)
  console.log(time);

  sliceDateTime.innerText = `Op: ${time} ${date}`
})
