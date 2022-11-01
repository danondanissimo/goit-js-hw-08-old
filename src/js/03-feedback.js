import throttle from 'lodash.throttle';


const feedbackForm = document.querySelector('.feedback-form')

feedbackForm.addEventListener('input', throttle(input, 300));
feedbackForm.addEventListener('submit', submit);
let formData = JSON.parse(localStorage.getItem("feedback-form-state")) || {}
localData()
function input(event) {
  
  formData.email = event.currentTarget.elements.email.value
  formData.message = event.currentTarget.elements.message.value
  localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

function submit(event) {
    event.preventDefault();
    event.currentTarget.reset();
  localStorage.removeItem("feedback-form-state");
  formData = {}
}


function localData() {
  const data = JSON.parse(localStorage.getItem("feedback-form-state"));
  const email = document.querySelector(".feedback-form input");
  const message = document.querySelector(".feedback-form textarea");
  if (data) {
    email.value = data.email || '';
    message.value = data.message || '';
  }
};