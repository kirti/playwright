# Playwright UI Automation Suite

This repository contains **Playwright** automated tests for practicing UI testing on public websites like `the-internet.herokuapp.com` and `example.com`.  

This repository contains automated **UI & E2E tests** built with **Playwright**. 
It covers sample websites like [the-internet.herokuapp.com](https://the-internet.herokuapp.com/), 
[example.com](https://example.com), and [demoqa.com](https://demoqa.com/) for practice and demonstration purposes.

Perfect for QA engineers, developers, and automation enthusiasts learning 

**Playwright testing**.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [HTML Reports](#html-reports)
- [Run tests and generate report](#run-tests-and-generate report)
- [Continuous Integration](#continuous-integration)

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

# Installation
- npm install

# Install Playwright browsers:

- npx playwright install

This will install Chromium, Firefox, and WebKit (if supported on your OS).

# Running Tests

- Run all tests:

- npx playwright test

# Run tests in headed mode

- npx playwright test --headed

- npx playwright test tests/login-the-internet.spec.ts

# HTML Reports

Add the HTML reporter in playwright.config.ts:

reporter: [['html', { open: 'never' }]]

# Run tests and generate report

npx playwright show-report

# Continuous Integration
github/workflows/playwright.yml

This workflow will run your tests automatically on GitHub. 

# Specific Test Command
npx playwright test tests/login-the-internet.spec
<img width="558" height="195" alt="image" src="https://github.com/user-attachments/assets/92b5aef6-c635-4bf8-a546-438ced6f5f03" />
