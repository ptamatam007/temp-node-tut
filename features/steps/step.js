const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

let calculator;
let result;

Given('I have entered {int} into the calculator', function (number) {
  calculator = number;
  console.log(`The numver passed in step ${calculator}`);
});
When('I press Addition', function () {
    result = calculator + calculator;
  });
  
  Then('The result should be {int} on the screen', function (expectedResult) {
    expect(result).to.equal(expectedResult);
  });