Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_5 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_6 = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function (__s1param0) {
  function KingdomEnum(__s3param0, __s3param1, __s3param2, __s3param3 = 0, __s3param4 = 0, __s3param5 = 0) {
    var __s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this;
    __s3local0._id = 0;
    __s3local0._symbolColor = 0;
    __s3local0._symbolBgColor = 0;
    __s3local0._mapBackgroundColor = 0;
    __s3local0._xmlName = __s3param1;
    __s3local0._id = __s3param2;
    __s3local0._symbolColor = __s3param3;
    __s3local0._symbolBgColor = __s3param4;
    __s3local0._mapBackgroundColor = __s3param5;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(KingdomEnum, __s1param0);
  KingdomEnum.getTypeById = function (__s5param0) {
    return this.getByProperty(KingdomEnum, "id", __s5param0, KingdomEnum.CLASSIC);
  };
  KingdomEnum.getTypeByXMLName = function (__s7param0) {
    return this.getByProperty(KingdomEnum, "xmlName", __s7param0, KingdomEnum.CLASSIC);
  };
  KingdomEnum.getNPCOwnerList = function () {
    return [KingdomEnum.CLASSIC, KingdomEnum.DESSERT, KingdomEnum.ICE, KingdomEnum.VOLCANO, KingdomEnum.FACTION, KingdomEnum.ISLAND];
  };
  Object.defineProperty(KingdomEnum.prototype, "isForeignKingdom", {
    get: function () {
      switch (this) {
        case KingdomEnum.CLASSIC:
        case KingdomEnum.ICE:
        case KingdomEnum.DESSERT:
        case KingdomEnum.VOLCANO:
        case KingdomEnum.ISLAND:
          return true;
        default:
          return false;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomEnum.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomEnum.prototype, "xmlName", {
    get: function () {
      return this._xmlName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomEnum.prototype, "symbolColor", {
    get: function () {
      return this._symbolColor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomEnum.prototype, "symbolBgColor", {
    get: function () {
      return this._symbolBgColor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomEnum.prototype, "mapBackgroundColor", {
    get: function () {
      return this._mapBackgroundColor;
    },
    enumerable: true,
    configurable: true
  });
  KingdomEnum.__initialize_static_members = function () {
    KingdomEnum.CLASSIC = new KingdomEnum("classic", "Classic", __dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID, 2957851, 8295963, 8494642);
    KingdomEnum.DESSERT = new KingdomEnum("desert", "Dessert", __dep_exact_26a421b704832cff_3.WorldDessert.KINGDOM_ID, 16366401, 11010048, 16043657);
    KingdomEnum.ICE = new KingdomEnum("ice", "Icecream", __dep_exact_26a421b704832cff_4.WorldIce.KINGDOM_ID, 15921906, 18298, 15921906);
    KingdomEnum.VOLCANO = new KingdomEnum("volcano", "Volcano", __dep_exact_26a421b704832cff_6.WorldVolcano.KINGDOM_ID, 14835968, 2302755, 5457207);
    KingdomEnum.ISLAND = new KingdomEnum("island", "Eiland", __dep_exact_26a421b704832cff_5.WorldIsland.KINGDOM_ID, 16777215, 760717, 758204);
    KingdomEnum.FACTION = new KingdomEnum("faction", "Faction", __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID, 1973790, 8353558, 8356408);
    KingdomEnum.SEAQUEEN = new KingdomEnum("seaqueen", "Seaqueen", __dep_exact_26a421b704832cff_1.TreasureMapsConst.MAP_ID_SEAQUEEN_EASY, 990246, 15132638);
    KingdomEnum.THORNKING = new KingdomEnum("thornking", "Thornking", __dep_exact_26a421b704832cff_1.TreasureMapsConst.MAP_ID_THORNKING_EASY, 2498586, 7704832);
    KingdomEnum.UNDERWORLD = new KingdomEnum("underworld", "Underworld", __dep_exact_26a421b704832cff_1.TreasureMapsConst.MAP_ID_UNDERWORLD_EASY, 1340548, 1450019);
    KingdomEnum.ALLIANCE_BATTLE_GROUND_MAYA = new KingdomEnum("maya", "Maya", 1001, 16494651, 1791030);
  };
  return KingdomEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.KingdomEnum = __s0local0;
__s0local0.__initialize_static_members();
