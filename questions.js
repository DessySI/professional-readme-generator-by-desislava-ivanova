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
      "Apache_2.0",
      "GPLv3",
      "MIT",
      "BSD_2--Clause",
      "BSD_3--Clause",
      "Boost_1.0",
      "CC0_1.0",
      "EPL_2.0",
      "GPLv3",
      "GPL_v2",
      "GPL_v2.1",
      "MPL_2.0",
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
