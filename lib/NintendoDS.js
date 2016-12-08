const extend = require('./Helper');
const GameConsole = require('./GameConsole');
const WebBrowser = require('./WebBrowser');

function NintendoDS() {
  GameConsole.call(this, 'Nintendo DS');
  //WebBrowser.call(this);
}

extend(NintendoDS, WebBrowser);
extend(NintendoDS, GameConsole);

module.exports = NintendoDS;