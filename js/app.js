"use strict";

const form = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const formGroups = document.querySelectorAll('.formGroup');
const username = form.name;
const email = form.email;
const msg = form.msg;


let validName = false;
let validEmail = false;
let validMsg = false;

const showSuccess = el => {
  el.parentElement.classList.remove('form-error');
  el.parentElement.classList.add('form-success');
}

const showError = el => {
  el.parentElement.classList.remove('form-success');
  el.parentElement.classList.add('form-error');
}


const validateName = (value, field) => {
    if (value.length >= 3) {
      showSuccess(field);
      validName = true;
    
  } else {
    showError(field);
    validName = false;
  }
}

const validateMsg = (value, field) => {
    if (value.length >= 50) {
      showSuccess(field);
      validMsg = true;
  } else {
    showError(field);
    validMsg = false;
   
  }
}

const validateEmail = (value, field) => {
  if (value.includes("@")) {
    showSuccess(field);
    validEmail = true;
  }
  else {
    showError(field);
    validEmail = false;
  }
}

const validate = field => {
  const value = field.value.trim();

  if (field.name == 'name')
    validateName(value, field);
  else if (field.name == 'email')
     validateEmail(value, field);
  else
    validateMsg(value, field);


    // switch (field.id) {
    //   case 'name':
    //     validateName(value, field);
    //     break;
    //   case 'email':
    //     validateEmail(value, field);
    //     break;
    //   case 'msg':
    //     validateMsg(value, field);
    //     break;
    // }
} 

form.addEventListener('input', e => {

  validate(e.target);

  if (validName && validEmail && validMsg )
    submitBtn.removeAttribute('disabled')
  
})

form.addEventListener('submit', e => {
  e.preventDefault();
  formGroups.forEach(el => el.classList.remove('form-success'));
  submitBtn.setAttribute('disabled', true);
  form.reset();

})




