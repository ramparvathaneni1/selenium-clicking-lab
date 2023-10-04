const selenium = require("selenium-webdriver");
const assert = require("assert");

const main = () => {
  let driver = new selenium.Builder().forBrowser("chrome").build();
  driver.get("http://localhost:3000/");

  describe("Describe the initial state", () => {
    it("should have the top message say: Three Button Game.", async () => {
      assert.fail();
    });

    it("should have the bottom message say: Click those buttons!", async () => {
      assert.fail();
    });

    it("each button should say click me", async () => {
      assert.fail();
    });
  });

  describe("Describe button clicking interactions", () => {
    it("should change text when clicked", async () => {
      assert.fail();
    });

    it("should not win if one button is clicked", async () => {
      assert.fail();
    });

    it("should display 'clicked' for all buttons and say 'You win!'", async () => {
      assert.fail();
      // driver.quit();
    });
  });
};

main();
