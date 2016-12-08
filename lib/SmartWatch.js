const extend = require('./Helper');
const Watch = require('./Watch');
const Tablet = require('./Tablet');

function SmartWatch() {
  Watch.call(this, 'Smart Watch');

}

extend(SmartWatch, Watch);
extend(SmartWatch, Tablet);

module.exports = SmartWatch;