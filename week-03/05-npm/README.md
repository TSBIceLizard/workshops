# npm set up

## Step 1: Initialize npm in our app

In the terminal, type:
`npm init -y`

- Add
  `"type": "module"` to your package.json, below `"license":`
  This makes sure we tell our app to use ES6 syntax instead of commonjs. commonjs is antiquated at this point.

## Step 2: Install packages

- Check docs to know exactly how to install package

`npm i packagename`

- If installing a package wrongly or you need to uninstall a package
  `npm uninstall -g packagename` (if it gets installed globally)
  `npm uninstall packagename` (if it needs to be uninstalled from your project only)

  ## STEP 3: Add a .gitignore file

- this file will contain the names of files or folders that you do not wish to push to github

- Make sure to add files or folders you wish to omit to .gitignore. In this case, node_modules, so we prevent uploading duplicate npm modules to github

- .gitignore is CaSe SeNsItIvE!!!!

- Another example of a file we must never push to git is anything that contains sensitive info like passwords, usernames, emails etc!!

## Extra step: add new scripts to your package.json

- add a script to your package.json

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"cowsay": "node cowsay.js"
},

- To run a script, use `npm run scriptname` in the terminal
