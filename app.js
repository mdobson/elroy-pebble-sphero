var PebbleSpheroApp = module.exports = function(){
  this.name = 'pebblesphero';
}

PebbleSpheroApp.prototype.init = function(elroy){
  elroy.observe('type="Sphero"').subscribe(function(sphero) {
    elroy.expose(sphero);
    elroy.observe('type="smartwatch"').subscribe(function(pebble) {
      elroy.expose(pebble);
      pebble.on('top-button', function(){
        sphero.call('right');
      });

      pebble.on('bottom-button', function() {
        sphero.call('left');
      });

      pebble.on('select-button', function() {
        sphero.call('move', 5);
      });
    });
  });
};
