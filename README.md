# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### Write Tests
1. Look at each individual part of application
2. Imagine telling a friend what this piece of code does
3. Write test to verify each part does what you expect
4. Write a clean up code to unmount the component after the test run


#### Write Tests with [enzyme](https://enzymejs.github.io/enzyme/)
- Note: setupTest.js is a config file to work with enzyme.

- interact wiht enayme in 3 ways
1. Static - rennder the given component and return a plain HTML
2. Shallow - render just the given component and none of its children
3. Full DOM - render the component and all of its children and then return an object taht we can use to interact with that component, so we can simulate click event or entering text. This render method let us modify the returning object afterwards.

#### [Absolute Imports](https://create-react-app.dev/docs/importing-a-component/#absolute-imports)
- You can configure your application to support importing modules using absolute paths. This can be done by configuring a jsconfig.json or tsconfig.json file in the root of your project.
- We use absolute import path from the 'src' directory.