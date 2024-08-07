# Test Automation Project with Cypress and Mochawesome Reporter

## Welcome to the Test Automation Project! This project uses Cypress for end-to-end testing with JavaScript and integrates the cypress-mochawesome-reporter for enhanced reporting.

## Prerequisites 

### Before running the automation scripts, ensure you have the following installed:
To install Node.js, visit Node.js Official Website and download the latest version appropriate for your operating system. Follow the installation instructions provided on the website.

Node.js (version: v20.9.0)

Download URL Link for Node js

```bash
https://nodejs.org/en/download

```
npm (Node Package Manager)

To verify installed npm version on commandline

```bash
 npm -v

```

Download and Install Visual Studio Code

```bash
https://code.visualstudio.com/download

```

## Verify Installation:

    After installing Node.js, open a terminal or command prompt.
    Run the following commands to verify that Node.js and npm are installed correctly:

    ```bash
    node -v
    npm -v

    ```
    These commands should print out the installed versions of Node.js and npm, respectively.

## Project Structure:

The project is structured as follows:

  - `tests/`: Contains the JavaScript files for the automated tests.
  - `package.json`: Defines project dependencies.
  - `playwright.config.ts`: JavaScript configuration file.

## Installation:

    Clone this repository to your local machine using the following command:
    1. Clone the repository:

     ```bash

      ```

    2. Navigate to the project directory:

     - (Navigate to the locally saved project through a command line)
     - Select the ***Drive*** and select <project-directory> with the name of the directory where the repository was cloned.
        - Select the drive where the repository was cloned. 
           *Example*: D drive, E: drive etc.

        - Select Project-directory:

        ```bash

        cd  /...../Cypress_Automation

        ```
    3. To Install dependencies:
    - Once inside the project directory, install the required dependencies by running:

    ```bash

    npx install
     
    ```

    4. Install Cypress:

    ```bash

    npm install cypress --save-dev

    ```
    

## Running Tests

### Run All Tests headless

To run all tests in headless mode (default):

```bash

npx cypress run

```
   
### Run Single Test File
To run a specific test file with head:

```bash
npx cypress run --spec "cypress/e2e/tests/login.cy.js" --browser chrome --headed

```

### Run All Tests headed

To run all tests in head:

```bash
npx cypress run --headed --browser chrome

```

## Viewing Reports

After running your tests, reports are generated in the cypress/reports/html directory. To view the reports:

1. Navigate to the Reports Directory

Open the generated HTML report file (e.g., report.html) in your web browser:

```bash

start report.html

```
