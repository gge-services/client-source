Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SamuraiInvasionEventVO = require("gge-module:export_SamuraiInvasionEventVO");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceSamuraiInvasionDialog() {
    var __s3local0 = this;
    __s3local0.activeTab = 0;
    __s3local0.sublayers = new Map();
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleAllianceSamuraiInvasionDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceSamuraiInvasionDialog, __s1param0);
  CastleAllianceSamuraiInvasionDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.sublayers.set(CastleAllianceSamuraiInvasionDialog.TAB_PLAYER, new __dep_export_CastleAllianceSamuraiInvasionDialogPlayerSublayer.CastleAllianceSamuraiInvasionDialogPlayerSublayer(this.dialogDisp.sublayer_player));
    this.sublayers.set(CastleAllianceSamuraiInvasionDialog.TAB_ALLIANCE, new __dep_export_CastleAllianceSamuraiInvasionDialogAllianceSublayer.CastleAllianceSamuraiInvasionDialogAllianceSublayer(this.dialogDisp.sublayer_alliance));
    this.sublayers.set(CastleAllianceSamuraiInvasionDialog.TAB_MERCHANT, new __dep_export_CastleSamuraiInvasionMerchantSublayer.CastleSamuraiInvasionMerchantSublayer(this.dialogDisp.sublayer_merchant));
    this.sublayers.set(CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO, new __dep_export_CastleAllianceSamuraiInvasionDialogDaimyoSublayer.CastleAllianceSamuraiInvasionDialogDaimyoSublayer(this.dialogDisp.sublayer_daimyo));
    this.sublayers.set(CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO_SHOP, new __dep_export_CastleSamuraiInvasionDaimyoShopSublayer.CastleSamuraiInvasionDaimyoShopSublayer(this.dialogDisp.sublayer_daimyoShop));
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close]);
    this.initTabButton(this.dialogDisp.tab_player, "dialog_samuraiInvasion_singleTab_tooltip");
    this.initTabButton(this.dialogDisp.tab_alliance, "dialog_samuraiInvasion_allianceTab_tooltip");
    this.initTabButton(this.dialogDisp.tab_merchant, "dialog_samuraiInvasion_shopTab_tooltip");
    this.initTabButton(this.dialogDisp.tab_daimyo, "samuraiInvasionDaimyo_tt");
    this.initTabButton(this.dialogDisp.tab_daimyoShop, "dialog_samuraiInvasionDaimyo_shopTab_tooltip");
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_samuraiInvasion_gambling_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nomadInvasion_desc"));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.dialogDisp.mc_time.mouseChildren = false;
    this._currentSublayer = this.sublayers.get(CastleAllianceSamuraiInvasionDialog.TAB_PLAYER);
    this.activeTab = CastleAllianceSamuraiInvasionDialog.TAB_PLAYER;
    this.updateTabButtons();
    this.updateSpeechBubbleText();
  };
  CastleAllianceSamuraiInvasionDialog.prototype.initTabButton = function (__s7param0, __s7param1) {
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s7param0);
    __s7param0.toolTipText = __s7param1;
  };
  CastleAllianceSamuraiInvasionDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    if (__dep_exact_f855840627e6e145.int(this.dialogProperties.eventVO.remainingEventTimeInSeconds) <= 0) {
      this.hide();
    } else {
      var __s9local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION);
      if (this.dialogProperties.sublayerIndex != -1) {
        this.showTab(this.dialogProperties.sublayerIndex);
      } else if (this.activeTab != CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO || __s9local0.daimyoInfoVO.isEnabled) {
        this.showCurrentSublayer();
      } else {
        this.showTab(CastleAllianceSamuraiInvasionDialog.TAB_PLAYER);
      }
      __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventAdded));
      __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
      this.updateTimer();
      this.updateDaimyo();
    }
  };
  CastleAllianceSamuraiInvasionDialog.prototype.hideLoaded = function (__s16param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    this.hideCurrentSublayer();
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventAdded));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
  };
  CastleAllianceSamuraiInvasionDialog.prototype.applyPropertiesToSublayers = function () {
    if (this.samuraiEventVO) {
      this.sublayers.get(CastleAllianceSamuraiInvasionDialog.TAB_PLAYER).setScoreBarData(this.samuraiEventVO.scoreBarVO);
      this.sublayers.get(CastleAllianceSamuraiInvasionDialog.TAB_ALLIANCE).setScoreBarData(this.samuraiEventVO.allianceBarVO);
      this.sublayers.get(CastleAllianceSamuraiInvasionDialog.TAB_MERCHANT).setPackagesData(this.samuraiEventVO.eventPackagesVO, this.dialogProperties.eventVO);
    }
  };
  CastleAllianceSamuraiInvasionDialog.prototype.showTab = function (__s21param0) {
    this.activeTab = __s21param0;
    this._currentSublayer = this.sublayers.get(this.activeTab);
    this.showCurrentSublayer();
    this.updateTabButtons();
    this.updateSpeechBubbleText();
  };
  CastleAllianceSamuraiInvasionDialog.prototype.changeTab = function (__s23param0) {
    if (__s23param0 != this.activeTab) {
      this.hideCurrentSublayer();
      this.showTab(__s23param0);
    }
  };
  CastleAllianceSamuraiInvasionDialog.prototype.showCurrentSublayer = function () {
    this.applyPropertiesToSublayers();
    this._currentSublayer = this.sublayers.get(this.activeTab);
    this.sublayers.get(this.activeTab).show(null);
  };
  CastleAllianceSamuraiInvasionDialog.prototype.hideCurrentSublayer = function () {
    this.sublayers.get(this.activeTab).hide();
  };
  CastleAllianceSamuraiInvasionDialog.prototype.updateTabButtons = function () {
    this.dialogDisp.tab_player.gotoAndStop(this.activeTab == CastleAllianceSamuraiInvasionDialog.TAB_PLAYER ? 2 : 1);
    this.dialogDisp.tab_alliance.gotoAndStop(this.activeTab == CastleAllianceSamuraiInvasionDialog.TAB_ALLIANCE ? 2 : 1);
    this.dialogDisp.tab_merchant.gotoAndStop(this.activeTab == CastleAllianceSamuraiInvasionDialog.TAB_MERCHANT ? 2 : 1);
    this.dialogDisp.tab_daimyo.gotoAndStop(this.activeTab == CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO ? 2 : 1);
    this.dialogDisp.tab_daimyoShop.gotoAndStop(this.activeTab == CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO_SHOP ? 2 : 1);
  };
  CastleAllianceSamuraiInvasionDialog.prototype.updateDaimyo = function () {
    var __s32local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION);
    var __s32local1 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_DAIMYO_SHOP);
    var __s32local2 = __s32local1 != null;
    var __s32local3 = !!__s32local0 && __s32local0.isActive;
    this.dialogDisp.tab_daimyo.visible = !!__s32local0 && __s32local0.daimyoInfoVO.isEnabled;
    this.dialogDisp.tab_daimyoShop.visible = __s32local2;
    this.dialogDisp.tab_player.visible = __s32local3;
    this.dialogDisp.tab_alliance.visible = __s32local3;
    this.dialogDisp.tab_merchant.visible = __s32local3;
    if (__s32local2) {
      this.sublayers.get(CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO_SHOP).setPackagesData(__s32local1.eventPackagesVO, __s32local1);
    }
  };
  CastleAllianceSamuraiInvasionDialog.prototype.updateTimer = function () {
    var __s35local0 = __dep_exact_f855840627e6e145.int(this.dialogProperties.eventVO.remainingEventTimeInSeconds);
    this.itxt_time.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s35local0);
    this.dialogDisp.mc_time.toolTipText = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventToolTipString(__s35local0);
  };
  CastleAllianceSamuraiInvasionDialog.prototype.updateSpeechBubbleText = function () {
    var __s37local0 = "";
    switch (this.activeTab) {
      case CastleAllianceSamuraiInvasionDialog.TAB_PLAYER:
        __s37local0 = "dialog_samuraiInvasion_single_desc";
        break;
      case CastleAllianceSamuraiInvasionDialog.TAB_ALLIANCE:
        __s37local0 = "dialog_samuraiInvasion_alliance_desc";
        break;
      case CastleAllianceSamuraiInvasionDialog.TAB_MERCHANT:
        __s37local0 = "dialog_samuraiInvasion_samuraiShop_desc";
        break;
      case CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO:
        __s37local0 = "dialog_samuraiInvasionDaimyo_desc";
        break;
      case CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO_SHOP:
        __s37local0 = "dialog_samuraiMedalShop_desc_detail";
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechbubble, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s37local0));
  };
  CastleAllianceSamuraiInvasionDialog.prototype.onClick = function (__s40param0) {
    __s1param0.prototype.onClick.call(this, __s40param0);
    switch (__s40param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        this._currentSublayer.showHelp();
        break;
      case this.dialogDisp.tab_player:
        this.changeTab(CastleAllianceSamuraiInvasionDialog.TAB_PLAYER);
        break;
      case this.dialogDisp.tab_alliance:
        this.changeTab(CastleAllianceSamuraiInvasionDialog.TAB_ALLIANCE);
        break;
      case this.dialogDisp.tab_merchant:
        this.changeTab(CastleAllianceSamuraiInvasionDialog.TAB_MERCHANT);
        break;
      case this.dialogDisp.tab_daimyo:
        this.changeTab(CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO);
        break;
      case this.dialogDisp.tab_daimyoShop:
        this.changeTab(CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO_SHOP);
    }
  };
  CastleAllianceSamuraiInvasionDialog.prototype.onUpdateEventTime = function (__s43param0) {
    if (__dep_exact_f855840627e6e145.int(this.dialogProperties.eventVO.remainingEventTimeInSeconds) <= 0) {
      this.hide();
    } else {
      this.updateTimer();
    }
  };
  CastleAllianceSamuraiInvasionDialog.prototype.onEventAdded = function (__s47param0) {
    this.updateDaimyo();
  };
  CastleAllianceSamuraiInvasionDialog.prototype.onEventRemoved = function (__s49param0) {
    this.updateDaimyo();
    if (__s49param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION) {
      this.hide();
    }
  };
  Object.defineProperty(CastleAllianceSamuraiInvasionDialog.prototype, "samuraiEventVO", {
    get: function () {
      if (this.dialogProperties.eventVO instanceof __dep_export_SamuraiInvasionEventVO.SamuraiInvasionEventVO) {
        return this.dialogProperties.eventVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceSamuraiInvasionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceSamuraiInvasionDialog.TAB_PLAYER = 1;
  CastleAllianceSamuraiInvasionDialog.TAB_ALLIANCE = 2;
  CastleAllianceSamuraiInvasionDialog.TAB_MERCHANT = 3;
  CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO = 4;
  CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO_SHOP = 5;
  CastleAllianceSamuraiInvasionDialog.NAME = "CastleAllianceSamuraiInvasionEvent_Difficulty";
  return CastleAllianceSamuraiInvasionDialog;
}(require("gge-module:export_CastleExternalSubLayerDialog").CastleExternalSubLayerDialog);
exports.CastleAllianceSamuraiInvasionDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_CastleAllianceSamuraiInvasionDialogAllianceSublayer = require("gge-module:export_CastleAllianceSamuraiInvasionDialogAllianceSublayer");
var __dep_export_CastleAllianceSamuraiInvasionDialogDaimyoSublayer = require("gge-module:export_CastleAllianceSamuraiInvasionDialogDaimyoSublayer");
var __dep_export_CastleAllianceSamuraiInvasionDialogPlayerSublayer = require("gge-module:export_CastleAllianceSamuraiInvasionDialogPlayerSublayer");
var __dep_export_CastleSamuraiInvasionDaimyoShopSublayer = require("gge-module:export_CastleSamuraiInvasionDaimyoShopSublayer");
var __dep_export_CastleSamuraiInvasionMerchantSublayer = require("gge-module:export_CastleSamuraiInvasionMerchantSublayer");
