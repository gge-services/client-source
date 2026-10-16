Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_C2SOpenLootBoxVO = require("gge-module:export_C2SOpenLootBoxVO");
var __dep_export_CastleLootBoxDataEvent = require("gge-module:export_CastleLootBoxDataEvent");
var __dep_export_ACollectableItemLootBoxVO = require("gge-module:export_ACollectableItemLootBoxVO");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleLootBoxDataXML = require("gge-module:export_CastleLootBoxDataXML");
var __dep_export_LootBoxTypeVO = require("gge-module:export_LootBoxTypeVO");
var __s0local0 = function (__s1param0) {
  function CastleLootboxData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._inventory = [];
    __s3local0.xml = new __dep_export_CastleLootBoxDataXML.CastleLootBoxDataXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLootboxData, __s1param0);
  CastleLootboxData.prototype.reset = function () {
    this._inventory = [];
    this.xml.resetLootBoxTypeKeyProgress();
  };
  CastleLootboxData.prototype.parse_GLS = function (__s7param0) {
    if (__s7param0) {
      this._inventory = [];
      for (var __s7local0 = 0, __s7local1 = __s7param0.ALL; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        this._inventory.push(new __dep_export_ACollectableItemLootBoxVO.ACollectableItemLootBoxVO(__s7local2.ID, __s7local2.AMT));
      }
      for (var __s7local3 = 0, __s7local4 = __s7param0.KEY; __s7local3 < __s7local4.length; __s7local3++) {
        var __s7local5 = __s7local4[__s7local3];
        this.setKeyProgress(__s7local5.ID, __s7local5.AMT);
      }
      this._inventory.sort(this.sortLootBoxesBySortOrder);
      this.dispatchEvent(new __dep_export_CastleLootBoxDataEvent.CastleLootBoxDataEvent(__dep_export_CastleLootBoxDataEvent.CastleLootBoxDataEvent.INVENTORY_UPDATED));
    }
  };
  CastleLootboxData.prototype.setKeyProgress = function (__s14param0, __s14param1) {
    this.xml.getLootBoxTypeByID(__s14param0).keyProgress = __s14param1;
  };
  CastleLootboxData.prototype.sortLootBoxesBySortOrder = function (__s16param0, __s16param1) {
    return (__s16param0 && __s16param0.lootBoxVO && __s16param0.lootBoxVO.sortOrder ? __s16param0.lootBoxVO.sortOrder : 0) - (__s16param1 && __s16param1.lootBoxVO && __s16param1.lootBoxVO.sortOrder ? __s16param1.lootBoxVO.sortOrder : 0);
  };
  CastleLootboxData.prototype.openLootBox = function (__s18param0, __s18param1, __s18param2) {
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SOpenLootBoxVO.C2SOpenLootBoxVO(__s18param0, __s18param1, __s18param2));
  };
  CastleLootboxData.prototype.parse_DUMMY = function (__s20param0) {
    this._inventory.push(new __dep_export_ACollectableItemLootBoxVO.ACollectableItemLootBoxVO(1, 20));
    this._inventory.push(new __dep_export_ACollectableItemLootBoxVO.ACollectableItemLootBoxVO(5, 21));
    this._inventory.push(new __dep_export_ACollectableItemLootBoxVO.ACollectableItemLootBoxVO(9, 22));
    this._inventory.push(new __dep_export_ACollectableItemLootBoxVO.ACollectableItemLootBoxVO(13, 23));
    this._inventory.push(new __dep_export_ACollectableItemLootBoxVO.ACollectableItemLootBoxVO(14, 24));
    this._inventory.push(new __dep_export_ACollectableItemLootBoxVO.ACollectableItemLootBoxVO(15, 25));
    this._inventory.push(new __dep_export_ACollectableItemLootBoxVO.ACollectableItemLootBoxVO(16, 27));
    this._inventory.sort(this.sortLootBoxesBySortOrder);
    var __s20local0 = "";
    for (var __s20local1 = 0; __s20local1 < this._inventory.length; __s20local1++) {
      __s20local0 += this._inventory[__s20local1].lootBoxVO.sortOrder + ", ";
    }
    console.log(__s20local0);
    this.dispatchEvent(new __dep_export_CastleLootBoxDataEvent.CastleLootBoxDataEvent(__dep_export_CastleLootBoxDataEvent.CastleLootBoxDataEvent.INVENTORY_UPDATED));
  };
  CastleLootboxData.prototype.allLootBoxes = function () {
    return this._inventory;
  };
  CastleLootboxData.prototype.allLootBoxAmount = function () {
    var __s26local0 = 0;
    for (var __s26local1 = 0; __s26local1 < this._inventory.length; __s26local1++) {
      __s26local0 += this._inventory[__s26local1].amount;
    }
    return __s26local0;
  };
  CastleLootboxData.prototype.getLootBoxesForCurrentType = function (__s30param0, __s30param1) {
    var __s30local0;
    var __s30local1 = [];
    for (var __s30local2 = 0; __s30local2 < this._inventory.length; __s30local2++) {
      if ((__s30local0 = this._inventory[__s30local2]).lootBoxVO.name == __s30param0 && __s30local0.lootBoxVO.rarity == __s30param1) {
        __s30local1.push(__s30local0);
      }
    }
    return __s30local1;
  };
  CastleLootboxData.prototype.getMysteryKeyProgress = function () {
    return this.xml.getLootBoxTypeByID(__dep_export_LootBoxTypeVO.LootBoxTypeVO.LOOT_BOX_TYPE_MYSTERY_BOX).keyProgress;
  };
  CastleLootboxData.prototype.getMysteryKeyProgressMax = function () {
    return this.xml.getLootBoxTypeByID(__dep_export_LootBoxTypeVO.LootBoxTypeVO.LOOT_BOX_TYPE_MYSTERY_BOX).lootBoxKeyPayoutThreshold;
  };
  return CastleLootboxData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleLootboxData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
