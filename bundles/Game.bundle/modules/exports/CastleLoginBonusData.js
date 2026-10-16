Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SGetLoginBonusVO = require("gge-module:export_C2SGetLoginBonusVO");
var __dep_export_LoginBonusDataUpdateEvent = require("gge-module:export_LoginBonusDataUpdateEvent");
var __dep_export_CastleXPChangedEvent = require("gge-module:export_CastleXPChangedEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_LoginBonusDailyRewardVO = require("gge-module:export_LoginBonusDailyRewardVO");
var __s0local0 = function (__s1param0) {
  function CastleLoginBonusData() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._bonusDayIndex = 0;
    __s3local0._hasAnythingToCollect = false;
    __s3local0._preventDialogPopup = false;
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, __s3local0.bindFunction(__s3local0.onUserXpChanged));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLoginBonusData, __s1param0);
  CastleLoginBonusData.prototype.onUserXpChanged = function (__s5param0) {
    if (!(__s5param0.previousXP <= __dep_exact_26a421b704832cff.TutorialConst.LAST_TUTORIAL_STEP_XP) && !(__s5param0.previousXP >= CastleLoginBonusData.REQUIRED_XP) && !(__dep_export_CastleModel.CastleModel.userData.userXP < CastleLoginBonusData.REQUIRED_XP)) {
      __dep_export_CastleModel.CastleModel.loginBonusData.preventDialogPopup = true;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetLoginBonusVO.C2SGetLoginBonusVO());
    }
  };
  CastleLoginBonusData.prototype.parseALB = function (__s8param0) {
    this._bonusDayIndex = __dep_exact_f855840627e6e145.int(__s8param0.D);
    var __s8local0 = __s8param0.R;
    if (__s8local0 && !(__s8local0.length <= 0)) {
      this._rewardList = [];
      var __s8local1;
      var __s8local2;
      var __s8local3;
      var __s8local4;
      var __s8local5;
      var __s8local6;
      for (var __s8local7 = __s8local0.length, __s8local8 = 0; __s8local8 < __s8local7; __s8local8++) {
        __s8local2 = (__s8local1 = __s8local0[__s8local8]["D" + (__s8local8 + 1)])[0].REW[0];
        __s8local3 = __dep_export_CollectableManager.CollectableManager.parser.s2cParamObject.createList(__s8local2);
        __s8local4 = __s8local1[1] && __s8local1[1].PICK && __s8local1[1].PICK.length > 0 ? this.collectReward(__s8local1[1].PICK[0]) : null;
        __s8local5 = __s8local1[2] && __s8local1[2].ALLI && __s8local1[2].ALLI.length > 0 ? this.collectReward(__s8local1[2].ALLI[0]) : null;
        __s8local6 = __s8local1[3] && __s8local1[3].VIP && __s8local1[3].VIP.length > 0 ? this.collectReward(__s8local1[3].VIP[0]) : null;
        if (__s8local8 == __dep_exact_f855840627e6e145.int(__s8param0.D % 7)) {
          this._hasAnythingToCollect = __s8local4 == null;
          if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
            this._hasAnythingToCollect = this._hasAnythingToCollect || __s8local5 == null;
          }
          if (__dep_export_CastleModel.CastleModel.vipData.vipModeActive) {
            this._hasAnythingToCollect = this._hasAnythingToCollect || __s8local6 == null;
          }
        }
        this._rewardList[__s8local8] = new __dep_export_LoginBonusDailyRewardVO.LoginBonusDailyRewardVO(__s8local8, __s8local3, __s8local4, __s8local5, __s8local6);
      }
      this.dispatchEvent(new __dep_export_LoginBonusDataUpdateEvent.LoginBonusDataUpdateEvent(__dep_export_LoginBonusDataUpdateEvent.LoginBonusDataUpdateEvent.LOGIN_BONUS_UPDATED));
    }
  };
  CastleLoginBonusData.prototype.notifyCollectFailed = function () {
    this.dispatchEvent(new __dep_export_LoginBonusDataUpdateEvent.LoginBonusDataUpdateEvent(__dep_export_LoginBonusDataUpdateEvent.LoginBonusDataUpdateEvent.LOGIN_BONUS_COLLECT_FAILED));
  };
  CastleLoginBonusData.prototype.collectReward = function (__s18param0) {
    var __s18local0 = __dep_export_CollectableManager.CollectableManager.parser.s2cParamObject.createList(__s18param0);
    if (__s18local0 && __s18local0.length > 0) {
      return __s18local0.getItemByIndex(0);
    }
    if (__s18param0.hasOwnProperty("R")) {
      var __s18local1;
      var __s18local2 = __s18param0.R;
      if (__s18local2) {
        var __s18local3;
        for (var __s18local4 = __s18local2.length, __s18local5 = 0; __s18local5 < __s18local4; __s18local5++) {
          __s18local3 = __s18local2[__s18local5];
          if (Array.isArray(__s18local3) && __s18local3.length > 1) {
            (__s18local1 = {})[__s18local3[0]] = [__s18local3[1]];
            break;
          }
        }
      }
      if ((__s18local0 = __dep_export_CollectableManager.CollectableManager.parser.s2cParamObject.createList(__s18local1)) && __s18local0.length > 0) {
        return __s18local0.getItemByIndex(0);
      } else {
        return null;
      }
    }
    return null;
  };
  Object.defineProperty(CastleLoginBonusData.prototype, "rewardDay", {
    get: function () {
      return this._bonusDayIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLoginBonusData.prototype, "hasAnythingToCollect", {
    get: function () {
      return this._hasAnythingToCollect;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLoginBonusData.prototype, "isActive", {
    get: function () {
      return !!this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLoginBonusData.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLoginBonusData.prototype, "preventDialogPopup", {
    get: function () {
      return this._preventDialogPopup;
    },
    set: function (__s38param0) {
      this._preventDialogPopup = __s38param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleLoginBonusData.REQUIRED_XP = 1200;
  return CastleLoginBonusData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleLoginBonusData = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
