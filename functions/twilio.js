const twilio = require('twilio');

const accountSid = 'AC8edc2a80fbedcd8d439ecc803edc2189';
const authToken = 'ef2ce6936960370f3c4ede62d7544ce3';

module.exports = new twilio(accountSid, authToken);