Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleResourcePoolData() {
    this._hasExtraGoods = false;
  }
  CastleResourcePoolData.prototype.parseIRC = function (__s5param0) {
    this.registerNewMovementAsOwner(null);
    var __s5local0 = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s5param0.G);
    this._resourceItem = __s5local0.getItemByIndexSave(0);
    this._hasExtraGoods = !!__s5param0.EG;
    if (this.resourceItem && this.hasExtraGoods) {
      this.resourceItem.amount = 1000;
    }
  };
  CastleResourcePoolData.prototype.registerNewMovementAsOwner = function (__s8param0) {
    this._ownerMovementVO = __s8param0;
    if (!this.ownerMovementVO) {
      this._resourceItem = null;
    }
  };
  CastleResourcePoolData.prototype.reset = function () {
    this._resourceItem = null;
    this._ownerMovementVO = null;
  };
  CastleResourcePoolData.prototype.getRelevantMovementTypeByResourceType = function (__s13param0) {
    switch (__s13param0) {
      case __dep_export_CollectableEnum.CollectableEnum.WOOD:
        return __dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_WOOD_CUTTER;
      case __dep_export_CollectableEnum.CollectableEnum.STONE:
        return __dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_STONE_CUTTER;
      case __dep_export_CollectableEnum.CollectableEnum.FOOD:
        return __dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_FARMER;
      case __dep_export_CollectableEnum.CollectableEnum.C1:
      default:
        return __dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_CITIZEN;
    }
  };
  CastleResourcePoolData.prototype.canMovementTypeCarryResourceType = function (__s16param0, __s16param1) {
    return (__s16param1 != __dep_export_CollectableEnum.CollectableEnum.WOOD || __s16param0 == __dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_WOOD_CUTTER) && (__s16param1 != __dep_export_CollectableEnum.CollectableEnum.STONE || __s16param0 == __dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_STONE_CUTTER) && (__s16param1 != __dep_export_CollectableEnum.CollectableEnum.FOOD || __s16param0 == __dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_FARMER) && (__s16param1 != __dep_export_CollectableEnum.CollectableEnum.C1 || __s16param0 == __dep_export_IsoObjectEnum.IsoObjectEnum.MOVEMENT_CITIZEN);
  };
  Object.defineProperty(CastleResourcePoolData.prototype, "resourceItem", {
    get: function () {
      return this._resourceItem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourcePoolData.prototype, "ownerMovementVO", {
    get: function () {
      return this._ownerMovementVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourcePoolData.prototype, "hasExtraGoods", {
    get: function () {
      return this._hasExtraGoods;
    },
    enumerable: true,
    configurable: true
  });
  return CastleResourcePoolData;
}();
exports.CastleResourcePoolData = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
