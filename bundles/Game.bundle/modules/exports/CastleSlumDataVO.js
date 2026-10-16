Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleSlumDataVO() {
    this._payedGoods = new __dep_export_CollectableList.CollectableList();
    this._level = 0;
    this._packages = [];
    this._kID = 0;
  }
  CastleSlumDataVO.prototype.fillFromParamXML = function (__s5param0) {
    this._kID = parseInt(__s5param0.kID || "");
    this._level = __dep_exact_f855840627e6e145.int(__s5param0.slumLevel || "");
    this._partpaypriceVO = __dep_export_CastleModel.CastleModel.partPayPricesData.getVOById(parseInt(__s5param0.partPayPriceID || ""));
    for (var __s5local0 = 0, __s5local1 = (__s5param0.packageIDs || "").toString().split("+"); __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 != null && __s5local2 != "") {
        this._packages.push(__dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(parseInt(__s5local2)));
      }
    }
  };
  Object.defineProperty(CastleSlumDataVO.prototype, "partpaypriceVO", {
    get: function () {
      return this._partpaypriceVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSlumDataVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSlumDataVO.prototype, "packages", {
    get: function () {
      return this._packages;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSlumDataVO.prototype, "kID", {
    get: function () {
      return this._kID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSlumDataVO.prototype, "payedGoods", {
    get: function () {
      return this._payedGoods;
    },
    set: function (__s20param0) {
      this._payedGoods = __s20param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSlumDataVO;
}();
exports.CastleSlumDataVO = __s0local0;
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
