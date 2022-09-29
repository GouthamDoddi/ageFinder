"use strict"

const submit = document.getElementById('submit');
const inputField = document.getElementsByClassName('name');


submit.onclick = async () => {
    const name = inputField[0].value;

    const res = await fetch(`https://api.agify.io?name=${name}`, 
    {method:'GET',   redirect: 'follow'})
                .then(response => response.json())
                .then(result => {
                    return result
                })
                .catch(error => console.log('error', error));

    const cardTitle = document.getElementsByClassName('card-title')[0]

    cardTitle.innerHTML = name.toUpperCase();

    document.getElementsByClassName('card-text')[0].innerHTML = `The age of ${name} is ${res['age']}.`

}


