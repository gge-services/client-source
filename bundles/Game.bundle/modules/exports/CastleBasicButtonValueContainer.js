Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function () {
  function CastleBasicButtonValueContainer(__s3param0) {
    this.more = __s3param0.amountPicker.btn_right;
    this.less = __s3param0.amountPicker.btn_left;
    this.max = __s3param0.btn_all;
  }
  CastleBasicButtonValueContainer.prototype.getMoreButton = function () {
    return this.more;
  };
  CastleBasicButtonValueContainer.prototype.getLessButton = function () {
    return this.less;
  };
  CastleBasicButtonValueContainer.prototype.getMaxButton = function () {
    return this.max;
  };
  return CastleBasicButtonValueContainer;
}();
exports.CastleBasicButtonValueContainer = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IButtonsValueDisp");
