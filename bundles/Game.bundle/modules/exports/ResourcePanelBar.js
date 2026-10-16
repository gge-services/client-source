Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ResourcePanelBar(__s3param0) {
    this._targetWidth = 0;
    this._currentValue = 0;
    this._disp = __s3param0;
    this._disp.mouseChildren = false;
    this._currentValue = 0;
  }
  ResourcePanelBar.prototype.dispose = function () {
    this._disp = null;
  };
  ResourcePanelBar.prototype.setWidth = function (__s7param0) {
    this._targetWidth = __s7param0;
    this._disp.mc_bar.width = __s7param0;
    this.setValue(this._currentValue);
  };
  ResourcePanelBar.prototype.setValue = function (__s9param0) {
    this._currentValue = __s9param0;
    var __s9local0 = __dep_exact_f855840627e6e145.int(__s9param0 * this._targetWidth - this._targetWidth * 0.5);
    this.disp.mc_arrow.x = __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s9local0, this._targetWidth * -0.5, this._targetWidth * 0.5);
  };
  Object.defineProperty(ResourcePanelBar.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  return ResourcePanelBar;
}();
exports.ResourcePanelBar = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
