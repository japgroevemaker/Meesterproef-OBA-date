
  let reactionForm = document.querySelectorAll('.reaction-form');

  console.log(reactionForm);

  reactionForm.forEach(function(noDefault){
    noDefault.addEventListener('submit', function(e){
      e.preventDefault()
    })
  })

  let input = document.querySelectorAll('.reaction-input');
  let button = document.querySelectorAll('.button')

  button.forEach(function(getInputValue){

    getInputValue.addEventListener('click', function(){

      // let reactions = document.querySelectorAll('#reactions');

      input.forEach(function(iValue) {
        let reactions = document.querySelector('#reactions');

        let reaction = document.createElement('p');
        reaction.innerHTML = iValue.value

        reactions.appendChild(reaction)
        // reactions.forEach(function(newReaction){
        //   let reaction = document.createElement('p');
        //   reaction.innerHTML = iValue.value
        //   newReaction.appendChild(reaction)
        // })

        console.log(iValue.value);
        iValue.value = ""
      })
    })
  })
