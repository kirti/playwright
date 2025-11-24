# Playwright Automation Tests

This repository contains **Playwright** automated tests for practicing UI testing on public websites like `the-internet.herokuapp.com` and `example.com`.  

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Running Specific Tests](#running-specific-tests)
- [HTML Reports](#html-reports)
- [Continuous Integration](#continuous-integration)
- [Recommended Websites for Testing](#recommended-websites-for-testing)

---

## Prerequisites

- Node.js >= 18  
- npm (comes with Node.js)  
- macOS / Windows / Linux  

Check Node.js version:


node -v

## Table of Contents

## Clone the repository:
git clone https://github.com/kirti/playwright.git
cd playwright

# Install dependencies:
- npm install

# Install Playwright browsers:

- npx playwright install

This will install Chromium, Firefox, and WebKit (if supported on your OS).

# Running Tests

- Run all tests:

- npx playwright test

# Run tests in headed mode (to see browser UI):

- npx playwright test --headed

- npx playwright test tests/login-the-internet.spec.ts

# HTML Reports

Add the HTML reporter in playwright.config.ts:

reporter: [['html', { open: 'never' }]]

# Run tests and generate report: 

npx playwright show-report

# Continuous Integration (GitHub Actions)
github/workflows/playwright.yml

This workflow will run your tests automatically on GitHub. 

# How to test locally
npx playwright test tests/login-the-internet.spec
<img width="558" height="195" alt="image" src="https://github.com/user-attachments/assets/92b5aef6-c635-4bf8-a546-438ced6f5f03" />
