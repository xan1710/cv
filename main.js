let nameInput = document.getElementById('box1-input')
let ageInput = document.getElementById('box2-input')
let clickButton = document.getElementById('button')
clickButton.addEventListener('click', ()=>{
    if(nameInput == '', ageInput == '')
        alert('Please fill out the form')
    else   
        alert(`Hello, ${nameInput.value}`)
})
