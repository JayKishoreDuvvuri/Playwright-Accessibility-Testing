### Playwright Accessibility Testing

An example project demonstrating automation of playwright tests for accessibility testing.


#### Application Under Test

We are using https://broken-workshop.dequelabs.com/ and https://todomvc.com/examples/typescript-react/#/ as the Application Under Test. 

- URL: https://broken-workshop.dequelabs.com/ (AND) https://todomvc.com/examples/typescript-react/#/
- OS : macOS 
- IDE : Visual Studio Code

#### Clone the repository
```bash
git clone https://github.com/JayKishoreDuvvuri/Playwright-Accessibility-Testing.git
```

#### Install dependencies
```bash
npm install
npx playwright install
```

#### Run Tests

Run Test Case 1

```bash
npm run test:one - Run the test case TC_01_a11y.test.js
```

Run Test Case 2

```bash
npm run test:two - Run the test case TC_02_a11y.test.js
```

Run both the tests in Parallel 

```bash
npm run test  - Run both the tests in parallel
```