//
// Inherit from Event Emitter
//
AppProto = function () {
  EventEmitter.call(this);
};

Util.inherits(AppProto, EventEmitter);

//
// Init
//
APP = new AppProto();

//
// Apply structure
//
_.extend(APP,
  {
    helpers: {},
    collections: {},
    modules: {
      main: {}
    }
  }
);