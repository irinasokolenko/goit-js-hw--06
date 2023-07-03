// const button = document.querySelector("button");
// const form = document.querySelector("form");
// form.addEventListener("submit", handleSubmit);
// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password }
//   } = event.currentTarget;
//   if (email.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   } console.log(`Login: ${email.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// };
// loginForm.addEventListener('submit', handleFormSubmit);
// function handleFormSubmit(e) {
//   e.preventDefault();
//   const {
//     elements: { email, password },
//   } = e.currentTarget;
//   if (!email.value.trim() || !password.value.trim()) {
//     return alert('Please fill in all the fields!');
//   } else {
//     const formData = {
//       email: email.value,
//       password: password.value,
//     };
//     console.log(formData);
//     e.currentTarget.reset();
//   }
// }
const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(el) {
    el.preventDefault();
    const formElement = el.currentTarget.elements;
    const email = formElement.email.value;
    const password = formElement.password.value;
    if (email === "" || password === "") {
        return alert("Please fill in all the fields!");
    }
    const formData = {
        email,
        password,
    };
    console.log(formData);
    el.currentTarget.reset();
}
