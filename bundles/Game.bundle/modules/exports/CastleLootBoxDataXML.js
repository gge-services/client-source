Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_LootBoxKeyTombolaVO = require("gge-module:export_LootBoxKeyTombolaVO");
var __dep_export_LootBoxTombolaVO = require("gge-module:export_LootBoxTombolaVO");
var __dep_export_LootBoxTypeVO = require("gge-module:export_LootBoxTypeVO");
var __dep_export_LootBoxVO = require("gge-module:export_LootBoxVO");
var __s0local0 = function (__s1param0) {
  function CastleLootBoxDataXML(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._lootBoxes = new Map();
    __s3local0._lootBoxTypes = new Map();
    __s3local0._lootBoxTombolas = new Map();
    __s3local0._lootBoxKeyTombolas = new Map();
    __s3local0.parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLootBoxDataXML, __s1param0);
  CastleLootBoxDataXML.prototype.parseXML = function (__s5param0) {
    for (var __s5local0 = 0, __s5local1 = __s5param0.lootBoxTypes; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 !== undefined) {
        var __s5local3 = new __dep_export_LootBoxTypeVO.LootBoxTypeVO();
        __s5local3.parseXML(__s5local2);
        this._lootBoxTypes.set(__s5local3.lootBoxTypeID, __s5local3);
      }
    }
    for (var __s5local4 = 0, __s5local5 = __s5param0.lootBoxes; __s5local4 < __s5local5.length; __s5local4++) {
      var __s5local6 = __s5local5[__s5local4];
      if (__s5local6 !== undefined) {
        var __s5local7 = new __dep_export_LootBoxVO.LootBoxVO();
        __s5local7.parseXML(__s5local6);
        this._lootBoxes.set(__s5local7.lootBoxID, __s5local7);
      }
    }
    for (var __s5local8 = 0, __s5local9 = __s5param0.lootBoxTombolas; __s5local8 < __s5local9.length; __s5local8++) {
      var __s5local10 = __s5local9[__s5local8];
      if (__s5local10 !== undefined) {
        var __s5local11 = new __dep_export_LootBoxTombolaVO.LootBoxTombolaVO();
        __s5local11.parseXML(__s5local10);
        this._lootBoxTombolas.set(__s5local11.ID, __s5local11);
      }
    }
    for (var __s5local12 = 0, __s5local13 = __s5param0.lootBoxKeyTombolas; __s5local12 < __s5local13.length; __s5local12++) {
      var __s5local14 = __s5local13[__s5local12];
      if (__s5local14 !== undefined) {
        var __s5local15 = new __dep_export_LootBoxKeyTombolaVO.LootBoxKeyTombolaVO();
        __s5local15.parseXML(__s5local14);
        this._lootBoxKeyTombolas.set(__s5local15.ID, __s5local15);
      }
    }
  };
  CastleLootBoxDataXML.prototype.getLootBoxByID = function (__s19param0) {
    return this._lootBoxes.get(__s19param0);
  };
  CastleLootBoxDataXML.prototype.getLootBoxTombolasByTombolaID = function (__s21param0) {
    var __s21local0 = [];
    this._lootBoxTombolas.forEach(function (__s23param0) {
      if (__s23param0.lootBoxTombolaID == __s21param0) {
        __s21local0.push(__s23param0);
      }
    });
    return __s21local0;
  };
  CastleLootBoxDataXML.prototype.getLootBoxKeyTombolasByKeyTombolaID = function (__s26param0) {
    var __s26local0 = [];
    this._lootBoxKeyTombolas.forEach(function (__s28param0) {
      if (__s28param0.lootBoxKeyTombolaID == __s26param0) {
        __s26local0.push(__s28param0);
      }
    });
    return __s26local0;
  };
  CastleLootBoxDataXML.prototype.getLootBoxTypeByID = function (__s31param0) {
    return this._lootBoxTypes.get(__s31param0);
  };
  CastleLootBoxDataXML.prototype.resetLootBoxTypeKeyProgress = function () {
    this._lootBoxTypes.forEach(function (__s35param0) {
      __s35param0.keyProgress = 0;
    });
  };
  CastleLootBoxDataXML.prototype.getMysteryBoxesByType = function (__s37param0) {
    var __s37local0 = [];
    this._lootBoxes.forEach(function (__s39param0) {
      if (__s39param0.lootBoxTypeID == __s37param0) {
        __s37local0.push(__s39param0);
      }
    });
    return __s37local0;
  };
  CastleLootBoxDataXML.prototype.getHighestCategoryForRewards = function (__s42param0, __s42param1) {
    var __s42local0 = this.getLootBoxTombolasByTombolaID(__s42param0);
    var __s42local1 = new Map();
    __s42local1.set("Common", 1);
    __s42local1.set("Rare", 2);
    __s42local1.set("Epic", 3);
    __s42local1.set("Legendary", 4);
    var __s42local2;
    var __s42local3 = 1;
    var __s42local4 = "Common";
    __s42local0.forEach(function (__s44param0) {
      __s42local2 = __s44param0;
      for (var __s44local0 = 0; __s44local0 < __s42local2.rewardIDs.length; __s44local0++) {
        for (var __s44local1 = 0; __s44local1 < __s42param1.length; __s44local1++) {
          if (__s42local2.rewardIDs[__s44local0] == __s42param1[__s44local1] && __s42local3 < __s42local1.get(__s42local2.rewardCategory)) {
            __s42local3 = __s42local1.get(__s42local2.rewardCategory);
            __s42local4 = __dep_exact_9e901e8e2483a22f.DictionaryUtil.getKeyForValue(__s42local1, __s42local3);
            break;
          }
        }
      }
    });
    return __s42local4;
  };
  return CastleLootBoxDataXML;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleLootBoxDataXML = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
