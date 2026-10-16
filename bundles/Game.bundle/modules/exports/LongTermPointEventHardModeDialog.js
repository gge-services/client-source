Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SJoinCastleVO = require("gge-module:export_C2SJoinCastleVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_LongTermPointEventSkin = require("gge-module:export_LongTermPointEventSkin");
var __s0local0 = function (__s1param0) {
  function LongTermPointEventHardModeDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, LongTermPointEventHardModeDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LongTermPointEventHardModeDialog, __s1param0);
  LongTermPointEventHardModeDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    this.dialogDisp.btn_showMe.mouseChildren = false;
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_showMe, this.dialogDisp.btn_yes]);
    this.registerTextFields(this.dialogDisp.txt_title, "dialog_longPointsEvent_hardMode_header");
    this.registerTextFields(this.dialogDisp.btn_showMe.txt_showMe, "dialog_questInfo_showMe");
    this.setMessageId();
  };
  LongTermPointEventHardModeDialog.prototype.setMessageId = function () {
    var __s7local0 = "dialog_longPointsEvent_hardMode_info";
    var __s7local1 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT);
    var __s7local2 = __dep_export_LongTermPointEventSkin.LongTermPointEventSkin.getTypeById(__s7local1.skinId);
    if (__s7local2 != __dep_export_LongTermPointEventSkin.LongTermPointEventSkin.DEFAULT) {
      __s7local0 += "_" + __s7local2.name;
    }
    this.registerTextFields(this.dialogDisp.txt_message, __s7local0);
  };
  LongTermPointEventHardModeDialog.prototype.registerTextFields = function (__s10param0, __s10param1) {
    this.textFieldManager.registerTextField(__s10param0, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s10param1));
  };
  LongTermPointEventHardModeDialog.prototype.onClick = function (__s12param0) {
    __s1param0.prototype.onClick.call(this, __s12param0);
    switch (__s12param0.target) {
      case this.dialogDisp.btn_showMe:
        this.openLongTermPointEventDialogOnISOMap();
        break;
      case this.dialogDisp.btn_yes:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  LongTermPointEventHardModeDialog.prototype.openLongTermPointEventDialogOnISOMap = function () {
    if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT)) {
      if (__dep_export_IsoHelper.IsoHelper.view.isInIsoScreen && __dep_export_Iso.Iso.data.areaData.isMyHomeCastle) {
        __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_LONGTERM_POINT_EVENT_DIALOG);
      } else {
        this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onServerMessageArrived));
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCastleVO.C2SJoinCastleVO(__dep_export_C2SJoinCastleVO.C2SJoinCastleVO.MY_CASTLE, __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID));
      }
    } else {
      this.showNoLongTermPointEventRunningError();
      this.hide();
    }
  };
  LongTermPointEventHardModeDialog.prototype.onServerMessageArrived = function (__s21param0) {
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onServerMessageArrived));
    if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT)) {
      __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_LONGTERM_POINT_EVENT_DIALOG);
    } else {
      this.showNoLongTermPointEventRunningError();
    }
    this.hide();
  };
  LongTermPointEventHardModeDialog.prototype.showNoLongTermPointEventRunningError = function () {
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_eventendet")));
  };
  LongTermPointEventHardModeDialog.__initialize_static_members = function () {
    LongTermPointEventHardModeDialog.NAME = "LongTermPointEventHardModeDialog";
  };
  return LongTermPointEventHardModeDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.LongTermPointEventHardModeDialog = __s0local0;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
