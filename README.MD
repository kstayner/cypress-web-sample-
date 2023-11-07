# Cypress Login Test Example

This is a sample project that demonstrates how to use Cypress with JavaScript to perform a login test. The test ensures that the login functionality of a web application is working as expected.

## How to Run the Tests Locally

Before running the tests, ensure you have the following requirements installed on your system:

- Node (version >= 18.17.0)
- NPM (version >= 9.6.7)

We recommend using [NVM](https://github.com/nvm-sh/nvm) to manage your Node.js distribution. To set up your Node environment, run the following command:

```shell
nvm use
```

### Step 1: Install Dependencies

First, you need to set up the project's dependencies. Open a terminal or command prompt and navigate to the project directory. Then, run the following command:

```shell
npm install
```

### Step 2: Run the Tests

After installing the dependencies and Chrome version 114, you can execute the test suite. In the same terminal or command prompt, run the following command:

```shell
npm run test
```

This will open the Cypress Test Runner, where you can run and view your tests interactively.

To run tests in headless mode, use:

```shell
npm run test:headless
```

That's it! You now have a Cypress project for login testing, and you don't need to worry about installing Chrome separately, as Cypress comes with Electron.

Customize the URLs and selectors in your test and page object files according to your application.

Feel free to customize the test cases or add more tests to suit your specific use cases.
