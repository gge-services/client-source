Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_ABGTowerInfoComponent = require("gge-module:export_ABGTowerInfoComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __s0local1 = function (__s1param0) {
  function CastleABGTowerReassignmentDialog() {
    return __s1param0.call(this, CastleABGTowerReassignmentDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleABGTowerReassignmentDialog, __s1param0);
  CastleABGTowerReassignmentDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_jumpTo], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  CastleABGTowerReassignmentDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_AllianceTower_towerReshuffle_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_beyondTheHorizon_AllianceTower_towerReshuffle_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_players, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("players"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_points_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_beyondTheHorizon_AllianceTower_towerReshuffle_statuette"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_units_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_beyondTheHorizon_AllianceTower_towerReshuffle_troopLimit"));
    this.dialogDisp.btn_jumpTo.toolTipText = "dialog_beyondTheHorizon_AllianceTower_tower_jumpTower_tooltip";
    this.towerInfo = new __dep_export_ABGTowerInfoComponent.ABGTowerInfoComponent(this.dialogDisp, new __s0local0(166, 260));
    this.towerInfo.updateTowerInfo(this.dialogProperties.targetTowerVO);
    this.towerInfo.onShow();
  };
  CastleABGTowerReassignmentDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    if (this.towerInfo) {
      this.towerInfo.onHide();
    }
  };
  CastleABGTowerReassignmentDialog.prototype.onClick = function (__s12param0) {
    __s1param0.prototype.onClick.call(this, __s12param0);
    switch (__s12param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_jumpTo:
        __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [this.dialogProperties.targetTowerVO.kingdomID, this.dialogProperties.targetTowerVO.absAreaPos.x, this.dialogProperties.targetTowerVO.absAreaPos.y]);
    }
  };
  Object.defineProperty(CastleABGTowerReassignmentDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleABGTowerReassignmentDialog.NAME = "CastleABGTowerReassignment";
  return CastleABGTowerReassignmentDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleABGTowerReassignmentDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
