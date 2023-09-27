
function renderLicenseBadge(license) {
    if (license !== "none"){
        return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
    };
    return "";
}


function renderLicenseLink(license) {
if (license !== "none"){
    return `\n* [License](#license)\n`;
}
return ""
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "none"){
        return `## License
        
        Licensed under the ${license} license.`;
    }
    return "";
}


function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}
${renderLicenseBadge(data.license)}

## Description 
${data.description}


## Table of Contents

* [Installation](#requirements)
* [Usage](#usage)
* [Contact-me](#contact-me)
${renderLicenseLink(data.license)}

## Installation
${data.installation}


## Usage
${data.usage}


## Contact Me
* Name - ${data.name}
* Email - ${data.email}
* Github - ${data.github}
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;

