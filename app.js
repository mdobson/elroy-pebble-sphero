var PebbleSpheroApp = module.exports = function(){
  this.name = 'pebblesphero';
}

var cb = function() {};

PebbleSpheroApp.prototype.init = function(elroy){
  elroy.observe('type="sphero"').subscribe(function(sphero) {
    elroy.expose(sphero);
    elroy.observe('type="smartwatch"').subscribe(function(pebble) {
      elroy.expose(pebble);
      setInterval(function(){
        sphero.call('random-color', cb);
      }, 3000);
      pebble.on('top-button', function(){
        sphero.call('right', cb);
      });

      pebble.on('bottom-button', function() {
        sphero.call('left', cb);
      });

      pebble.on('select-button', function() {
        sphero.call('move', 5, cb);
      });
    });
  });
};
