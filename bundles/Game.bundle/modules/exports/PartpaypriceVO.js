Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function PartpaypriceVO() {
    this._id = -1;
  }
  PartpaypriceVO.prototype.fillFromParamXml = function (__s5param0) {
    this._id = parseInt(__s5param0.partPayPriceID || "");
    this._costsList = __dep_export_CollectableManager.CollectableManager.parser.x2cRewards.createList(__s5param0);
  };
  Object.defineProperty(PartpaypriceVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PartpaypriceVO.prototype, "costsList", {
    get: function () {
      return this._costsList;
    },
    enumerable: true,
    configurable: true
  });
  return PartpaypriceVO;
}();
exports.PartpaypriceVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
