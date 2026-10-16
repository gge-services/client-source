Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_exact_d080a25fe68bd590 = require("gge-module:exact_d080a25fe68bd590");
var __s0local0 = function () {
  function BlitMask(__s3param0, __s3param1 = 0, __s3param2 = 0, __s3param3 = 100, __s3param4 = 100, __s3param5 = false, __s3param6 = false, __s3param7 = 0, __s3param8 = false) {
    this.logger = __dep_export_LoggerConfigurator.getLogger(__dep_exact_d080a25fe68bd590.CREATEJS_UTILITIES_LOGGER);
    this.autoUpdate = false;
    this.bitmapMode = false;
    this.fillColor = 0;
    this.width = 0;
    this.height = 0;
    this.rotation = 0;
    this.scaleX = 0;
    this.scaleY = 0;
    this.scrollX = 0;
    this.smoothing = false;
    this.wrap = false;
    this.wrapOffsetX = 0;
    this.wrapOffsetY = 0;
    this.x = 0;
    this.y = 0;
    this.logger.debug("BlitMask not implemented yet");
  }
  BlitMask.prototype.disableBitmapMode = function (__s5param0 = null) {
    this.logger.debug("BlitMask.disableBitmapMode not implemented yet");
  };
  BlitMask.prototype.dispose = function () {
    this.logger.debug("BlitMask.dispose not implemented yet");
  };
  BlitMask.prototype.enableBitmapMode = function (__s9param0 = null) {
    this.logger.debug("BlitMask.enableBitmapMode not implemented yet");
  };
  BlitMask.prototype.normalizePosition = function () {
    this.logger.debug("BlitMask.normalizePosition not implemented yet");
  };
  BlitMask.prototype.update = function (__s13param0 = null, __s13param1 = false) {
    this.logger.debug("BlitMask.update not implemented yet");
  };
  return BlitMask;
}();
exports.BlitMask = __s0local0;
