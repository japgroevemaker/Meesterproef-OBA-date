
  let reactions = document.querySelectorAll('.reaction')

  reactions.forEach(function(react){
    let uniqueSectionID = react.parentElement.parentElement.id
    let countReactions = document.querySelectorAll(`#${uniqueSectionID} .reaction`);
    let toggleReactions = document.querySelector(`#${uniqueSectionID} .toggle-reactions p`);

    // if (countReactions.length === 1) {
    //   toggleReactions.innerHTML = `Plaats een reactie. Er is ${countReactions.length} andere reactie`
    // } else {
    //   toggleReactions.innerHTML = `Plaats een reactie. Er zijn ${countReactions.length} andere reacties`
    // }

    toggleReactions.innerHTML = countReactions.length
  })

  let message = document.querySelectorAll('.message');

  message.forEach(function(expand) {
    let uniqueID = expand.id
    let activityName = expand.getAttribute('name')
    console.log(activityName);

    let reactionBox = document.querySelector(`#${uniqueID} #reactions`);
    let toggleReactions = document.querySelector(`#${uniqueID} .toggle-reactions`);

    if (activityName === 'somethingTogether') {
      toggleReactions.style = 'background-color: rgba(160,0,120,0.5);'
    } else if (activityName === 'shareKnowledge') {
      toggleReactions.style = 'background-color: rgba(255,160,0,0.5);'
    } else if (activityName === 'help') {
      toggleReactions.style = 'background-color: rgba(0,155,150,0.3)'
    }

    toggleReactions.addEventListener('click', function(){
      reactionBox.classList.toggle('show-reaction');
    })
  })
