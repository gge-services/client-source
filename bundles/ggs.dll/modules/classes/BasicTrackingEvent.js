Object.defineProperty(exports, "__esModule", {
  value: true
});
require("gge-module:export_LoggerConfigurator").getLogger("Tracking.BasicTrackingEvent");
var __s0local0 = function () {
  function BasicTrackingEvent(__s3param0) {
    this.referrer = __s3param0;
  }
  BasicTrackingEvent.prototype.getVars = function () {
    throw new Error("TrackingEvent.getVars must be implemented by concrete classes");
  };
  return BasicTrackingEvent;
}();
exports.BasicTrackingEvent = __s0local0;
