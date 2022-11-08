const form = document.getElementById('form');


form.addEventListener('submit', function(event){

    let errors = [];

    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if(email.value === '') {
        errors.push(' (*) El nombre de usuario no debe estar en blanco')};
    

    if(password.value == '') {
        errors.push(' (*) La contraseña no debe estar en blanco');
    email.classList.add('is-invalid')};


    if (errors.length > 0) {
        event.preventDefault();
        let ulErrors= document.querySelector('.errors');
        ulErrors.innerHTML='';
        errors.forEach(error=>{
            ulErrors.innerHTML += `<li class="alert-warning">${error} </li>`
            })
        }else{
        
        form.submit();
    }
    
});




