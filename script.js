const form = document.getElementById('form')

form.addEventListener ('submit',(e)=> {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    console.log(name,email);

    let data={
        name,
        email,
    }
    console.log(data);
    let convertData = JSON.stringify(data);
    console.log(convertData);
    
    localStorage.setItem('lead',convertData);

})
