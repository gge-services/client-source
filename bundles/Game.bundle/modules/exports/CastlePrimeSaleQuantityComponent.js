Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastlePrimeSaleQuantityComponent(__s3param0) {
    this._quantityDisp = __s3param0;
    this._itxt_quantity = this.textFieldManager.registerTextField(__s3param0.txt_quantity, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
  }
  CastlePrimeSaleQuantityComponent.prototype.update = function (__s5param0) {
    this._itxt_quantity.textContentVO.numberValue = __s5param0.reward.amount;
    this._quantityDisp.visible = __s5param0.reward.amount > 1;
  };
  Object.defineProperty(CastlePrimeSaleQuantityComponent.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastlePrimeSaleQuantityComponent;
}();
exports.CastlePrimeSaleQuantityComponent = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
