require('../spec.helper');

describe('User can input value and get a FizzBuzz results', () => {

  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });
 
  beforeEach(async () => {
    await browser.page.reload();
  });

  after(() => {
    browser.close();
  });

  it('clicking on the "Check" button', async () => {
    await browser.fillIn("input[id='value']", { with: "3" })
    await browser.clickOnButton("button[id='button']")
    let content = await browser.getContent("div[id='display_value']")
    expect(content).to.eq('Fizz')
  });

});