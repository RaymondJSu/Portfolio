# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Please visit the website if you are interested! [My website](https://RaymondJSu.github.io/Portfolio/)

## How to Deploy a Website to GitHub Pages
1. **Install the `gh-pages` npm package**:
* Run the following command to install the gh-pages package as a development dependency in the project:\
```$ npm install gh-pages --save-dev```

2. **Add a Homepage Property to `package.json`**:
* Open `package.json` file.
* Add a `homepage` property with the following format:\
```"homepage": "https://{username}.github.io/{repo-name}"```

3. **Add Deployment Scripts to package.json**:
* In the same `package.json` file, add the following scripts:

```JSON
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

4. **Push the React App to the GitHub Repository**:
* Commit the changes to the Git repository.
* Push the code to the GitHub repository using the following command:\
```$ npm run deploy```

## How to deploy to UW Server
Use putty connect to server. "public_html" is the directory where to deploy our website.

Inside the directory, use git clone command to deploy the files.


