import throttle from 'lodash.throttle';


const feedbackForm = document.querySelector('.feedback-form')

feedbackForm.addEventListener('input', throttle(input, 500));
feedbackForm.addEventListener('submit', submit);


const input = (event) => {
  const formData = {}
  formData.email = event.currentTarget.elements.email.value
  formData.message = event.currentTarget.elements.message.value
  localStorage.setItem("feedback-form-state", JSON.stringify(formData))
  console.log(localStorage.getItem("feedback-form-state"))
}

const submit = (event) => {
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")))
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state")
}


const localData = () => {
  const data = JSON.parse(localStorage.getItem("feedback-form-state"));
  const email = document.querySelector(".feedback-form input");
    const message = document.querySelector(".feedback-form textarea");
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
};