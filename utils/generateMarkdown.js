// // function to generate markdown for README
// choices: [
//   "Apache License 2.0",
//   "GNU General Public License v3.0",
//   "MIT License",
//   "BSD 2-Clause 'Simplified' License",
//   "BSD 3-Clause 'New' or 'Revised' License",
//   "Boost Software License 1.0",
//   "Creative Commons Zero v1.0 Universal",
//   "Eclipse Public License 2.0",
//   "GNU Affero General Public License v3.0",
//   "GNU General Public License v2.0",
//   "GNU Lesser General Public License v2.1",
//   "Mozilla Public License 2.0",
// ];

function generateMarkdown(data) {
  return `# ${data.title} [![license](https://img.shields.io/badge/license-${data.licenseList}-blue)](https://shields.io)

  ## Description 
  ${data.description}

  ## Table of Contents
   - [Description](#description)
   - [Installation](#installation)
   - [Usage](#usage)
   - [Contributing](#contributing)
   - [Tests](#tests)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  Licensed under the ${data.licenseList}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
   - ${data.gitHubUserName}
   - ${data.eMail}

`;
}

module.exports = generateMarkdown;
