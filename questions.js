// array of questions for user
const questions = [
  {
    name: "title",
    message: "What is the title of your project?",
    type: "input",
  },
  {
    name: "description",
    message:
      "Provide a short description explaining the what, why, and how of your project.",
    type: "input",
  },
  {
    name: "installation",
    message: "Describe the steps required to install your project? ",
    type: "input",
  },
  {
    name: "usage",
    message: "Provide instructions and examples for use. ",
    type: "input",
  },
  {
    name: "licenseList",
    message:
      "A license tells others what they can and can't do with your code. Choose a license:",
    type: "list",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "BSD 2-Clause 'Simplified' License",
      "BSD 3-Clause 'New' or 'Revised' License",
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
    ],
  },
  {
    name: "contributing",
    message:
      "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. ",
    type: "input",
  },
  {
    name: "tests",
    message: "Write tests for your application. ",
    type: "input",
  },
  {
    name: "gitHubUserName",
    message: "Provide gitHub username: ",
    type: "input",
  },
  {
    name: "eMail",
    message: "Provide eMail adderess: ",
    type: "input",
  },
];

module.exports = questions;
