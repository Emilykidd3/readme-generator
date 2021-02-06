var writePage = function(questionAnswers) {
    console.log(questionAnswers)

    // destructure answers
    const { github, email, projectName, description, license, installation, tests, usage, contribution } = questionAnswers

    return `
    # ${projectName}

    ## Description
    ${description}

    ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contribution](#contribution)
    * [Tests](#tests)
    * [Questions](#questions)

    ## Installation
    To install dependencies, use
        ${installation}

    ## Usage
    ${usage}

    ## License
    <img src='https://img.shields.io/badge/license-${license.replace(' ', '%20')}-black'>

    ## Contribution 
    To contribute to the repository, ${contribution}

    ## Tests
    To run tests input: 
        ${tests}

    ## Questions
    For any questions, please contact me via [email](mailto:${email})

    ### Created by ${github}
    `
}

module.exports = writePage;