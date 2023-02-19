const fs = require("fs");
//nodeconst path = require("/questions.js");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const questions = require("./questions.js");

// function to write README file
const createMyFile = (filename, data) => {
  fs.writeFileSync(filename, JSON.stringify(data));
};

// function to initialize program
function init(filename) {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    createMyFile(`${filename}.md`, generateMarkdown(userInput));
  });
}

// function call to initialize program
init();
