

const form = document.getElementById('form');

const name = document.getElementById('name');
const description = document.getElementById('description');
const image = document.getElementById('image');
const price = document.getElementById('price');

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
    setErrorFor(name, '(*) El nombre del producto no debe estar en blanco');
    errors.push(' (*) El nombre del producto no debe estar en blanco')
} else {
    setSuccessFor(name);
}

//Validación description 

if(description.value === '') {
    setErrorFor(description, '(*) La descripción del producto no debe estar en blanco');
    errors.push(' (*) La descripción del producto no debe estar en blanco')
}else {
    setSuccessFor(description);
}



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


//Validación precio 

if(price.value === '') {
    setErrorFor(price, '(*) Debe ingresar el precio del producto');
    errors.push('(*) Debe ingresar el precio del producto')
}else {
    setSuccessFor(price);
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

 



