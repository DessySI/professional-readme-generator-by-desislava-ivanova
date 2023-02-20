// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  ${data.description}

  ##Table of Contents
   - [Description](#description)
   - [Installation](#installation)
   - [Usage](#usage)
   - [Contributing](#contributing)
   - [Tests](#tests)

  ##Installation
  ${data.installation}

  ##Usage
  ${data.usage}

  ##License
  ${data.licenseList}

  ##Contributing
  ${data.contributing}

  ##Tests
  ${data.tests}

  ##Questions
   - ${data.gitHubUserName}
   - ${data.eMail}

`;
}

module.exports = generateMarkdown;
