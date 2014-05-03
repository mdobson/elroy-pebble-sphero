var SpheroScout = require('zetta-sphero-driver');
var PebbleScout = require('zetta-pebble-driver');

module.exports = function(runtime) {
  runtime.scouts.push(SpheroScout);
  runtime.scouts.push(PebbleScout);
};
