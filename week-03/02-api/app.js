console.log("Hello world, app.js is connected!");

//If you don't make the fetch wait for what it's fetching (which the browser will not wait automatically), it will log a "Promise" meaning it 'tried' to do this, but didn't want to wait for fetch to execute the other code. We need to make sure when the API is FETCHED, that we make it WAIT to get the API result!

//The browser reads through our code top to bottom (no waiting time)
//Some actions in our code are asynchronous --> they take more time than the browser takes to do it's thing to be executed!
//When we have an async action, if the browser executes it synchronously we get a 'PROMISE' --> The browser's way to let us know that it executed the code like you asked! (You didn't ask it to wait!)

// TODO: I want to request data from the Random Fox API (done)

//to signal that an action is async, we use async/await --> this only works for functions!!!

async function getFoxesData() {
  //fetch() will get data from a specific url
  const response = await fetch("https://randomfox.ca/floof/");
  //Await forces the browser to WAIT until the response has been received!
  console.log(response);
  //translate (parse) data into JSON
  const data = await response.json();
  console.log(data);
  return data; // Now data is available for other functions!
}

//TODO: Use that data to render fox images on my website (done)
const foxContainer = document.getElementById("fox-api-container");
function createFoxImage(foxUrl) {
  const image = document.createElement("img");
  foxContainer.appendChild(image);
  image.src = foxUrl.image;
  image.alt = "A random fox!";
}

//Control function to run getFoxesData and createFoxImage in the order we want them to

async function renderFox() {
  const foxesData = await getFoxesData();
  createFoxImage(foxesData);
}

renderFox();

//Extra: If we have a very large API? We can be specific with data!
//TODO: I want to get a list of dummy data (users in this case)

async function getUsersData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await response.json();
  const status = await response.status;
  console.log(usersData);
  console.log(`Response status: ${status}`);
  const wrangledUser = usersData[0].name;
  console.log(`Name of the first entry in the array is: ${wrangledUser}`);
  return wrangledUser;
}
//If the data here is large and you are not going to use all of it, you can wrangle the data --> filter the data to the properties you need

getUsersData();

//Uses of APIs: APIs are used for fetching content from elsewhere, such as a database. Examples of this could be, 1) fetching and submitting user posted content to social media, 2) discord's message history (it has no reason to be built into the app itself!), 3) Specific snippets of google maps which are referenced on a website unrelated to google. For an API to be used by a third party, it must be publcily accessible! In many occasions, API's are not open source nor accessible.

//User request <-> API <-> Database.

// Interacting with the Github API!
// The API link is case sensitive. Make sure you do not have a forward slash at the very end of the API link!

async function getGithubRepoW2Data() {
  const getGithubResponse = await fetch(
    "https://api.github.com/repos/TSBIceLizard/week-02-assignment"
  );
  const githubData = await response.json();

  console.log(json.stargazers_count);
  return githubData;
}

getGithubRepoW2Data();

// DOM it

// const githubContainer = document.getElementById("github-api-container");
