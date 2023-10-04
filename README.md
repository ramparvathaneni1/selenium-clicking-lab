# Selenium Clicking Lab

People click on things on websites a lot. It's important to be able to click
on things with Selenium. Let's practice that.

Here's a simple website with three buttons. You don't need to code anything
on the website itself. It only exists so we can interact with it via selenium.

## Setup

- Fork and Clone this repo
- `cd` into the repo directory and run `npm install`
- Run `node index.js` to start the server
- Navigate to http://localhost:3000 to see the simple webpage
- Verify that you (as a human) can click the three buttons and see a win message
- Run the initial failing tests by executing `npm run test` in another Terminal tab

# Useful Code Snippets

You can perform basic clicking by finding and element with `selenium.By.id()` (or another
`By.` method) and calling `.click()`:

```js
const selection = await selenium.By.id("button");
await driver.findElement(selection).click();
```

Here's how to check text within an element. First, you have to get a reference
to the element using something like `selenium.By.id()`. Next, use `.getText()` to store the text for the element. Then, `assert.equal(text, "Click those buttons!")` function where the `text` parameter contains the actual value of text inside that element:

```
const selection = await selenium.By.id("winner");
const text = await driver.findElement(selection).getText();
assert.equal(text, "Click those buttons!");
```

# Writing Selenium Interactions

A test file `test/three-click-test.js` has been provided for you. It combines
**Mocha** and **Selenium** together to provide automatic browser interaction
with Unit Tests.

Your job is to go inside each `it()` function and write code so the function
uses **Selenium** to verify the website behaves as it should.

In the Terminal, run `npm run test` to execute the suite of tests.

Here's what we're testing for:

- Describe the initial state
  - it should have an header with an id say: "Three Button Game"
  - it should have the bottom message say: "Click those buttons!"
  - it should have each button say click me
- Describe button clicking interactions
  - it should change text when clicked
  - it should not win if one button is clicked
  - it should display 'clicked' for all buttons and say "You win!"

# Solution

- [test/three-click-test-solution.js](test/three-click-test-solution.js)
