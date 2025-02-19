const inputBar = document.querySelector('.email-field')
const email = document.querySelector('.email-input')
const subscribe = document.querySelector('#subscribe-button');

email.addEventListener('input', function() {
  resetInputValidation();
  if(email.value.trim() !== ''){
    inputBar.classList.add('filled');
  } else{
    inputBar.classList.remove('filled');
  }
})

email.addEventListener('click', function(){
  resetInputValidation();
  clearEmailInput();
});

email.addEventListener('keydown', function(e) {
  if (e.key === 'Enter'){
    verifyEmail(email, inputBar);
  }
})

subscribe.addEventListener('click', function() {
  verifyEmail(email, inputBar);
});

function verifyEmail(email, inputBar){
  const emailValue = email.value.trim();

  if (emailValue.includes('@') && emailValue.includes('.com')){
    clearEmailInput();
    inputBar.classList.add('valid');
    email.setAttribute('placeholder', 'Registered! Welcome to Shop.Co!');
  } 
  else{
    clearEmailInput();
    inputBar.classList.add('invalid');
    email.setAttribute('placeholder', 'This email is not valid!');
  }
}

function clearEmailInput(){
  email.value = '';
  inputBar.classList.remove('filled');
}

function resetInputValidation(){
  email.setAttribute('placeholder', 'Enter your email address');
  inputBar.classList.remove('valid', 'invalid');
}