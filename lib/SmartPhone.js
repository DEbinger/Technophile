const extend = require('./Helper');
const Phone = require('./Phone');
const Tablet = require('./Tablet');
const GameConsole = require('./GameConsole');
const WebBrowser = require('./WebBrowser');


function SmartPhone(phoneNumber) {
  Phone.call(this, phoneNumber);
  GameConsole.call(this, 'Smart Phone');
}

extend(SmartPhone, Phone);
extend(SmartPhone, Tablet);
extend(SmartPhone, GameConsole);
extend(SmartPhone, WebBrowser);

module.exports = SmartPhone;