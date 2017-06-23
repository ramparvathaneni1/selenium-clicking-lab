var assert = require('assert');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

describe("Three Button Game Site", function() {
  before(function(done) {
    // load the website once for all the tests
    var port = 3000;
    driver.get('http://localhost:' + port).then(function() {
      done();
    });
  });
  
  after(function() {
    // shut down the Selenium web driver after all the tests.
    driver.quit();
  });
  
  describe("initial state", function() {
    it("should have the top message say: Three Button Game.", function(done) {
      assert.fail();
    });
    
    it("should have the bottom message say: Click those buttons!", function(done) {
      assert.fail();
    });
    
    it("each button should say click me", function(done) {
      assert.fail();
    });
  });
  
  describe("button clicking", function() {
    it("should not win if one button is clicked", function(done) {
      assert.fail();
    });
    
    it("should display 'clicked' for all buttons", function(done) {
      assert.fail();
    });
  });
});
