// Client app.js file

console.log("hello world");

//TODO: Collect the user's data from the form

const staffForm = document.getElementById("staff-form");
console.log(staffForm);

function handleStaffSubmit(event) {
  event.preventDefault();
  const formDataTemplate = new FormData(staffForm);
  const formValues = Object.fromEntries(formDataTemplate);
  console.log(formValues);
  //TODO: send the data in a request to the server
  // We'll use the URL where our server is located! http://localhost:8080/new-staff temporarily (make sure that you are fetching the specific POST route that you are requesting data)
  // We'll use fetch to connect our client <---> server!
  fetch("http://localhost:8080/new-staff", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
}

staffForm.addEventListener("submit", handleStaffSubmit);

//================================
