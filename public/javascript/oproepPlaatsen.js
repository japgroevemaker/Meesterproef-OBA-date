// hierin bevindt zich alle logica voor de oproepPlaatsen.ejs pagina
import events from './events.js'
import socketEmit from './socketClient.js'

const init = {
    submit: function () {
        // listen for click on "volgende" button
        const element = document.querySelector('#volgende')
        element.addEventListener('click', (event) => {
            event.preventDefault();
            // find the checked radio button, this activity is selected by the user
            const checked = document.querySelector('input[type=radio]:checked').value
            console.log(checked)

            // listen for other input fields
            const tags = document.querySelectorAll('.tag')
            let tagArray = []
            tags.forEach(tag=>{
                tagArray.push(tag.innerText)
            })
            const naam = document.querySelector('#oproepNaam input').value
            const locatie = document.querySelector('#oproepLocatie select').value

            // add info to array
            // console.log(tagArray)
            // console.log(naam)
            // console.log(locatie)

            let oproepData = {}
            oproepData.activiteit = checked;
            oproepData.tags = tagArray
            oproepData.naam = naam;
            oproepData.locatie = locatie;

            console.log(oproepData)
            //socketEmit(info)
            socketEmit.nieuweOproep(oproepData)


            // hide the old element

            // show the new element
        })


    },
    // listen on button
    addTag: function () {
        const addTag = document.querySelector('#addTag')
        addTag.addEventListener('click', (event) => {
            event.preventDefault();

            // get all tags, to verify there is no duplicate
            const allTags = Array.from(document.querySelectorAll('.tag'))
            console.log(allTags)
            // get new tag input from user
            let input = document.querySelector("#oproepTags > input[type=text]").value;
            
            // for each tag, if it's not the same as input and not empty
                const element = document.querySelector('#oproepTags')
                const newTag = document.createElement('p')
                newTag.classList.add('tag')
                newTag.innerHTML = `${input} <button class="deleteTag">X</button`
                element.appendChild(newTag)
                input = '';

                // create a delete Button
                const deleteTag = document.querySelector(".deleteTag")
                deleteTag.addEventListener('click', (event)=>{
                    event.preventDefault()
                console.log(allTags)
                })
                
                
        
        })
    }
}

init.submit()
init.addTag();




// listen for new click on new button 