Feature('Search and Screen shot');

Scenario('Search Devsavant & Click I\'m Feeling lucky button', ({I}) => {
    I.amOnPage('https://www.google.com');
    I.waitForElement('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input');
    I.fillField('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input','Devsavant');
    I.click('.RNmpXc');

    I.waitForElement('#container-nav');
    I.wait(2);
    I.saveScreenshot('Devsavant-page.png');
})