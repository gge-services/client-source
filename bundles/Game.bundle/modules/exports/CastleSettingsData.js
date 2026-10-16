Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SOptionEvent = require("gge-module:export_C2SOptionEvent");
var __dep_export_SettingsEvent = require("gge-module:export_SettingsEvent");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleSettingsData() {
    var __s3local0 = this;
    __s3local0._hasCombatAnimationActivated = false;
    __s3local0._questReminderActive = true;
    __s3local0._worldmapMovementsVisible = true;
    __s3local0._worldmapAREMovementsVisible = true;
    __s3local0._showVIPFlagToOthers = false;
    __s3local0._miniChatVisible = true;
    __s3local0._mapFilter0Active = false;
    __s3local0._mapFilter1Active = false;
    __s3local0._mapFilter2Active = false;
    __s3local0._showEffectValuesActive = false;
    __s3local0._isHomeScreenVisible = true;
    __s3local0._homeScreenID = 0;
    __s3local0._abTestShowSagamap = false;
    __s3local0._showPackageIDToolTips = false;
    __s3local0._doNotShowDialogues = new Set();
    __s3local0._isLoginReady = false;
    __s3local0._isDestroyingGame = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._questReminderActive = __dep_export_CastleModel.CastleModel.localData.readQuestReminder();
    __s3local0._worldmapMovementsVisible = __dep_export_CastleModel.CastleModel.localData.readWorlmapMovementsVisibility();
    __s3local0._worldmapAREMovementsVisible = __dep_export_CastleModel.CastleModel.localData.readWorlmapAREMovementsVisibility();
    __s3local0._miniChatVisible = __dep_export_CastleModel.CastleModel.localData.readMiniChatVisibility();
    __s3local0._homeScreenID = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.localData.readHomeScreenID());
    __s3local0._isHomeScreenVisible = __dep_export_CastleModel.CastleModel.localData.readHomeScreenVisibility();
    __s3local0._isLoginReady = false;
    __s3local0._eventBookmark = __dep_export_CastleModel.CastleModel.localData.readEventBookmark();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSettingsData, __s1param0);
  CastleSettingsData.prototype.parse_DSD = function (__s5param0) {
    if (__s5param0 && __s5param0.A) {
      this._doNotShowDialogues = new Set();
      for (var __s5local0 = __s5param0.A, __s5local1 = 0; __s5local1 < __s5local0.length; __s5local1++) {
        var __s5local2 = __dep_exact_f855840627e6e145.int(__s5local0[__s5local1]);
        this.addDoNotShowDialogue(__s5local2);
      }
    }
  };
  CastleSettingsData.prototype.parse_MVF = function (__s10param0) {
    if (__s10param0) {
      this._mapFilter0Active = __s10param0[__dep_exact_26a421b704832cff.CommKeys.ACTIVE_FILTERS].indexOf(0) >= 0;
      this._mapFilter1Active = __s10param0[__dep_exact_26a421b704832cff.CommKeys.ACTIVE_FILTERS].indexOf(1) >= 0;
      this._mapFilter2Active = __s10param0[__dep_exact_26a421b704832cff.CommKeys.ACTIVE_FILTERS].indexOf(2) >= 0;
    }
  };
  CastleSettingsData.prototype.addDoNotShowDialogue = function (__s13param0) {
    if (__dep_exact_26a421b704832cff.DontShowDialogConst.isValidDialogID(__s13param0)) {
      this._doNotShowDialogues.add(__s13param0);
    }
  };
  Object.defineProperty(CastleSettingsData.prototype, "questReminderActive", {
    get: function () {
      return this._questReminderActive;
    },
    set: function (__s18param0) {
      this._questReminderActive = __s18param0;
      __dep_export_CastleModel.CastleModel.localData.saveQuestReminder(this._questReminderActive);
      this.dispatchEvent(new __dep_export_SettingsEvent.SettingsEvent(__dep_export_SettingsEvent.SettingsEvent.QUESTREMINDER_STATE_CHANGED));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "worldmapMovementsVisible", {
    get: function () {
      return this._worldmapMovementsVisible;
    },
    set: function (__s22param0) {
      this._worldmapMovementsVisible = __s22param0;
      __dep_export_CastleModel.CastleModel.localData.saveWorlmapMovementsVisibility(this._worldmapMovementsVisible);
      this.dispatchEvent(new __dep_export_SettingsEvent.SettingsEvent(__dep_export_SettingsEvent.SettingsEvent.WORLDMAPMOVEMNTS_VISIBILITY_CHANGED));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "worldmapAREMovementsVisible", {
    get: function () {
      return this._worldmapAREMovementsVisible;
    },
    set: function (__s26param0) {
      this._worldmapAREMovementsVisible = __s26param0;
      __dep_export_CastleModel.CastleModel.localData.saveWorlmapAREMovementsVisibility(this._worldmapAREMovementsVisible);
      this.dispatchEvent(new __dep_export_SettingsEvent.SettingsEvent(__dep_export_SettingsEvent.SettingsEvent.ARE_WORLDMAPMOVEMNTS_VISIBILITY_CHANGED));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "miniChatVisible", {
    get: function () {
      return this._miniChatVisible;
    },
    set: function (__s30param0) {
      this._miniChatVisible = __s30param0;
      __dep_export_CastleModel.CastleModel.localData.saveMiniChatVisibility(this._miniChatVisible);
      this.dispatchEvent(new __dep_export_SettingsEvent.SettingsEvent(__dep_export_SettingsEvent.SettingsEvent.MINICHAT_VISIBILITY_CHANGED));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "showVIPFlagToOthers", {
    get: function () {
      return this._showVIPFlagToOthers;
    },
    set: function (__s34param0) {
      this._showVIPFlagToOthers = __s34param0;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SOptionEvent.C2SOptionEvent(this._showVIPFlagToOthers, this._confirmC2Threshold));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "confirmC2Threshold", {
    get: function () {
      return this._confirmC2Threshold;
    },
    set: function (__s38param0) {
      this._confirmC2Threshold = __s38param0;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SOptionEvent.C2SOptionEvent(this._showVIPFlagToOthers, this._confirmC2Threshold));
    },
    enumerable: true,
    configurable: true
  });
  CastleSettingsData.prototype.parse_OPT = function (__s40param0) {
    if (__s40param0) {
      this._showVIPFlagToOthers = __s40param0.SVF == 1;
      this._confirmC2Threshold = __s40param0.CC2T;
      if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen && __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer) {
        __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer.invalidateMap();
        __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer.clearMapobjects(true, true);
      }
      this.dispatchEvent(new __dep_export_SettingsEvent.SettingsEvent(__dep_export_SettingsEvent.SettingsEvent.SHOW_VIP_VISUALS_TO_OTHERS_CHANGED));
    }
  };
  CastleSettingsData.prototype.isDialogueVisible = function (__s44param0) {
    return !this._doNotShowDialogues.has(__s44param0);
  };
  Object.defineProperty(CastleSettingsData.prototype, "showEffectValuesActive", {
    get: function () {
      return this._showEffectValuesActive;
    },
    set: function (__s48param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "isHomeScreenVisible", {
    get: function () {
      return this._isHomeScreenVisible;
    },
    set: function (__s52param0) {
      this._isHomeScreenVisible = __s52param0;
      __dep_export_CastleModel.CastleModel.localData.saveHomeScreenVisibility(this._isHomeScreenVisible);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "homeScreenID", {
    get: function () {
      return this._homeScreenID;
    },
    set: function (__s56param0) {
      this._homeScreenID = __s56param0;
      __dep_export_CastleModel.CastleModel.localData.saveHomeScreenID(this._homeScreenID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "abTestShowSagamap", {
    get: function () {
      return this._abTestShowSagamap;
    },
    set: function (__s60param0) {
      this._abTestShowSagamap = __s60param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "showPackageIDToolTips", {
    get: function () {
      return this._showPackageIDToolTips;
    },
    set: function (__s64param0) {
      this._showPackageIDToolTips = __s64param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "isLoginReady", {
    get: function () {
      return this._isLoginReady;
    },
    set: function (__s68param0) {
      this._isLoginReady = __s68param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "isDestroyingGame", {
    get: function () {
      return this._isDestroyingGame;
    },
    set: function (__s72param0) {
      this._isDestroyingGame = __s72param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleSettingsData.prototype.setEventBookmark = function (__s74param0, __s74param1) {
    this._eventBookmark = {
      buttonName: __s74param0,
      eventEndTimestamp: __s74param1
    };
    __dep_export_CastleModel.CastleModel.localData.saveEventBookmark(this._eventBookmark);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(__dep_export_SettingsEvent.SettingsEvent.EVENT_BOOKMARK_CHANGED);
  };
  CastleSettingsData.prototype.deleteEventBookmark = function () {
    this.setEventBookmark("", 0);
  };
  CastleSettingsData.prototype.getEventBookmark = function () {
    return this._eventBookmark;
  };
  CastleSettingsData.prototype.validateEventBookmark = function () {
    if (__dep_export_CachedTimer.CachedTimer.getCachedTimer() > this.getEventBookmark().eventEndTimestamp) {
      this.deleteEventBookmark();
    }
  };
  Object.defineProperty(CastleSettingsData.prototype, "mapFilter0Active", {
    get: function () {
      return this._mapFilter0Active;
    },
    set: function (__s85param0) {
      this._mapFilter0Active = __s85param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "mapFilter1Active", {
    get: function () {
      return this._mapFilter1Active;
    },
    set: function (__s89param0) {
      this._mapFilter1Active = __s89param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "mapFilter2Active", {
    get: function () {
      return this._mapFilter2Active;
    },
    set: function (__s93param0) {
      this._mapFilter2Active = __s93param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSettingsData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleSettingsData = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
