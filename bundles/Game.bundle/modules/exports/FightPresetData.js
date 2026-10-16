Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SUpdatePresetNameVO = require("gge-module:export_C2SUpdatePresetNameVO");
var __s0local0 = function (__s1param0) {
  function FightPresetData(__s3param0) {
    var __s3local0 = this;
    __s3local0.onChange = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._unlockedPresetsCount = 0;
    __s3local0.prices = [];
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FightPresetData, __s1param0);
  FightPresetData.prototype.reset = function () {
    this._unlockedPresetsCount = 0;
    if (this.presets != null) {
      for (var __s5local0 = 0, __s5local1 = this.presets; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          __s5local2.reset();
        }
      }
    }
  };
  FightPresetData.prototype.parseXML = function (__s11param0) {
    for (var __s11local0 = 0, __s11local1 = __s11param0.attackSetupSlots; __s11local0 < __s11local1.length; __s11local0++) {
      var __s11local2 = __s11local1[__s11local0];
      if (__s11local2 != undefined) {
        var __s11local3 = parseInt(__s11local2.slotID || "");
        this.prices[__s11local3] = FightPresetData.parsePrice(__s11local2);
      }
    }
    this.resetPresetList();
  };
  FightPresetData.prototype.resetPresetList = function () {
    this._presets = [];
    for (var __s16local0 = 0; __s16local0 < this.prices.length; __s16local0++) {
      var __s16local1 = new __dep_export_FightPresetVO.FightPresetVO();
      __s16local1.index = __s16local0;
      __s16local1.unlockPrice = this.prices[__s16local0];
      __s16local1.unlocked = false;
      this._presets[__s16local0] = __s16local1;
    }
  };
  FightPresetData.parsePrice = function (__s20param0) {
    var __s20local0 = new __dep_export_CollectableList.CollectableList();
    for (var __s20local1 = 0, __s20local2 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_GOODS; __s20local1 < __s20local2.length; __s20local1++) {
      var __s20local3 = __s20local2[__s20local1];
      if (__s20local3 !== undefined) {
        var __s20local4 = "cost" + __dep_export_CollectableHelper.CollectableHelper.getGoodsKeySuffix(__s20local3);
        var __s20local5 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault(__s20local4, __s20param0, "0"));
        if (__s20local5 > 0) {
          __s20local0.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__s20local3, __s20local5));
        }
      }
    }
    return __s20local0;
  };
  Object.defineProperty(FightPresetData.prototype, "unlockedPresetsCount", {
    get: function () {
      return this._unlockedPresetsCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightPresetData.prototype, "presets", {
    get: function () {
      return this._presets;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightPresetData.prototype, "totalPresetsCount", {
    get: function () {
      return this._presets.length;
    },
    enumerable: true,
    configurable: true
  });
  FightPresetData.prototype.parsePresets = function (__s32param0) {
    var __s32local0 = 0;
    for (var __s32local1 = 0, __s32local2 = __s32param0.S; __s32local1 < __s32local2.length; __s32local1++) {
      var __s32local3 = __s32local2[__s32local1];
      if (__s32local3 !== undefined) {
        var __s32local4 = __dep_exact_f855840627e6e145.int(__s32local3.S);
        var __s32local5 = this._presets[__s32local4];
        __s32local5.update(__s32local3);
        __s32local5.unlocked = true;
        __s32local0++;
      }
    }
    this._unlockedPresetsCount = __s32local0;
    this.onChange.dispatch();
  };
  Object.defineProperty(FightPresetData.prototype, "multiWaveUnlocked", {
    get: function () {
      return this._presets.length > 0 && !!this._presets[0].unlocked;
    },
    enumerable: true,
    configurable: true
  });
  FightPresetData.prototype.loadDataFromServer = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetPreDefinedAttackSetupVO.C2SGetPreDefinedAttackSetupVO());
  };
  FightPresetData.prototype.savePresetArmy = function (__s41param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUpdatePreDefinedAttackSetupVO.C2SUpdatePreDefinedAttackSetupVO(__s41param0));
  };
  FightPresetData.prototype.savePresetName = function (__s43param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUpdatePresetNameVO.C2SUpdatePresetNameVO(__s43param0));
  };
  FightPresetData.prototype.handlePresetUpdated = function () {
    this.onChange.dispatch();
  };
  FightPresetData.prototype.unlockPreset = function (__s47param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUnlockPreDefinedAttackSetupVO.C2SUnlockPreDefinedAttackSetupVO(__s47param0.index));
  };
  FightPresetData.prototype.handleSuccessfullyUnlocked = function () {
    var __s49local0 = this._presets[this._unlockedPresetsCount];
    __s49local0.unlocked = true;
    __s49local0.name = __s49local0.defaultName;
    this._unlockedPresetsCount++;
    this.onChange.dispatch();
  };
  return FightPresetData;
}(require("gge-module:export_CastleBasicData").CastleBasicData);
exports.FightPresetData = __s0local0;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_C2SGetPreDefinedAttackSetupVO = require("gge-module:export_C2SGetPreDefinedAttackSetupVO");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_C2SUnlockPreDefinedAttackSetupVO = require("gge-module:export_C2SUnlockPreDefinedAttackSetupVO");
var __dep_export_C2SUpdatePreDefinedAttackSetupVO = require("gge-module:export_C2SUpdatePreDefinedAttackSetupVO");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_FightPresetVO = require("gge-module:export_FightPresetVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
