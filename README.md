# Project: SE302 Automation Tests

## Overview
This repository contains automated test scripts developed as part of the SE302 project. The primary focus of this project is to verify the functionality of various features of the web application using **Playwright**. It includes both smoke and normal test cases and adheres to the Page Object Model (POM) design pattern for better test structure and reusability.

---

## Repository Structure

```plaintext
SE302/
├── node_modules/         # Dependencies (excluded in the repository)
├── pages/                # Page Object Model files
├── playwright-report/    # Test reports (excluded in the repository)
├── test-results/         # Test result files (excluded in the repository)
├── tests/                # Automated test scripts
├── package.json          # Node.js dependencies
├── package-lock.json     # Dependency lock file
├── playwright.config.js  # Playwright configuration
└── README.md             # Project documentation
```

---

## Prerequisites

Ensure the following are installed on your machine:
- **Node.js (v16 or later)**: JavaScript runtime environment.
- **Playwright**: For test automation.

To install Node.js, visit [Node.js Downloads](https://nodejs.org/).

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ardenfndi/SE302.git
   ```
2. Navigate to the project directory:
   ```bash
   cd SE302
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

---

## Running Tests

### Running All Tests
To execute all the test cases, run:
```bash
npx playwright test
```

### Running Specific Tests
To run a specific test file, use:
```bash
npx playwright test tests/<test-file-name>.js
```
For example:
```bash
npx playwright test tests/login.test.js
```

### Viewing Test Reports
After executing the tests, generate and view the HTML report:
```bash
npx playwright show-report
```

---

## Test Case Documentation

### Test Case Categories
- **Smoke Tests**: Verify critical path functionality.
- **Normal Tests**: Test additional features and scenarios.

### Example Test Cases
#### Test Case: Login Functionality
- **Description**: Verify that a user can log in with valid credentials.
- **Preconditions**: User has valid credentials.
- **Steps**:
  1. Navigate to the login page.
  2. Enter valid username and password.
  3. Click the login button.
- **Expected Result**: User is redirected to the secure area with a success message.

#### Test Case: File Upload
- **Description**: Validate the file upload functionality.
- **Preconditions**: A sample file is available.
- **Steps**:
  1. Navigate to the file upload page.
  2. Select a file and upload it.
  3. Submit the form.
- **Expected Result**: The uploaded file's name is displayed on the page.

---

## Page Object Model (POM) Implementation

The **Page Object Model** design pattern is implemented to:
- Enhance code reusability.
- Simplify test maintenance.

### Example POM Structure
Each web page is represented as a class in the `pages/` directory. For example:

#### File: `pages/loginPage.js`
```javascript
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };
```

---

## Challenges Faced

1. **Dynamic Content Handling**:
   - Challenge: Ensuring tests work consistently with dynamically loaded content.
   - Solution: Added `waitFor` conditions to handle dynamic elements.

2. **Cross-Browser Compatibility**:
   - Challenge: Ensuring tests run smoothly across Chromium, Firefox, and WebKit.
   - Solution: Configured Playwright to test on multiple browsers.

3. **Dependency Management**:
   - Challenge: Maintaining consistent versions of dependencies.
   - Solution: Locked dependency versions using `package-lock.json`.

---

## Contribution Guidelines

1. **Branching Strategy**:
   - Use feature branches for new test cases (e.g., `feature/login-tests`).

2. **Code Standards**:
   - Follow Playwright and POM best practices.
   - Write descriptive comments for clarity.

3. **Pull Requests**:
   - Ensure tests pass locally before creating a pull request.
   - Include a summary of changes and link to related issues.

---
