Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CollectableItemBeefVO = require("gge-module:export_CollectableItemBeefVO");
var __dep_export_CollectableItemMeadVO = require("gge-module:export_CollectableItemMeadVO");
var __s0local0 = function () {
  function CastleResourcesVO() {
    this._castleID = 0;
    this._kingdomID = 0;
    this._resources = new __dep_export_CollectableList.CollectableList();
  }
  CastleResourcesVO.prototype.parseGRC = function (__s5param0) {
    this._castleID = __dep_exact_f855840627e6e145.int(__s5param0.AID);
    this._kingdomID = __dep_exact_f855840627e6e145.int(__s5param0.KID);
    this._resources = __dep_export_CollectableManager.CollectableManager.parser.createGoodsListSave(new __dep_export_CollectableItemWoodVO.CollectableItemWoodVO(__s5param0.W), new __dep_export_CollectableItemStoneVO.CollectableItemStoneVO(__s5param0.S), new __dep_export_CollectableItemFoodVO.CollectableItemFoodVO(__s5param0.F), new __dep_export_CollectableItemCoalVO.CollectableItemCoalVO(__s5param0.C), new __dep_export_CollectableItemOilVO.CollectableItemOilVO(__s5param0.O), new __dep_export_CollectableItemGlassVO.CollectableItemGlassVO(__s5param0.G), new __dep_export_CollectableItemIronVO.CollectableItemIronVO(__s5param0.I), new __dep_export_CollectableItemAquamarineVO.CollectableItemAquamarineVO(__s5param0.A), new __dep_export_CollectableItemMeadVO.CollectableItemMeadVO(__s5param0.MEAD), new __dep_export_CollectableItemBeefVO.CollectableItemBeefVO(__s5param0.BEEF), new __dep_export_CollectableItemHoneyVO.CollectableItemHoneyVO(__s5param0.HONEY));
  };
  Object.defineProperty(CastleResourcesVO.prototype, "castleID", {
    get: function () {
      return this._castleID;
    },
    set: function (__s9param0) {
      this._castleID = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourcesVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    set: function (__s13param0) {
      this._kingdomID = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourcesVO.prototype, "resources", {
    get: function () {
      return this._resources;
    },
    set: function (__s17param0) {
      this._resources = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourcesVO.prototype, "resList", {
    get: function () {
      var __s19local0 = [];
      for (var __s19local1 = 0; __s19local1 < this._resources.list.length; __s19local1++) {
        __s19local0.push(this._resources.list[__s19local1].amount);
      }
      return __s19local0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleResourcesVO;
}();
exports.CastleResourcesVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableItemAquamarineVO = require("gge-module:export_CollectableItemAquamarineVO");
var __dep_export_CollectableItemCoalVO = require("gge-module:export_CollectableItemCoalVO");
var __dep_export_CollectableItemFoodVO = require("gge-module:export_CollectableItemFoodVO");
var __dep_export_CollectableItemGlassVO = require("gge-module:export_CollectableItemGlassVO");
var __dep_export_CollectableItemIronVO = require("gge-module:export_CollectableItemIronVO");
var __dep_export_CollectableItemOilVO = require("gge-module:export_CollectableItemOilVO");
var __dep_export_CollectableItemStoneVO = require("gge-module:export_CollectableItemStoneVO");
var __dep_export_CollectableItemWoodVO = require("gge-module:export_CollectableItemWoodVO");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableItemHoneyVO = require("gge-module:export_CollectableItemHoneyVO");
