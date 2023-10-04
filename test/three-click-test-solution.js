const selenium = require("selenium-webdriver");
const prompt = require("prompt-sync")();
const assert = require("assert");

// const main = async () => {

//   const email = prompt('What is your email?');
//   const pwd = prompt.hide('What is your password?');
//   console.log(email, pwd);

//     const driver = await new selenium.Builder().forBrowser('chrome').build();
//     await driver.get('https://facebook.com/');

//     const selection = selenium.By.name('email');
//     const element = driver.findElement(selection);
//     element.sendKeys(email);
//     const passSelection = selenium.By.name('pass');
//     const passElement = driver.findElement(passSelection);
//     passElement.sendKeys(pwd);
//     const button = selenium.By.name('login');
//     const buttonElement = driver.findElement(button);
//     buttonElement.click(); //add this lines
//   }

//   main();

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
        const buttonId = "button" + i;

        const selection = await selenium.By.id(buttonId);
        const text = await driver.findElement(selection).getText();
        assert.equal(text, "click me");
        foundNum++;
      }
      await driver.close();
    });
  });
};

// describe(
//   "button clicking",
//   await function () {
//     it("should not win if one button is clicked", function (done) {
//       driver.findElement(By.id("button1")).click();
//       driver
//         .findElement(By.id("button1"))
//         .getText()
//         .then(function (txt) {
//           assert.equal(txt, "clicked");
//         });
//       driver
//         .findElement(By.id("winner"))
//         .getText()
//         .then(function (txt) {
//           assert.equal(txt, "Click those buttons!");
//         })
//         .then(done);
//     });

//     it("should display 'clicked' for all buttons", function (done) {
//       var numClicked = 0;
//       for (var i = 1; i <= 3; i++) {
//         var id = "button" + i;
//         driver.findElement(By.id(id)).click();
//         driver
//           .findElement(By.id(id))
//           .getText()
//           .then(function (txt) {
//             assert.equal(txt, "clicked");
//           })
//           .then(function () {
//             numClicked++;
//             if (numClicked === 3) {
//               driver
//                 .findElement(By.id("winner"))
//                 .getText()
//                 .then(function (txt) {
//                   assert.equal(txt, "You win!");
//                 })
//                 .then(done);
//             }
//           });
//       }
//     });
//   }
// );

main();
