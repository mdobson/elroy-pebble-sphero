var PebbleSpheroApp = module.exports = function(){
  this.name = 'pebblesphero';
}

var cb = function() {};

PebbleSpheroApp.prototype.init = function(elroy){
  elroy.observe('type="sphero"')
  .zip(elroy.observer('type="smartwatch"'))
  .subscribe(function(devices) {
    var sphero = devices[0];
    var pebble = devices[1];
    
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

    elroy.expose(pebble);
    elroy.expose(sphero);
  });
};
