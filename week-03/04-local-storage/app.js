//Local Storage

//Keywords:
//Local storage
//dev tools
//stringify
//parse
//JSON
//key-value pairs
//data persistance

//Local storage description
//A way to store data on the user's local browser files
//Data will persist between sessions

//Things we should store in local storage
//User preferences
//// Images and vids
//game states
//// HTTP keys?
//// Personal info

//Local storage SHOULD ONLY EVER contain data that is non-sensitive to keep between sessions (data persistence)

//localStorage is an object

//in this object we have methods to store, read, delete data from local storage

//we can only store STRINGS (key value pairs) in LOCAL STORAGE!!

//store new data in local storage

//STEP 1: Sringify the data (using a json method)

// const stringifiedPreferences = JSON.stringify(userPreferences);

//STEP 2:  Add our stringified data to local storage

// localStorage.setItem("User Preferences", stringifiedPreferences);

//=====================================
//Read data from local storage

//STEP 1: get data from local storage

// const storedPreferences = localStorage.getItem("User Preferences");

//STEP 2: parse the stringified data to its original shape

// const parsedPreferences = JSON.parse(storedPreferences);

//Wrangle parsedPreferences

// const theme = parsedPreferences.theme;

// console.log(parsedPreferences);
// console.log(theme);

//NOTE FOR FIREFOX
//On firefox, the local storage is not listed under the Application tab in inspect, instead it's listed under the Storage tab!
//Deleting the local storage on firefox --> You can right click the key and decide to Delete All, OR you can delete that specific key:value pair

//Combine with form and store user data

// let userPreferences = {
//   theme: "dark",
//   font: "font1",
//   contrast: "contrast1",
//   colblind: "colblind0",
//   maxNumOfItemsPerPage: 16,
// };

const userPrefsInput = document.getElementById("userprefsform");

userPrefsInput.addEventListener("submit", handleSubmit);

function handleSubmit(submitEvent) {
  submitEvent.preventDefault();
  const prefsData = new FormData(userPrefsInput);
  const theme = prefsData.get("theme");
  localStorage.setItem("theme", theme);
  const font = prefsData.get("font");
  localStorage.setItem("font", font);
  const contrast = prefsData.get("contrast");
  localStorage.setItem("contrast", contrast);
  const colBlind = prefsData.get("colblind");
  localStorage.setItem("colblind", colBlind);
  const colour = prefsData.get("colour");
  localStorage.setItem("colour", colour);
  const preferences = {
    colour,
    theme,
  };
  localStorage.setItem("user Preferences", JSON.stringify(preferences));
}

const getColour = localStorage.getItem("colour");

if (getColour) {
  const input = document.getElementById("colour");
  input.value = getColour;
}

// Attempt 2
// function handleSubmit(submitEvent) {
//   submitEvent.preventDefault();
//   const prefsData = new FormData(userPrefsInput);
//   prefsData.theme = prefsData.get(theme.value);
//   localStorage.setItem("theme", prefsData.theme);
//   prefsData.font = prefsData.get(font.value);
//   localStorage.setItem("font", prefsData.font);
//   prefsData.contrast = prefsData.get(contrast.value);
//   localStorage.setItem("contrast", prefsData.contrast);
//   prefsData.colblind = prefsData.get(colblind.value);
//   localStorage.setItem("colblind", prefsData.colblind);
//   const stringifiedPreferences = JSON.stringify(prefsData);
// }

// Attempt 1
// userPrefsInput.addEventListener("submit", function (submitPrefs) {
//   submitPrefs.preventDefault();
//   const prefsData = new FormData(userPrefsInput);
//   const theme = prefsData.get(theme);
//   localStorage.setItem(theme, userPreferences.theme);
//   const font = prefsData.get(font);
//   localStorage.setItem(font, userPreferences.font);
//   const contrast = prefsData.get(contrast);
//   localStorage.setItem(contrast, userPreferences.contrast);
//   const colblind = prefsData.get(colblind);
//   localStorage.setItem(colblind, userPreferences.colblind);
//   const stringifiedPreferences = JSON.stringify(userPreferences);
//   localStorage.setItem("User Preferences", stringifiedPreferences);
// });
