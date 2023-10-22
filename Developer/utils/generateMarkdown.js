// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
// Check if a license is provided
if (!license) {
  return ''; // Return an empty string for no license
}

// Map license names to their corresponding badge URLs
const licenseBadges = {
  MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)',
  GPL: '[![License: GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  // Add more licenses and badge URLs as needed
};

// Return the appropriate badge or an empty string for unknown licenses
return licenseBadges[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''; // Return an empty string for no license
  }

  // Define the license section with a placeholder for the license name
  const licenseSection = `## License

This project is licensed under the ${license} License. See the [LICENSE](LICENSE) file for details.`;

  return licenseSection;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions or feedback, please feel free to [contact me](mailto:${data.email}).

GitHub: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;