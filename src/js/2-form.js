let formData = {
  email: '',
  message: '',
};
const formRefs = {
  form: document.querySelector('.feedback-form'),
  userEmail: document.querySelector('input[type="email"]'),
  userMessage: document.querySelector('textarea'),
};

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  formData = JSON.parse(savedData);
  formRefs.userEmail.value = formData.email;
  formRefs.userMessage.value = formData.message;
}

function onInputType(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
formRefs.userEmail.addEventListener('input', onInputType);
formRefs.userMessage.addEventListener('input', onInputType);

function onFormSubmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log('FormData:', formData);
    localStorage.removeItem('feedback-form-state');
    formRefs.form.reset();
  }
}

formRefs.form.addEventListener('submit', onFormSubmit);
