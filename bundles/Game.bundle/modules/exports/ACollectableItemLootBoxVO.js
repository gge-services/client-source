Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ACollectableItemLootBoxVO(__s3param0 = -1, __s3param1 = 0) {
    var __s3local0 = this;
    __s3local0._lootBoxID = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param1) || this)._lootBoxID = __s3param0;
    __s3local0._lootBoxVO = __dep_export_CastleModel.CastleModel.lootBoxData.xml.getLootBoxByID(__s3local0.lootBoxID);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACollectableItemLootBoxVO, __s1param0);
  ACollectableItemLootBoxVO.prototype.updateLootBoxVO = function (__s5param0 = -1, __s5param1 = 0) {
    this._lootBoxID = __s5param0;
    this.amount = __s5param1;
    this._lootBoxVO = __dep_export_CastleModel.CastleModel.lootBoxData.xml.getLootBoxByID(this.lootBoxID);
  };
  ACollectableItemLootBoxVO.prototype.parseServerObject = function (__s7param0) {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s7param0, "Array")) {
      this._lootBoxID = __s7param0[0];
      this.amount = __s7param0[1];
    } else {
      this._lootBoxID = __s7param0;
      this.amount = 1;
    }
    this._lootBoxVO = __dep_export_CastleModel.CastleModel.lootBoxData.xml.getLootBoxByID(this.lootBoxID);
  };
  ACollectableItemLootBoxVO.prototype.getTooltipTextId = function () {
    return "mysteryBox_boxName_" + this.lootBoxVO.name + "_" + this.lootBoxVO.rarity;
  };
  ACollectableItemLootBoxVO.prototype.getDescriptionTextId = function () {
    return "mysteryBox_package_info_desc";
  };
  ACollectableItemLootBoxVO.prototype.parseXmlObject = function (__s15param0) {
    var __s15local0 = __s15param0.split("+");
    this.amount = __dep_exact_f855840627e6e145.int(__s15local0[1]);
    this._lootBoxID = __dep_exact_f855840627e6e145.int(__s15local0[0]);
    this._lootBoxVO = __dep_export_CastleModel.CastleModel.lootBoxData.xml.getLootBoxByID(this.lootBoxID);
  };
  Object.defineProperty(ACollectableItemLootBoxVO.prototype, "lootBoxID", {
    get: function () {
      return this._lootBoxID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemLootBoxVO.prototype, "lootBoxVO", {
    get: function () {
      return this._lootBoxVO;
    },
    enumerable: true,
    configurable: true
  });
  ACollectableItemLootBoxVO.prototype.clone = function () {
    var __s21local0 = __s1param0.prototype.clone.call(this);
    __s21local0._lootBoxVO = this.lootBoxVO;
    return __s21local0;
  };
  ACollectableItemLootBoxVO.SERVER_KEY = "LB";
  ACollectableItemLootBoxVO.XML_KEY = ["lootBox"];
  return ACollectableItemLootBoxVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.ACollectableItemLootBoxVO = __s0local0;
