Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __s0local0 = function () {
  function PrebuiltCastleItemVO() {
    this._id = 0;
    this._minLevel = 0;
    this._shownDiscount = 0;
    this._isMainCastleCopy = false;
  }
  PrebuiltCastleItemVO.prototype.parseXML = function (__s5param0) {
    this._id = parseInt(__s5param0.preBuiltCastleID || "");
    this._spaceIDs = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("spaceIDs", __s5param0);
    this._minLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("minLevel", __s5param0, "0"));
    this._shownDiscount = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("shownDiscount", __s5param0, "0"));
    this._costs = PrebuiltCastleItemVO.parseCosts(__s5param0);
    this._isMainCastleCopy = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("isMainCastleCopy", __s5param0, "0")) == 1;
  };
  PrebuiltCastleItemVO.parseCosts = function (__s7param0) {
    var __s7local0 = new __dep_export_CollectableList.CollectableList();
    for (var __s7local1 = 0, __s7local2 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_GOODS; __s7local1 < __s7local2.length; __s7local1++) {
      var __s7local3 = __s7local2[__s7local1];
      if (__s7local3 !== undefined) {
        var __s7local4 = "cost" + __dep_export_CollectableHelper.CollectableHelper.getGoodsKeySuffix(__s7local3);
        var __s7local5 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault(__s7local4, __s7param0, "0"));
        if (__s7local5) {
          __s7local0.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__s7local3, __s7local5));
        }
      }
    }
    return __s7local0;
  };
  Object.defineProperty(PrebuiltCastleItemVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrebuiltCastleItemVO.prototype, "spaceIds", {
    get: function () {
      return this._spaceIDs;
    },
    enumerable: true,
    configurable: true
  });
  PrebuiltCastleItemVO.prototype.isFree = function () {
    return !this._costs.length;
  };
  PrebuiltCastleItemVO.prototype.isPremium = function () {
    return this._costs.length == 1 && !!this.costC2;
  };
  Object.defineProperty(PrebuiltCastleItemVO.prototype, "costC2", {
    get: function () {
      return this._costs.getItemByType(__dep_export_CollectableEnum.CollectableEnum.C2);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrebuiltCastleItemVO.prototype, "primaryCosts", {
    get: function () {
      if (this.isPremium()) {
        return this._costs;
      } else {
        return this._costs.getFilteredListWithoutType(__dep_export_CollectableEnum.CollectableEnum.C2);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrebuiltCastleItemVO.prototype, "minLevel", {
    get: function () {
      return this._minLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrebuiltCastleItemVO.prototype, "shownDiscount", {
    get: function () {
      return this._shownDiscount;
    },
    enumerable: true,
    configurable: true
  });
  PrebuiltCastleItemVO.prototype.setBuildings = function (__s31param0) {
    this._buildings = __s31param0;
  };
  Object.defineProperty(PrebuiltCastleItemVO.prototype, "buildings", {
    get: function () {
      if (this._isMainCastleCopy) {
        return __dep_export_CastleModel.CastleModel.prebuiltCastleData.castleTransportationBuildings;
      } else {
        return this._buildings;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrebuiltCastleItemVO.prototype, "isMainCastleCopy", {
    get: function () {
      return this._isMainCastleCopy;
    },
    enumerable: true,
    configurable: true
  });
  PrebuiltCastleItemVO.prototype.textIdName = function () {
    if (PrebuiltCastleItemVO.SPACES_WITH_CASTLES.indexOf(this._spaceIDs[0]) != -1) {
      return "Castle";
    } else {
      return "Camp";
    }
  };
  PrebuiltCastleItemVO.__initialize_static_members = function () {
    PrebuiltCastleItemVO.SPACES_WITH_CASTLES = [__dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID, __dep_exact_26a421b704832cff_1.WorldDessert.KINGDOM_ID, __dep_exact_26a421b704832cff_2.WorldIce.KINGDOM_ID, __dep_exact_26a421b704832cff_4.WorldVolcano.KINGDOM_ID, __dep_exact_26a421b704832cff_3.WorldIsland.KINGDOM_ID];
  };
  return PrebuiltCastleItemVO;
}();
exports.PrebuiltCastleItemVO = __s0local0;
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
__s0local0.__initialize_static_members();
