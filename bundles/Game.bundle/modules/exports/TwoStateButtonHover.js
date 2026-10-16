Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function TwoStateButtonHover(__s3param0 = null, __s3param1 = true) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
    __s3local0._disp.mouse_over.visible = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TwoStateButtonHover, __s1param0);
  TwoStateButtonHover.prototype.onRollOut = function (__s5param0) {
    this._disp.mouse_over.visible = false;
  };
  TwoStateButtonHover.prototype.selected = function () {
    __s1param0.prototype.selected.call(this);
  };
  TwoStateButtonHover.prototype.deselected = function () {
    __s1param0.prototype.deselected.call(this);
    this._disp.mouse_over.visible = false;
  };
  TwoStateButtonHover.prototype.onRollOver = function (__s11param0) {
    this._disp.mouse_over.visible = true;
  };
  return TwoStateButtonHover;
}(require("gge-module:exact_84d43d9c404bd4d8").TwoStateButton);
exports.TwoStateButtonHover = __s0local0;
