console.log("Hello world, app.js is connected.");

//forms
//TODO: in our JS, we are going to collect the data from our form
//- event
//- FormData object

//event --> submit
//event listener --> Attached to the form

const userForm = document.getElementById("userform");
userForm.addEventListener("submit", handleSubmit);

//event handler --> collect the form's data

function handleSubmit(submitEvent) {
  //prevent the form's default behaviour
  submitEvent.preventDefault();
  //create a template object to store our user's data
  const formData = new FormData(userForm);
  console.log(formData);
  //convert (parse) our FormData into an object shape. The line below will also return the values entered from the key:value pairs on the form inputs!
  const formValues = Object.fromEntries(formData);

  console.log(formValues);
}
