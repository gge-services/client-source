Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SPointEventGetPointsVO = require("gge-module:export_C2SPointEventGetPointsVO");
var __dep_export_SublayerSwitcher = require("gge-module:export_SublayerSwitcher");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleTitleSublayerFactionProperties = require("gge-module:export_CastleTitleSublayerFactionProperties");
var __s0local0 = function (__s1param0) {
  function CastleFactionInvasionEventDialog() {
    return __s1param0.call(this, CastleFactionInvasionEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionInvasionEventDialog, __s1param0);
  CastleFactionInvasionEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_remaining_time, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.itxt_time.autoFitToBounds = true;
    this.dialogDisp.mc_time.mouseChildren = false;
    this.dialogDisp.tab_instruction.toolTipText = "dialog_berimondInvasion_header";
    this.dialogDisp.tab_singleplayer.toolTipText = "dialog_berimondInvasion_sp_header";
    this.dialogDisp.tab_multiplayer.toolTipText = "dialog_berimondInvasion_alliance_header";
    this.dialogDisp.tab_gallantry.toolTipText = "dialog_factionTitles_header";
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help]);
  };
  CastleFactionInvasionEventDialog.prototype.createProperties = function (__s7param0) {
    switch (__s7param0) {
      case CastleFactionInvasionEventDialog.TAB_GALLANTRY_TITLES:
        return new __dep_export_CastleTitleSublayerFactionProperties.CastleTitleSublayerFactionProperties();
      default:
        return null;
    }
  };
  CastleFactionInvasionEventDialog.prototype.onClick = function (__s10param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s10param0.target)) {
      switch (__s10param0.target) {
        case this.dialogDisp.sublayer_teaser.btn_open_sublayer_singleplayer:
          this.sublayerSwitcher.switchTo(CastleFactionInvasionEventDialog.TAB_SINGLEPLAYER);
          break;
        case this.dialogDisp.sublayer_teaser.btn_open_sublayer_alliance:
          this.sublayerSwitcher.switchTo(CastleFactionInvasionEventDialog.TAB_ALLIANCE);
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", this.helpText);
      }
    }
  };
  Object.defineProperty(CastleFactionInvasionEventDialog.prototype, "helpText", {
    get: function () {
      switch (this.sublayerSwitcher.activeTab) {
        case CastleFactionInvasionEventDialog.TAB_INSTRUCTION:
          return __dep_exact_92d05af59ee2ff30.Localize.text("help_berimondInvasion_overview");
        case CastleFactionInvasionEventDialog.TAB_SINGLEPLAYER:
          return __dep_exact_92d05af59ee2ff30.Localize.text("help_berimondInvasion_sp");
        case CastleFactionInvasionEventDialog.TAB_ALLIANCE:
          return __dep_exact_92d05af59ee2ff30.Localize.text("help_berimondInvasion_alliance");
        case CastleFactionInvasionEventDialog.TAB_GALLANTRY_TITLES:
          return __dep_exact_92d05af59ee2ff30.Localize.text("help_berimond_titles", [__dep_exact_26a421b704832cff_1.FactionConst.TITLE_RESET_INTERVAL_SECONDS / __dep_export_ClientConstTime.ClientConstTime.HOURES_2_SEC]);
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionInvasionEventDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
  };
  CastleFactionInvasionEventDialog.prototype.onEventRemoved = function (__s19param0) {
    if (__s19param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION) {
      this.hide();
    }
  };
  CastleFactionInvasionEventDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
  };
  CastleFactionInvasionEventDialog.prototype.hideLoaded = function (__s24param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s24param0);
    this.sublayerSwitcher.hide();
  };
  CastleFactionInvasionEventDialog.prototype.showLoaded = function (__s26param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s26param0);
    if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION)) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SPointEventGetPointsVO.C2SPointEventGetPointsVO(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION));
    }
    if (!this.sublayerSwitcher) {
      this.dialogDisp.titles_sublayer_container.addChild(this.dialogProperties.titlesSublayer);
      this.sublayerSwitcher = new __dep_export_SublayerSwitcher.SublayerSwitcher(this.bindFunction(this.createProperties));
      this.sublayerSwitcher.add(CastleFactionInvasionEventDialog.TAB_INSTRUCTION, this.dialogDisp.tab_instruction, new __dep_export_CastleFactionInvasionEventDialogInstructionSublayer.CastleFactionInvasionEventDialogInstructionSublayer(this.dialogDisp.sublayer_teaser));
      this.sublayerSwitcher.add(CastleFactionInvasionEventDialog.TAB_SINGLEPLAYER, this.dialogDisp.tab_singleplayer, new __dep_export_CastleFactionInvasionEventDialogSingleplayerSublayer.CastleFactionInvasionEventDialogSingleplayerSublayer(this.dialogDisp.sublayer_singleplayer));
      this.sublayerSwitcher.add(CastleFactionInvasionEventDialog.TAB_ALLIANCE, this.dialogDisp.tab_multiplayer, new __dep_export_CastleFactionInvasionEventDialogAllianceSublayer.CastleFactionInvasionEventDialogAllianceSublayer(this.dialogDisp.sublayer_multiplayer));
      this.sublayerSwitcher.add(CastleFactionInvasionEventDialog.TAB_GALLANTRY_TITLES, this.dialogDisp.tab_gallantry, new __dep_export_FactionEventTitlesSublayer.FactionEventTitlesSublayer(this.dialogProperties.titlesSublayer));
      this.sublayerSwitcher.switchTo(CastleFactionInvasionEventDialog.TAB_INSTRUCTION);
    }
    this.sublayerSwitcher.show();
    this.updateTimer();
  };
  CastleFactionInvasionEventDialog.prototype.onUpdateEventTime = function (__s30param0) {
    if (__dep_exact_f855840627e6e145.int(this.eventVO.remainingEventTimeInSeconds) <= 0) {
      this.hide();
    } else {
      this.updateTimer();
    }
  };
  CastleFactionInvasionEventDialog.prototype.updateTimer = function () {
    var __s34local0 = __dep_exact_f855840627e6e145.int(this.eventVO.remainingEventTimeInSeconds);
    this.itxt_time.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s34local0);
    this.dialogDisp.mc_time.toolTipText = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventToolTipString(__s34local0);
  };
  Object.defineProperty(CastleFactionInvasionEventDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionInvasionEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionInvasionEventDialog.NAME = "CastleFactionInvasionEvent_O";
  CastleFactionInvasionEventDialog.TAB_INSTRUCTION = 1;
  CastleFactionInvasionEventDialog.TAB_SINGLEPLAYER = 2;
  CastleFactionInvasionEventDialog.TAB_ALLIANCE = 3;
  CastleFactionInvasionEventDialog.TAB_GALLANTRY_TITLES = 4;
  return CastleFactionInvasionEventDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleFactionInvasionEventDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_FactionEventTitlesSublayer = require("gge-module:export_FactionEventTitlesSublayer");
var __dep_export_CastleFactionInvasionEventDialogAllianceSublayer = require("gge-module:export_CastleFactionInvasionEventDialogAllianceSublayer");
var __dep_export_CastleFactionInvasionEventDialogInstructionSublayer = require("gge-module:export_CastleFactionInvasionEventDialogInstructionSublayer");
var __dep_export_CastleFactionInvasionEventDialogSingleplayerSublayer = require("gge-module:export_CastleFactionInvasionEventDialogSingleplayerSublayer");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
