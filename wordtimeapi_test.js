Feature('World Time API');
Scenario('Retrieve and Validate Timezones API', async ({I}) => {
    const timezones = await I.sendGetRequest('http://worldtimeapi.org/api/timezone');
    I.expect(timezones.status).to.eql(200);
    I.expect(Array.isArray(timezones.body)).to.eql(true);
    I.expect(timezones.body).to.include("America/Santiago");
});

Scenario('Retrieve Bogota Timezone Information', async ({I}) => {
   const bogotaTimezone =  await I.sendGetRequest('http://worldtimeapi.org/api/timezone/America/Bogota');
   I.expect(typeof(bogotaTimezone.body)).to.eql('object')
   I.expect(bogotaTimezone.status).to.eql(200);
   I.expect(bogotaTimezone.body.day_of_week).to.eql((new Date()).getDay())
});

Scenario('Get Error Message when inputing a typo inside the url', async({I}) => {
    const getError = await I.sendGetRequest('http://worldtimeapi.org/api/timezone/America/Bogotá');
    I.expect(typeof(getError.body)).to.eql('object')
    I.expect(getError.status).to.eql(404);
    I.expect(getError.body.error).to.eql("unknown location")
});


