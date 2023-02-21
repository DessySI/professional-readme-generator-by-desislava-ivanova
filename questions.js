// array of questions for user
const questions = [
  {
    name: "title",
    message: "What is the title of your project?",
    type: "input",
    validate: (input) => {
      if (input.trim() === "") {
        return "You have to add title.";
      } else {
        return true;
      }
    },
  },
  {
    name: "description",
    message:
      "Provide a short description explaining the what, why, and how of your project.",
    type: "input",
    validate: (input) => {
      if (input.trim() === "") {
        return "You have to add description.";
      } else {
        return true;
      }
    },
  },
  {
    name: "installation",
    message: "Describe the steps required to install your project? ",
    type: "input",
    validate: (input) => {
      if (input.trim() === "") {
        return "You have to describe the steps required to install your project. If no instalation is required, make a note.";
      } else {
        return true;
      }
    },
  },
  {
    name: "usage",
    message: "Provide instructions and examples for use. ",
    type: "input",
    validate: (input) => {
      if (input.trim() === "") {
        return "You have to provide instructions and examples for use.";
      } else {
        return true;
      }
    },
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
    validate: (input) => {
      if (input.trim() === "") {
        return "If you don't like other developers to contribute your application or package, make a note of that.";
      } else {
        return true;
      }
    },
  },
  {
    name: "tests",
    message: "Write tests for your application. ",
    type: "input",
    validate: (input) => {
      if (input.trim() === "") {
        return "You have to add tests for your application. If no tests required, make a note.";
      } else {
        return true;
      }
    },
  },
  {
    name: "gitHubUserName",
    message: "Provide gitHub username: ",
    type: "input",
    validate: (input) => {
      if (input.trim() === "") {
        return "You have to add gitHub username. If you don't have any, make a note.";
      } else {
        return true;
      }
    },
  },
  {
    name: "eMail",
    message: "Provide eMail adderess: ",
    type: "input",
    validate: (input) => {
      if (input.trim() === "") {
        return "You have to add eMail adderess. If you don't have any, make a note.";
      } else {
        return true;
      }
    },
  },
];

module.exports = questions;
