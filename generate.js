// generateReadme function populating the README.md
function generateReadme(answers) {
    return `
<h1 align="center">${answers.projectTitle} </h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
## Description
 ${answers.description}

## Installation
 ${answers.installation}
## Usage
 ${answers.usage}


    `;
  }
  
  module.exports = generateReadme;