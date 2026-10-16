Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __s0local0 = function () {
  function Pin(__s3param0) {
    this.logger = __dep_export_LoggerConfigurator.getLogger(Pin.PIN_LOGGER);
    this._source = __s3param0;
  }
  Object.defineProperty(Pin.prototype, "source", {
    get: function () {
      return this._source;
    },
    enumerable: true,
    configurable: true
  });
  Pin.prototype.configure = function () {
    this.logger.debug("Pin.config is not implemented");
  };
  Pin.prototype.dispose = function () {
    this.logger.debug("Pin.dispose is not implemented");
  };
  Pin.prototype.execute = function () {
    var __s11local0 = [];
    for (var __s11local1 = 0; __s11local1 < arguments.length; __s11local1++) {
      __s11local0[__s11local1] = arguments[__s11local1];
    }
    this.logger.debug("Pin.execute is not implemented");
  };
  Pin.PIN_LOGGER = "pinLogger";
  return Pin;
}();
exports.Pin = __s0local0;
