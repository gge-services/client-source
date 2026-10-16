Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleKingdomVillageInfoVO() {}
  CastleKingdomVillageInfoVO.prototype.parseParamObject = function (__s5param0) {
    if (__s5param0[0][0] == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ISLE_RESOURCE) {
      this._villageVO = new __dep_export_ResourceIsleMapobjectVO.ResourceIsleMapobjectVO();
    } else {
      this._villageVO = new __dep_export_VillageMapobjectVO.VillageMapobjectVO();
    }
    this._villageVO.parseAreaInfo(__s5param0[0]);
    this._unitInventory = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    this._unitInventory.fillFromWodAmountArray(__s5param0[1]);
  };
  Object.defineProperty(CastleKingdomVillageInfoVO.prototype, "villageMapObjectVO", {
    get: function () {
      return this._villageVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVillageInfoVO.prototype, "unitInventory", {
    get: function () {
      return this._unitInventory;
    },
    enumerable: true,
    configurable: true
  });
  return CastleKingdomVillageInfoVO;
}();
exports.CastleKingdomVillageInfoVO = __s0local0;
var __dep_export_ResourceIsleMapobjectVO = require("gge-module:export_ResourceIsleMapobjectVO");
var __dep_export_VillageMapobjectVO = require("gge-module:export_VillageMapobjectVO");
var __dep_export_UnitInventoryDictionary = require("gge-module:export_UnitInventoryDictionary");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
