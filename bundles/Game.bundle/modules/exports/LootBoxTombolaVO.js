Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function LootBoxTombolaVO() {
    this._ID = 0;
    this._lootBoxTombolaID = 0;
    this._rewardCategory = "";
    this._rewardIDs = [];
    this._shares = 0;
  }
  Object.defineProperty(LootBoxTombolaVO.prototype, "ID", {
    get: function () {
      return this._ID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxTombolaVO.prototype, "lootBoxTombolaID", {
    get: function () {
      return this._lootBoxTombolaID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxTombolaVO.prototype, "rewardCategory", {
    get: function () {
      return this._rewardCategory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxTombolaVO.prototype, "rewardIDs", {
    get: function () {
      return this._rewardIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxTombolaVO.prototype, "shares", {
    get: function () {
      return this._shares;
    },
    enumerable: true,
    configurable: true
  });
  LootBoxTombolaVO.prototype.parseXML = function (__s15param0) {
    this._ID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("entryID", __s15param0, "0", true));
    var __s15local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("rewardCategory", __s15param0, 0);
    if (__s15local0 > 0) {
      switch (__s15local0) {
        case 1:
          this._rewardCategory = "Common";
          break;
        case 2:
          this._rewardCategory = "Rare";
          break;
        case 3:
          this._rewardCategory = "Epic";
          break;
        case 4:
          this._rewardCategory = "Legendary";
      }
    } else {
      this._rewardCategory = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rewardCategory", __s15param0, "0", true);
    }
    this._lootBoxTombolaID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("tombolaID", __s15param0, "0"));
    this._rewardIDs = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("rewardIDs", __s15param0);
    this._shares = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("shares", __s15param0, "0"));
  };
  return LootBoxTombolaVO;
}();
exports.LootBoxTombolaVO = __s0local0;
