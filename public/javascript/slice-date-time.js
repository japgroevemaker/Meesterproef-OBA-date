let reactionText = document.querySelectorAll('.reaction')

reactionText.forEach(function(sliceDateTime){
  let uniqueSectionID = sliceDateTime.parentElement.parentElement.id
  let getReactionText = document.querySelectorAll(`#${uniqueSectionID} .reaction p`);
  console.log(getReactionText);
  getReactionText.forEach(function(checkLength){
    console.log(checkLength.firstChild.length);
    // let makeString = checkLength.toString()
    // console.log(makeString);
  })
})
