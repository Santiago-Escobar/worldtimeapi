const chai = require('chai');
Feature('World Time API');
Scenario('Retrieve and Validate Timezones API', async ({I}) => {
    const timezones = await I.sendGetRequest('http://worldtimeapi.org/api/timezone');
    chai.expect(timezones.status).to.equal(200);
    chai.expect(Array.isArray(timezones.data)).to.equal(true);
    chai.expect(timezones.data).to.include("America/Santiago");
});

Scenario('Retrieve Bogota Timezone Information', async ({I}) => {
   const bogotaTimezone =  await I.sendGetRequest('http://worldtimeapi.org/api/timezone/America/Bogota');
   chai.expect(typeof(bogotaTimezone.data)).to.equal('object')
   chai.expect(bogotaTimezone.status).to.equal(200);
   chai.expect(bogotaTimezone.data.day_of_week).to.equal((new Date()).getDay())
});

Scenario('Get Error Message when inputing a typo inside the url', async({I}) => {
    const getError = await I.sendGetRequest('http://worldtimeapi.org/api/timezone/America/Bogotas');
    chai.expect(typeof(getError.data)).to.equal('object')
    chai.expect(getError.status).to.equal(404);
    chai.expect(getError.data.error).to.equal("unknown location")
});


