const selenium = require("selenium-webdriver");
const assert = require("assert");

const main = () => {
  let driver = new selenium.Builder().forBrowser("chrome").build();
  driver.get("http://localhost:3000/");

  beforeEach(async () => {
    await driver.navigate().refresh();
  });

  describe("Describe the initial state", () => {
    it("should have the top message say: Three Button Game.", async () => {
      const selection = selenium.By.id("top-message");
      const text = await driver.findElement(selection).getText();
      assert.equal(text, "Three Button Game");
    });

    it("should have the bottom message say: Click those buttons!", async () => {
      const selection = selenium.By.id("winner");
      const text = await driver.findElement(selection).getText();
      assert.equal(text, "Click those buttons!");
    });

    it("each button should say click me", async () => {
      const selection = selenium.By.css("button");
      const buttonsArr = await driver.findElements(selection);
      buttonsArr.forEach(async (button) =>
        assert.equal(await button.getText(), "click me")
      );
    });
  });

  describe("Describe button clicking interactions", () => {
    it("should change text when clicked", async () => {
      const selection = selenium.By.css("button");
      const button = await driver.findElement(selection);
      await button.click();

      const newText = await button.getText();
      assert.equal(newText, "clicked");
    });

    it("should not win if one button is clicked", async () => {
      const selection = selenium.By.css("button");
      const button = await driver.findElement(selection);
      await button.click();

      const winSelection = selenium.By.id("winner");
      const winnerText = await driver.findElement(winSelection).getText();

      assert.notEqual(winnerText, "You win!");
    });

    it("should display 'clicked' for all buttons and say 'You win!'", async () => {
      const selection = selenium.By.css("button");
      const buttons = await driver.findElements(selection);

      buttons.forEach(async (button) => await button.click());

      const winSelection = selenium.By.id("winner");
      const winnerText = await driver.findElement(winSelection).getText();

      assert.equal(winnerText, "You win!");
      driver.quit();
    });
  });
};

main();
