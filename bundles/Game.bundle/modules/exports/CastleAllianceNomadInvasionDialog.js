Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceNomadInvasionDialog() {
    var __s3local0 = this;
    __s3local0.activeTab = CastleAllianceNomadInvasionDialog.TAB_POINTSEVENT;
    __s3local0.sublayers = new Map();
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleAllianceNomadInvasionDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceNomadInvasionDialog, __s1param0);
  CastleAllianceNomadInvasionDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this._subLayer = this.sublayers;
    this.sublayers.set(CastleAllianceNomadInvasionDialog.TAB_MERCHANT, new __dep_export_CastleNomadInvasionMerchantSublayer.CastleNomadInvasionMerchantSublayer(this.dialogDisp.sublayer_merchant));
    this.sublayers.set(CastleAllianceNomadInvasionDialog.TAB_MERCHANT_MEDALS, new __dep_export_CastleNomadInvasionMedalMerchantSublayer.CastleNomadInvasionMedalMerchantSublayer(this.dialogDisp.sublayer_merchant2));
    this.sublayers.set(CastleAllianceNomadInvasionDialog.TAB_POINTSEVENT, new __dep_export_CastleNomadInvasionPointsEventSublayer.CastleNomadInvasionPointsEventSublayer(this.dialogDisp.sublayer_pointEvent));
    this.sublayers.set(CastleAllianceNomadInvasionDialog.TAB_ALLIANCEEVENT, new __dep_export_CastleAllianceNomadInvasionPointsEventSublayer.CastleAllianceNomadInvasionPointsEventSublayer(this.dialogDisp.sublayer_allianceEvent));
    this.sublayers.set(CastleAllianceNomadInvasionDialog.TAB_ALLIANCECAMPEVENT, new __dep_export_CastleAllianceCampNomadInvasionPointsEventSublayer.CastleAllianceCampNomadInvasionPointsEventSublayer(this.dialogDisp.sublayer_allianceCampEvent));
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.tab_pointsEvent, this.dialogDisp.tab_merchant, this.dialogDisp.tab_alliance, this.dialogDisp.tab_allianceCamp, this.dialogDisp.tab_merchant2]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.tab_pointsEvent.toolTipText = "dialog_nomadInvasion_overviewTab_tooltip";
    this.dialogDisp.tab_merchant.toolTipText = "dialog_nomadInvasion_khanTabletShop_tooltip";
    this.dialogDisp.tab_alliance.toolTipText = "dialog_nomadInvasionAlliance_allianceTab_tooltip";
    this.dialogDisp.tab_allianceCamp.toolTipText = "dialog_nomadInvasion_khanContest_khanTab_tooltip";
    this.dialogDisp.tab_merchant2.toolTipText = "dialog_nomadInvasion_khanContest_khanTrader_tab_tooltip";
    this.updateTabButtons();
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.dialogDisp.mc_time.mouseChildren = false;
    this._currentSublayer = this.sublayers.get(CastleAllianceNomadInvasionDialog.TAB_POINTSEVENT);
  };
  CastleAllianceNomadInvasionDialog.prototype.hideLoaded = function (__s7param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    this.hideCurrentSublayer();
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnd));
  };
  CastleAllianceNomadInvasionDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    if (this.eventVO || this.merchantEventVO) {
      this.applyPropertiesToSublayers();
      if (this.dialogProperties.sublayerIndex != -1) {
        this.showTab(this.dialogProperties.sublayerIndex);
      } else {
        this.showCurrentSublayer();
      }
      this.updateTabVisibility();
      this.updateTimer();
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
      __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnd));
    } else {
      this.hide();
    }
  };
  CastleAllianceNomadInvasionDialog.prototype.onClick = function (__s15param0) {
    __s1param0.prototype.onClick.call(this, __s15param0);
    switch (__s15param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        this._currentSublayer.showHelp();
        break;
      case this.dialogDisp.tab_pointsEvent:
        this.changeTab(CastleAllianceNomadInvasionDialog.TAB_POINTSEVENT);
        break;
      case this.dialogDisp.tab_merchant:
        this.changeTab(CastleAllianceNomadInvasionDialog.TAB_MERCHANT);
        break;
      case this.dialogDisp.tab_alliance:
        this.changeTab(CastleAllianceNomadInvasionDialog.TAB_ALLIANCEEVENT);
        break;
      case this.dialogDisp.tab_allianceCamp:
        this.changeTab(CastleAllianceNomadInvasionDialog.TAB_ALLIANCECAMPEVENT);
        break;
      case this.dialogDisp.tab_merchant2:
        this.changeTab(CastleAllianceNomadInvasionDialog.TAB_MERCHANT_MEDALS);
    }
  };
  CastleAllianceNomadInvasionDialog.prototype.applyPropertiesToSublayers = function () {
    if (this.eventVO) {
      this.sublayers.get(CastleAllianceNomadInvasionDialog.TAB_POINTSEVENT).setScoreBarData(this.eventVO.scoreBarVO);
      this.sublayers.get(CastleAllianceNomadInvasionDialog.TAB_ALLIANCEEVENT).setScoreBarData(this.eventVO.allianceBarVO);
      this.sublayers.get(CastleAllianceNomadInvasionDialog.TAB_ALLIANCECAMPEVENT).setEventVO(this.eventVO);
    }
    if (this.merchantEventVO) {
      this.sublayers.get(CastleAllianceNomadInvasionDialog.TAB_MERCHANT).setPackagesData(this.merchantEventVO.eventPackagesVO, this.merchantEventVO);
      this.sublayers.get(CastleAllianceNomadInvasionDialog.TAB_MERCHANT_MEDALS).setPackagesData(this.merchantEventVO.eventPackagesVO, this.merchantEventVO);
    }
  };
  CastleAllianceNomadInvasionDialog.prototype.showTab = function (__s22param0) {
    this.activeTab = __s22param0;
    this._currentSublayer = this.sublayers.get(this.activeTab);
    this.showCurrentSublayer();
    this.updateTabButtons();
  };
  CastleAllianceNomadInvasionDialog.prototype.changeTab = function (__s24param0) {
    if (__s24param0 != this.activeTab) {
      this.hideCurrentSublayer();
      this.showTab(__s24param0);
    }
  };
  CastleAllianceNomadInvasionDialog.prototype.showCurrentSublayer = function () {
    this._currentSublayer = this.sublayers.get(this.activeTab);
    this.sublayers.get(this.activeTab).show(null);
  };
  CastleAllianceNomadInvasionDialog.prototype.hideCurrentSublayer = function () {
    this.sublayers.get(this.activeTab).hide();
  };
  CastleAllianceNomadInvasionDialog.prototype.updateTabButtons = function () {
    this.dialogDisp.tab_pointsEvent.gotoAndStop(this.activeTab == CastleAllianceNomadInvasionDialog.TAB_POINTSEVENT ? 2 : 1);
    this.dialogDisp.tab_merchant.gotoAndStop(this.activeTab == CastleAllianceNomadInvasionDialog.TAB_MERCHANT ? 2 : 1);
    this.dialogDisp.tab_alliance.gotoAndStop(this.activeTab == CastleAllianceNomadInvasionDialog.TAB_ALLIANCEEVENT ? 2 : 1);
    this.dialogDisp.tab_allianceCamp.gotoAndStop(this.activeTab == CastleAllianceNomadInvasionDialog.TAB_ALLIANCECAMPEVENT ? 2 : 1);
    this.dialogDisp.tab_merchant2.gotoAndStop(this.activeTab == CastleAllianceNomadInvasionDialog.TAB_MERCHANT_MEDALS ? 2 : 1);
  };
  CastleAllianceNomadInvasionDialog.prototype.onUpdateEventTime = function (__s33param0) {
    this.updateTimer();
  };
  CastleAllianceNomadInvasionDialog.prototype.updateTimer = function () {
    if (this.activeTab == CastleAllianceNomadInvasionDialog.TAB_MERCHANT || this.activeTab == CastleAllianceNomadInvasionDialog.TAB_MERCHANT_MEDALS) {
      if (this.merchantEventVO) {
        var __s35local0 = __dep_exact_f855840627e6e145.int(this.merchantEventVO.remainingEventTimeInSeconds);
        this.itxt_time.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s35local0);
        this.dialogDisp.mc_time.toolTipText = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventToolTipString(__s35local0);
      }
    } else if (this.eventVO) {
      var __s35local1 = __dep_exact_f855840627e6e145.int(this.eventVO.remainingEventTimeInSeconds);
      this.itxt_time.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s35local1);
      this.dialogDisp.mc_time.toolTipText = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventToolTipString(__s35local1);
    }
  };
  CastleAllianceNomadInvasionDialog.prototype.onEventEnd = function (__s40param0) {
    if (__s40param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE) {
      if (!this.merchantEventVO || this.activeTab != CastleAllianceNomadInvasionDialog.TAB_POINTSEVENT && this.activeTab != CastleAllianceNomadInvasionDialog.TAB_ALLIANCEEVENT && this.activeTab != CastleAllianceNomadInvasionDialog.TAB_ALLIANCECAMPEVENT) {
        if (!this.merchantEventVO) {
          this.hide();
        }
      } else {
        this.changeTab(CastleAllianceNomadInvasionDialog.TAB_MERCHANT);
        this.updateTabVisibility();
      }
    }
    if (__s40param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_VENDOR) {
      if (!this.eventVO || this.activeTab != CastleAllianceNomadInvasionDialog.TAB_MERCHANT && this.activeTab != CastleAllianceNomadInvasionDialog.TAB_MERCHANT_MEDALS) {
        if (!this.eventVO) {
          this.hide();
        }
      } else {
        this.changeTab(CastleAllianceNomadInvasionDialog.TAB_POINTSEVENT);
        this.updateTabVisibility();
      }
    }
  };
  CastleAllianceNomadInvasionDialog.prototype.updateTabVisibility = function () {
    this.dialogDisp.tab_pointsEvent.visible = this.eventVO;
    this.dialogDisp.tab_merchant.visible = this.merchantEventVO;
    this.dialogDisp.tab_alliance.visible = this.eventVO;
    this.dialogDisp.tab_allianceCamp.visible = this.eventVO && this.eventVO.khanCampBarVO && __dep_export_CastleModel.CastleModel.userData.userLevel >= this.eventVO.eventExtensionUnlock;
    this.dialogDisp.tab_merchant2.visible = this.merchantEventVO && __dep_export_CastleModel.CastleModel.userData.userLevel >= this.merchantEventVO.eventExtensionUnlock;
  };
  Object.defineProperty(CastleAllianceNomadInvasionDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionDialog.prototype, "merchantEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_VENDOR);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceNomadInvasionDialog.TAB_MERCHANT = 0;
  CastleAllianceNomadInvasionDialog.TAB_POINTSEVENT = 1;
  CastleAllianceNomadInvasionDialog.TAB_ALLIANCEEVENT = 2;
  CastleAllianceNomadInvasionDialog.TAB_MERCHANT_MEDALS = 4;
  CastleAllianceNomadInvasionDialog.TAB_ALLIANCECAMPEVENT = 5;
  CastleAllianceNomadInvasionDialog.NAME = "CastleAllianceNomadInvasionEvent_Difficulty";
  return CastleAllianceNomadInvasionDialog;
}(require("gge-module:export_CastleExternalSubLayerDialog").CastleExternalSubLayerDialog);
exports.CastleAllianceNomadInvasionDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_CastleAllianceCampNomadInvasionPointsEventSublayer = require("gge-module:export_CastleAllianceCampNomadInvasionPointsEventSublayer");
var __dep_export_CastleAllianceNomadInvasionPointsEventSublayer = require("gge-module:export_CastleAllianceNomadInvasionPointsEventSublayer");
var __dep_export_CastleNomadInvasionMedalMerchantSublayer = require("gge-module:export_CastleNomadInvasionMedalMerchantSublayer");
var __dep_export_CastleNomadInvasionMerchantSublayer = require("gge-module:export_CastleNomadInvasionMerchantSublayer");
var __dep_export_CastleNomadInvasionPointsEventSublayer = require("gge-module:export_CastleNomadInvasionPointsEventSublayer");
