var SpheroScout = require('../elroy-sphero-driver');
var PebbleScout = require('elroy-pebble-driver');

module.exports = function(runtime) {
  runtime.scouts.push(SpheroScout);
  runtime.scouts.push(PebbleScout);
};
