var PebbleSpheroApp = module.exports = function(){
  this.name = 'pebblesphero';
}

PebbleSpheroApp.prototype.init = function(elroy){
  elroy.observe('type="Sphero"').subscribe(function(sphero) {
    elroy.expose(sphero);
    elroy.observe('type="smartwatch"').subscribe(function(pebble) {
      elroy.expose(pebble);
      pebble.on('top-button', function(){
        sphero.call('move', 'forward', 2);
      });

      pebble.on('bottom-button', function() {
        sphero.call('move', 'backward', 2);
      });
    });
  });
};
