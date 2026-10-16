Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function AGachaComponent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AGachaComponent, __s1param0);
  AGachaComponent.prototype.show = function (__s5param0) {
    this._params = __s5param0;
    this.onShow();
  };
  return AGachaComponent;
}(require("gge-module:export_CastleItemRenderer").CastleItemRenderer);
exports.AGachaComponent = __s0local0;
