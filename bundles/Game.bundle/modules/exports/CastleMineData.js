Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_MineStateUpdateEvent = require("gge-module:export_MineStateUpdateEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ExistingMineVO = require("gge-module:export_ExistingMineVO");
var __s0local0 = function (__s1param0) {
  function CastleMineData(__s3param0) {
    var __s3local0 = this;
    __s3local0.timeStamp = 0;
    __s3local0.lastCollectedClickMine = [];
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).generateData(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMineData, __s1param0);
  CastleMineData.prototype.generateData = function (__s5param0) {
    var __s5local0 = __s5param0.mineTypes;
    this.mineVOData = new Map();
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          var __s5local4 = new __dep_export_MineVO.MineVO();
          __s5local4.parseXML(__s5local3);
          this.mineVOData.set(__s5local4.mineTypeID, __s5local4);
        }
      }
    }
  };
  CastleMineData.prototype.executeUpdate = function (__s11param0) {
    __s1param0.prototype.executeUpdate.call(this, __s11param0);
    var __s11local0 = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
    if (this.existingMines != null) {
      var __s11local1;
      var __s11local2 = __dep_exact_9e901e8e2483a22f.DictionaryUtil.getKeys(this.existingMines);
      if (__s11local2 != null) {
        for (var __s11local3 = 0, __s11local4 = __s11local2; __s11local3 < __s11local4.length; __s11local3++) {
          var __s11local5 = __s11local4[__s11local3];
          if (__s11local5 !== undefined) {
            var __s11local6 = (__s11local1 = this.existingMines.get(__s11local5)).nextCollectInSeconds;
            if (__s11local6 > 0) {
              if ((__s11local6 -= (__s11local0 - this.timeStamp) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC) < 0) {
                __s11local6 = 0;
                __s11local1.nextCollectInSeconds = __s11local6;
                this.dispatchStateChangedEvent();
              }
              __s11local1.nextCollectInSeconds = __s11local6;
            }
          }
        }
      }
    }
    this.timeStamp = __s11local0;
  };
  CastleMineData.prototype.dispatchStateChangedEvent = function () {
    this.dispatchEvent(new __dep_export_MineStateUpdateEvent.MineStateUpdateEvent(__dep_export_MineStateUpdateEvent.MineStateUpdateEvent.STATE_UPDATE, false));
  };
  CastleMineData.prototype.parse_GSM = function (__s22param0) {
    this.checkStatusChange(__s22param0);
    this.existingMines = new Map();
    var __s22local0;
    var __s22local1 = __s22param0.M;
    this.timeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
    if (__s22local1 != null) {
      for (var __s22local2 = 0, __s22local3 = __s22local1; __s22local2 < __s22local3.length; __s22local2++) {
        var __s22local4 = __s22local3[__s22local2];
        if (__s22local4 !== undefined) {
          (__s22local0 = new __dep_export_ExistingMineVO.ExistingMineVO()).remaingCollectionAmount = __s22local4.RC;
          __s22local0.nextCollectInSeconds = __s22local4.NC;
          this.existingMines.set(__s22local4.OID, __s22local0);
          if (this.lastCollectedClickMine.indexOf(__s22local4.OID) >= 0) {
            this.triggerInfoFlash(__s22local4);
            this.lastCollectedClickMine.splice(this.lastCollectedClickMine.indexOf(__s22local4.OID), 1);
          }
        }
      }
    }
    this.dispatchStateChangedEvent();
  };
  CastleMineData.prototype.collectMine = function (__s29param0) {
    if (this.lastCollectedClickMine.indexOf(__s29param0) < 0) {
      this.lastCollectedClickMine.push(__s29param0);
    }
  };
  CastleMineData.prototype.triggerInfoFlash = function (__s32param0) {
    var __s32local0;
    var __s32local1 = __dep_export_Iso.Iso.data.objects.provider.getObjectById(__s32param0.OID);
    if (__s32local1 && (__s32param0.C1 ? __s32local0 = new __dep_export_CollectableItemC1VO.CollectableItemC1VO(__s32param0.C1) : __s32param0.C2 && (__s32local0 = new __dep_export_CollectableItemC2VO.CollectableItemC2VO(__s32param0.C2)), __s32local0)) {
      var __s32local2 = __dep_export_Iso.Iso.renderer.objects.provider.getObjectByVO(__s32local1).getGlobalDispPosTopCenter();
      __dep_export_Iso.Iso.controller.dataUpdater.spawnCollectableFadeEffect(__s32local0, __s32local2);
    }
  };
  CastleMineData.prototype.checkStatusChange = function (__s35param0) {
    if (this.existingMines && !__s35param0) {
      var __s35local0 = __s35param0.M;
      if (__s35local0 != null) {
        for (var __s35local1 = 0, __s35local2 = __s35local0; __s35local1 < __s35local2.length; __s35local1++) {
          var __s35local3 = __s35local2[__s35local1];
          if (__s35local3 !== undefined) {
            if (__dep_exact_9e901e8e2483a22f.DictionaryUtil.containsKey(this.existingMines, __s35local3.OID) && __s35local3.NC == -1 && this.existingMines.get(__s35local3.OID).nextCollectInSeconds != -1) {
              if (__dep_export_Iso.Iso.data.objects.provider.getObjectById(__s35local3.OID).objectType == __dep_export_IsoObjectEnum.IsoObjectEnum.RUBY_MINE) {
                __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePrivateOfferRubymineDoneDialog.CastlePrivateOfferRubymineDoneDialog);
              } else {
                __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePrivateOfferCoinmineDoneDialog.CastlePrivateOfferCoinmineDoneDialog);
              }
            }
          }
        }
      }
    }
  };
  CastleMineData.prototype.getPercentRechargingCompletion = function (__s45param0, __s45param1) {
    var __s45local0 = this.existingMines.get(__s45param0);
    var __s45local1 = this.mineVOData.get(__s45param1);
    return 1 - __s45local0.nextCollectInSeconds / __s45local1.waitingTime;
  };
  CastleMineData.prototype.getRemainingRechargeTime = function (__s47param0) {
    return this.existingMines.get(__s47param0).nextCollectInSeconds;
  };
  CastleMineData.prototype.getRestAmountByMineID = function (__s49param0, __s49param1) {
    var __s49local0 = this.existingMines.get(__s49param0);
    var __s49local1 = this.mineVOData.get(__s49param1);
    return __s49local0.remaingCollectionAmount * __s49local1.amountPerCollect;
  };
  CastleMineData.prototype.getMineStateByObjectId = function (__s51param0) {
    if (!__dep_export_CastleModel.CastleModel.areaData.activeArea.isMyArea) {
      return CastleMineData.STATE_RECHARGING;
    }
    if (!this.existingMines || !__dep_exact_9e901e8e2483a22f.DictionaryUtil.containsKey(this.existingMines, __s51param0)) {
      return CastleMineData.STATE_COLLECTABLE;
    }
    var __s51local0 = this.existingMines.get(__s51param0).nextCollectInSeconds;
    if (__s51local0 == -1) {
      return CastleMineData.STATE_EMPTY;
    } else if (__s51local0 == 0) {
      return CastleMineData.STATE_COLLECTABLE;
    } else {
      return CastleMineData.STATE_RECHARGING;
    }
  };
  CastleMineData.prototype.destroy = function () {
    this.existingMines = null;
    __s1param0.prototype.destroy.call(this);
  };
  CastleMineData.prototype.getMineVOByObjectID = function (__s60param0) {
    return this.mineVOData.get(__s60param0);
  };
  CastleMineData.STATE_RECHARGING = "Charging";
  CastleMineData.STATE_COLLECTABLE = "Full";
  CastleMineData.STATE_EMPTY = "Empty";
  return CastleMineData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleMineData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
var __dep_export_CollectableItemC1VO = require("gge-module:export_CollectableItemC1VO");
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePrivateOfferCoinmineDoneDialog = require("gge-module:export_CastlePrivateOfferCoinmineDoneDialog");
var __dep_export_CastlePrivateOfferRubymineDoneDialog = require("gge-module:export_CastlePrivateOfferRubymineDoneDialog");
var __dep_export_MineVO = require("gge-module:export_MineVO");
