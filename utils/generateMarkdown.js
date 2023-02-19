// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  ${data.description}

  ##Table of Contents
    -[Description]
    -[Installation]
    -[Usage]
    -[Contributing]
    -[Tests]

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
