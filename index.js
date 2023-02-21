const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const questions = require("./questions.js");

// function to initialize program and call it
(function init() {
  inquirer.prompt(questions).then(function (userInput) {
    // function to create readme_folder
    const readmeFolderPath = path.join(__dirname, "readme_folder");
    // Create new readme_folder if it doesn't exist
    if (!fs.existsSync(readmeFolderPath)) {
      fs.mkdirSync(readmeFolderPath);
    }
    const filePath = path.join(readmeFolderPath, "README.md");
    // function to write README file
    fs.writeFile(filePath, generateMarkdown(userInput), (err) => {
      if (err) throw err;
      console.log(`You can find your new redme file here: ${filePath}`);
    });
  });
})();
