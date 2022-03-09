const saySomething = (req, res, next) => {
    const client = require('twilio')(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
    );

    client.messages
      .create({
        from: process.env.TWILIO_PHONE_NUMBER,
        //to: req.body.to,
        to: 6612297450, //4806928232,
        body: "TEST"
      })
      .then(() => {
        res.send(JSON.stringify({ success: true }));
      })
      .catch(err => {
        console.log(err);
        res.send(JSON.stringify({ success: false }));
      });
      /*
    res.status(200).json({
        body: 'Hello from the server!'
    });
    */
};

const test = (req, res, next) => {
    const client = require('twilio')(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
    );
    
    client.messages
      .create({
        from: process.env.TWILIO_PHONE_NUMBER,
        //to: req.body.to,
        to: 6612297450, //4806928232,
        body: req.body.fullname + " " + req.body.phone + " " + req.body.make + " " + req.body.model
      })
      .then(() => {
        res.send(JSON.stringify({ success: true }));
      })
      .catch(err => {
        console.log(err);
        res.send(JSON.stringify({ success: false }));
      });
};

module.exports.test = test;
module.exports.saySomething = saySomething;