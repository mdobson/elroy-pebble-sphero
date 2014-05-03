var PebbleSpheroApp = module.exports = function(){
  this.name = 'hello';
}

PebbleSpheroApp.prototype.init = function(elroy){
  elroy.observe('type="sphero"')
  .zip(elroy.observe('type="smartwatch"'))
  .first()
  .subscribe(function(devices) {
    var sphero = devices[0];
    var pebble = devices[1];
    
    setInterval(function(){
      sphero.call('random-color');
    }, 3000);

    pebble.on('top-button', function(){
      sphero.call('right');
    });

    pebble.on('bottom-button', function() {
      sphero.call('left');
    });

    pebble.on('select-button', function() {
      sphero.call('move', 5);
    });

    elroy.expose(pebble);
    elroy.expose(sphero);
  });
};
