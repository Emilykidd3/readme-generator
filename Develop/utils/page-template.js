const generateLicense = license => {
    if (license === 'None') {
        return '';
    }
    return `
## License
This application is covered under ${license} licensing
    `
};

const generateLicenseTOC = license => {
    if (license === 'None') {
        return '';
    }
    return `
* [License](#license)`
};

const generateLicenseBadge = license => {
    if (license === 'None') {
        return '';
    }
    return `<img src='https://img.shields.io/badge/license-${license.replace(' ', '%20')}-black'/>`
}

const writePage = function(questionAnswers) {
    console.log(questionAnswers)

    // destructure answers
    const { github, email, projectName, description, license, installation, tests, usage, contribution } = questionAnswers

    return `
# ${projectName}  ${generateLicenseBadge(license)}

## Description
${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)${generateLicenseTOC(license)}
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install dependencies, use

\`\`\`
${installation}
\`\`\`

## Usage
${usage}
${generateLicense(license)}
## Contribution 
To contribute to the repository, ${contribution}

## Tests
To run tests input: 

\`\`\`
${tests}
\`\`\`

## Questions
For any questions, please contact me via [email](mailto:${email}) or find me on github @${github}

    `
}

module.exports = writePage;


