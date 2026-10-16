Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstKingdom = require("gge-module:export_ClientConstKingdom");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BonusVO = require("gge-module:export_BonusVO");
var __s0local0 = function () {
  function PrivateResourceVillageInfoVO() {
    this._villageID = 0;
    this._type = 0;
    this._villageLevel = 0;
    this._kingdomID = 0;
    this._tokenCost = 0;
    this._tokenCostTotal = 0;
  }
  PrivateResourceVillageInfoVO.prototype.fillFromParamXML = function (__s5param0) {
    this._villageID = parseInt(__s5param0.villageID || "");
    this._typeString = __s5param0.type || "";
    this._villageLevel = parseInt(__s5param0.villageLevel || "");
    this._kingdomID = parseInt(__s5param0.kID || "");
    this._tokenCost = parseInt(__s5param0.costResourceVillageTokenLevel || "");
    this._tokenCostTotal = parseInt(__s5param0.costResourceVillageToken || "");
    this._type = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.WorldConst["VILLAGE_TYPE_" + this._typeString.toUpperCase()]);
    var __s5local0 = (__s5param0.effects || "").split("&");
    var __s5local1 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(parseInt(__s5local0[0]));
    this._bonus = new __dep_export_BonusVO.BonusVO().parseFromValueString(__s5local1, __s5local0[1]);
  };
  Object.defineProperty(PrivateResourceVillageInfoVO.prototype, "villageID", {
    get: function () {
      return this._villageID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateResourceVillageInfoVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateResourceVillageInfoVO.prototype, "typeString", {
    get: function () {
      if (this._type == __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_OIL) {
        return "oliveoil";
      } else {
        return __dep_export_ClientConstKingdom.ClientConstKingdom.getVillageTypeName(this._type);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateResourceVillageInfoVO.prototype, "villageLevel", {
    get: function () {
      return this._villageLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateResourceVillageInfoVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateResourceVillageInfoVO.prototype, "bonus", {
    get: function () {
      return this._bonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateResourceVillageInfoVO.prototype, "tokenCost", {
    get: function () {
      return this._tokenCost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateResourceVillageInfoVO.prototype, "tokenCostTotal", {
    get: function () {
      return this._tokenCostTotal;
    },
    enumerable: true,
    configurable: true
  });
  return PrivateResourceVillageInfoVO;
}();
exports.PrivateResourceVillageInfoVO = __s0local0;
