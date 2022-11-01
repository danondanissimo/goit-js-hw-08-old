import throttle from 'lodash.throttle';


const feedbackForm = document.querySelector('.feedback-form')

feedbackForm.addEventListener('input', throttle(input, 300));
feedbackForm.addEventListener('submit', submit);
let formData = JSON.parse(localStorage.getItem("feedback-form-state")) || {}
localData()
function input(event) {
  if (event.target.name === `email`) {
    formData.email = event.target.value
  }
  if (event.target.name === `message`) {
    formData.message = event.target.value
  }
  
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