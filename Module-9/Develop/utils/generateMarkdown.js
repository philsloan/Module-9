// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function getLicenseBadge(licenseName) {
  const badges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'GPL-3.0': '[![License: GPL-3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'Apache-2.0': '[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  };

  return badges[licenseName] || '';
}

// Example usage:
const badge = getLicenseBadge('MIT');
console.log(badge);

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function getLicenseLink(licenseName) {
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPL-3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
  };

  return licenseLinks[licenseName] || '';
}

// Example usage:
const licenseLink = getLicenseLink('MIT');
console.log(licenseLink);

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function generateLicenseSection(licenseName) {
  const licenses = {
    'MIT': `
## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](LICENSE) file for details.
`,
    'GPL-3.0': `
## License

This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0) - see the [LICENSE](LICENSE) file for details.
`,
    'Apache-2.0': `
## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0) - see the [LICENSE](LICENSE) file for details.
`,
  };

  return licenses[licenseName] || '';
}

// Example usage:
const licenseName = 'MIT';
const licenseSection = generateLicenseSection('MIT');
console.log(licenseSection);

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${data.license}

### Description

${data.description}

### Table of Contents
  * Installation Commands
  * Usage Info
  * Contribution ammount
  * Test Commands
  * Contact Info
    
## Installation
To install, run the following commands:
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}
${data.license}

## Contributing
${data.contribution}

## Test
${data.test}

## Contact Info
${data.email}
${data.github}
`;
}

module.exports = generateMarkdown;

