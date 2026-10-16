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
var __dep_export_C2SAllianceHelpConfirmedVO = require("gge-module:export_C2SAllianceHelpConfirmedVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Rectangle;
var __s0local2 = function (__s1param0) {
  function AllianceHelpRequestScrollItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._disp.addEventListener(__s0local0.MOUSE_DOWN, __s3local0.bindFunction(__s3local0.onMouseDown));
    __s3local0._disp.addEventListener(__s0local0.MOUSE_OUT, __s3local0.bindFunction(__s3local0.onMouseUp));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceHelpRequestScrollItem, __s1param0);
  AllianceHelpRequestScrollItem.prototype.customFillItem = function () {
    this.textFieldManager.registerTextField(this.disp.txt_playername, new __dep_exact_92d05af59ee2ff30_1.TextVO(this.itemVO.allianceRequestVO.playerName));
    var __s5local0 = new __s0local1(0, 0, this.disp.txt_request_type.width - 2, this.disp.txt_request_type.height - 2);
    this.textFieldManager.registerTextField(this.disp.txt_request_type, this.getTextContentByID(this.itemVO.allianceRequestVO.requestTypeId)).fitTextSizeToBounds(__s5local0);
    this.textFieldManager.registerTextField(this.disp.txt_progress, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_allianceHelp_menu_counterHelpers", [this.itemVO.allianceRequestVO.progress, this.itemVO.allianceRequestVO.neededProgress]));
    this.textFieldManager.registerTextField(this.disp.btn_help.txt_help, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_allianceHelp_menu_HelpButton")).autoFitToBounds = true;
    this.disp.progressbar.scaleX = this.itemVO.allianceRequestVO.progress / this.itemVO.allianceRequestVO.neededProgress;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_help, !this.itemVO.allianceRequestVO.isOwnPlayer);
    this.disp.btn_help.toolTipText = this.itemVO.allianceRequestVO.isOwnPlayer ? "dialog_allianceHelp_disabled_tooltip" : null;
    this._disp.btn_help.scaleX = this._disp.btn_help.scaleY = 1;
  };
  AllianceHelpRequestScrollItem.prototype.getTextContentByID = function (__s7param0) {
    switch (__s7param0) {
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_RECRUITMENT:
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_LOOP_RECRUIT:
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_RECRUITMENT_LIST:
        return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_allianceHelp_recruitUnits");
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_HEAL_UNIT:
        return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_allianceHelp_healUnits");
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_REPAIR:
        return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_allianceHelp_repairBuildings");
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_BUILD:
        return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("ringmenu_allianceHelp_reduceConstructionTime");
    }
    return null;
  };
  AllianceHelpRequestScrollItem.prototype.onMouseClick = function (__s10param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s10param0.target)) {
      __s1param0.prototype.onMouseClick.call(this, __s10param0);
      if (__s10param0.target == this.disp.btn_help) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(__s10param0.target, false);
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceHelpConfirmedVO.C2SAllianceHelpConfirmedVO(this.itemVO.allianceRequestVO.listID, __dep_exact_26a421b704832cff_1.WorldDessert.KINGDOM_ID));
      }
    }
  };
  AllianceHelpRequestScrollItem.prototype.onMouseDown = function (__s14param0) {
    if (__s14param0.target == this.disp.btn_help) {
      this._disp.btn_help.scaleX = this._disp.btn_help.scaleY = 0.85;
    }
  };
  AllianceHelpRequestScrollItem.prototype.onMouseUp = function (__s17param0) {
    if (__s17param0.target == this.disp.btn_help) {
      this._disp.btn_help.scaleX = this._disp.btn_help.scaleY = 1;
    }
  };
  AllianceHelpRequestScrollItem.prototype.remove = function () {
    __s1param0.prototype.remove.call(this);
    this._disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this._disp.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseUp));
  };
  Object.defineProperty(AllianceHelpRequestScrollItem.prototype, "itemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceHelpRequestScrollItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return AllianceHelpRequestScrollItem;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.AllianceHelpRequestScrollItem = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "MovieClip");
