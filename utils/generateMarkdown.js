//function to generate Markdown for readme

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
