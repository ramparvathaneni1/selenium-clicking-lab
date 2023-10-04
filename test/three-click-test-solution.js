const selenium = require("selenium-webdriver");
const assert = require("assert");

const main = () => {
  let driver = new selenium.Builder().forBrowser("chrome").build();
  driver.get("http://localhost:3000/");

  describe("initial state 3 test", () => {
    it("should have the top message say: Three Button Game.", async () => {
      const selection = await selenium.By.id("top-message");
      const text = await driver.findElement(selection).getText();
      assert.equal(text, "Three Button Game");
    });

    it("should have the bottom message say: Click those buttons!", async () => {
      const selection = await selenium.By.id("winner");
      const text = await driver.findElement(selection).getText();
      assert.equal(text, "Click those buttons!");
    });

    it("each button should say click me", async () => {
      let foundNum = 0;
      for (var i = 1; i <= 3; i++) {
        const selection = await selenium.By.id("button" + i);
        const text = await driver.findElement(selection).getText();
        assert.equal(text, "click me");
        foundNum++;
      }
    });
  });

  describe("button clicking", () => {
    it("button text should change when clicked", async () => {
      const selection = await selenium.By.id("button1");
      const button = await driver.findElement(selection);
      button.click();
      const text = await button.getText();
      assert.equal(text, "clicked");
    });

    it("should not win if one button is clicked", async () => {
      const selection = await selenium.By.id("winner");
      const text = await driver.findElement(selection).getText();
      assert.equal(text, "Click those buttons!");
    });

    it("should display 'clicked' for all buttons and 'You win!'", async () => {
      let numClicked = 0;
      for (let i = 1; i <= 3; i++) {
        const selection = await selenium.By.id("button" + i);
        const button = await driver.findElement(selection);
        button.click();
        const text = await button.getText();
        assert.equal(text, "clicked");
        numClicked++;
      }
      if (numClicked === 3) {
        const selection = await selenium.By.id("winner");
        const text = await driver.findElement(selection).getText();
        assert.equal(text, "You win!");
      }
    });
  });
};

main();
