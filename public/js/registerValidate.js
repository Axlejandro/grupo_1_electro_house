

const form = document.getElementById('form');

const name = document.getElementById('name');
const user = document.getElementById('user');
const email = document.getElementById('email');
const address = document.getElementById('address');
// const country = document.getElementById('country');
const tel = document.getElementById('tel');
const pass = document.getElementById('pass');
const pass_confirm = document.getElementById('pass_confirm');
// const birth_date = document.getElementById('birth_date');
const image = document.getElementById('image');

const errors = [];


form.addEventListener('submit', function(e){
checkInputs();
if (errors.length > 0) {
    e.preventDefault();
}else{

        form.submit()
}

errors=[];

});


function checkInputs(){
//validación name

if(name.value === '') {
    setErrorFor(name, '(*) El nombre no debe estar en blanco');
    errors.push(' (*) El nombre no debe estar en blanco')
}else if(name.value.length < 5) {
    setErrorFor(name, '(*) Debe escribir su nombre completo');
    errors.push(' (*) Debe escribir su nombre completo')
} else {
    setSuccessFor(name);
}

//Validación user 

if(user.value === '') {
    setErrorFor(user, '(*) El usuario no debe estar en blanco');
    errors.push(' (*) El nombre no debe estar en blanco')
}else if(user.value.length < 8) {
    setErrorFor(user, '(*) Debe contener un mínimo de 8 carateres');
    errors.push(' (*) Debe contener un mínimo de 8 carateres')
}else {
    setSuccessFor(user);
}

// Validación email

if(email.value === '') {
    setErrorFor(email, '(*) Tienes que escribir un correo electrónico');
    errors.push(' (*) Tiene que escribir un correo electrónico')
// }else if(!isEmail(email.value)) {
//     setErrorFor(email, '(*) Debes escribir un formato de correo válido');
//     errors.push(' (*) Debe escribir un formato de correo válido')
}else{
    setSuccessFor(email);
}

// Validación address

if(address.value === '') {
    setErrorFor(address, '(*) Debe ingresar una dirección domiciliaria');
    errors.push(' (*) Debe ingresar una dirección domiciliaria')
}else{
    setSuccessFor(address);
} 

// //Validación pais

// if(country.value === '') {
//     setErrorFor(pais, '(*) Debe seleccionar el país de residencia');
//     errors.push(' (*) Debe seleccionar el país de residencia')
// }else{
//     setSuccessFor(country);
// } 

//Validación tel

if(tel.value === '') {
    setErrorFor(tel, '(*) Debe ingresar un número de teléfono');
    errors.push(' (*) Debe ingresar un número de teléfono')
}else{
    setSuccessFor(tel);
} 

//Validación pass
if(pass.value === '') {
    setErrorFor(pass, '(*) Debe asignar una contraseña');
    errors.push(' (*) Debe asignar una contraseña')
}else if(pass.value.length < 8) {
    setErrorFor(pass, '(*) La contraseña debe tener mínimo 8 caracteres');
    errors.push('(*) La contraseña debe tener mínimo 8 caracteres')
}
// else if(!isPassword(pass.value)){
//     setErrorFor(password, '(*) Deberá tener mínimo 8 caracteres, una letras mayúsculas, una letra minúsculas, un número y un carácter especial');
//         errors.push('(*) Deberá tener mínimo 8 caracteres, una letras mayúsculas, una letra minúsculas, un número y un carácter especial');
//     } else {
        else{setSuccessFor(pass);
    }



//Validación pass_confirm
if(pass_confirm.value === '') {
    setErrorFor(pass_confirm, '(*) Debe confirmar la contraseña');
    errors.push('(*) Debe confirmar la contraseña')

}else if(pass.value !== pass_confirm.value) {
    setErrorFor(pass_confirm, '(*) Las contraseñas no coinciden');
        errors.push('(*) Las contraseñas no coinciden');
    } else{
        setSuccessFor(pass_confirm);
    }


// //Validación birth_date

// if(birth_date.value === '') {
//     errors.push(' (*) Debe elegir su fecha de nacimiento')};



// Validacion para Imagen
// let fileExtension = '.' + image.value.split('.').pop();
// let acceptedExtensions = ['.jpg', '.jpeg', '.png','.gif', '.bmp', '.tiff', '.psd'];

if(image.value === '') {
    setErrorFor(image, '(*) Debe cargar una imagen');
    errors.push('(*) Debe cargar una imagen')}
// else if(fileExtension != '.'){
//    if(!acceptedExtensions.includes(fileExtension)) {
//         setErrorFor(imagen, `(*) Las extensiones de archivos permitidas son (${acceptedExtensions.join(', ')})`);
//        errors.push(`(*) Las extensiones de archivos permitidas son (${acceptedExtensions.join(', ')})`);
//    } else {
//        setSuccessFor(image);
//    }
else {
   setSuccessFor(image);
}

}


function setErrorFor(input, message) {
const formControl = input.parentElement;
const small = formControl.querySelector('small');
small.classList = 'register-error';
small.innerText = message;
}

function setSuccessFor(input) {
const formControl = input.parentElement;
const small = formControl.querySelector('small');
small.innerHTML = '';
}

// function isEmail(email) {
// return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }

// function isPassword(pass) {
// return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pass);
// }    



