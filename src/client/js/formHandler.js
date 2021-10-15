import { checkForName } from './nameChecker'
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if(checkForName(formText)) {
        document.getElementById('results').innerHTML = `Loading ...`
        console.log("::: Form Submitted :::")
        fetch('http://localhost:3000/NLP' , {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "url": formText
            }),
        } )
        .then(res => res.json())
        .then(data => document.getElementById('results').innerHTML = 
        `<div class="results">
            <p>Agreement: ${data.agreement }</p>
            <p>Subjectivity: ${data.subjectivity }</p>
            <p>Irony: ${data.irony }</p>
        </div>` )
    }
    else {
        alert('please enter a valid ftp or https url to an article')
    }
}

export { handleSubmit }
