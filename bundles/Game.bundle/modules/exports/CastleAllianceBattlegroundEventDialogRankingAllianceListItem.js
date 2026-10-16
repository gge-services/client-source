Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceCrestVO = require("gge-module:export_AllianceCrestVO");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_AllianceCrestEnum = require("gge-module:export_AllianceCrestEnum");
var __dep_export_AllianceCrestSizeEnum = require("gge-module:export_AllianceCrestSizeEnum");
var __dep_export_CastleAllianceCrestHelper = require("gge-module:export_CastleAllianceCrestHelper");
var __dep_export_CastleAllianceInfoDialogProperties = require("gge-module:export_CastleAllianceInfoDialogProperties");
var __dep_export_AModernHighscoreComponentItem = require("gge-module:export_AModernHighscoreComponentItem");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleAllianceBattlegroundEventDialogRankingAllianceListItem(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._isMouseOver = false;
    __s3local0._crestVO = new __dep_export_AllianceCrestVO.AllianceCrestVO();
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattlegroundEventDialogRankingAllianceListItem, __s1param0);
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.disp.mouseChildren = false;
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.setDownState(false);
    this.setMouseOverState(false);
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.removeEventListener = function () {
    this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    __s1param0.prototype.removeEventListener.call(this);
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.fillContentWithAny = function () {
    __s1param0.prototype.fillContentWithAny.call(this);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, this.rank >= 0 ? new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.rank) : new __dep_exact_92d05af59ee2ff30.TextVO("-")).autoFitToBounds = true;
    this.disp.mc_indicator.gotoAndStop(this.getPrefixFrame());
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.fillContentWithData = function () {
    __s1param0.prototype.fillContentWithData.call(this);
    var __s15local0 = this.getAllianceInfo();
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__s15local0[1])).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_members, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s15local0[2])).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.data[1])).autoFitToBounds = true;
    var __s15local1 = __s15local0[4];
    this._crestVO.fillWithData(__s15local1);
    if (__s15local1.BGT && !this._crestVO.isEmpty) {
      this.disp.mc_crest.visible = true;
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.mc_crest);
      __dep_export_CastleAllianceCrestHelper.CastleAllianceCrestHelper.setCrestGraphics(this.disp.mc_crest, this._crestVO, __dep_export_AllianceCrestSizeEnum.AllianceCrestSizeEnum.XS, __dep_export_AllianceCrestEnum.AllianceCrestEnum.DEFAULT_CREST_SIMPLE);
    } else {
      this.disp.mc_crest.visible = false;
    }
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.fillContentWithEmpty = function () {
    __s1param0.prototype.fillContentWithEmpty.call(this);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO("???")).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_members, new __dep_exact_92d05af59ee2ff30.TextVO("???")).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new __dep_exact_92d05af59ee2ff30.TextVO("???")).autoFitToBounds = true;
    this.disp.mc_crest.visible = false;
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.setItemIndicatorSearchedName = function () {
    this.disp.mc_indicator.gotoAndStop(4);
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.setDownState = function (__s23param0) {
    this.disp.mc_downState.visible = __s23param0;
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.setMouseOverState = function (__s25param0) {
    this.disp.mc_mouseOver.visible = __s25param0;
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.getAllianceInfo = function () {
    if (this.data) {
      return this.data[2];
    } else {
      return null;
    }
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.getAllianceId = function () {
    var __s31local0 = this.getAllianceInfo();
    return __dep_exact_f855840627e6e145.int(__s31local0 ? __s31local0[0] : -1);
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.getPrefixFrame = function () {
    var __s33local0 = this.getAllianceInfo();
    if (__s33local0 && __s33local0[1] == __dep_export_CastleModel.CastleModel.userData.allianceName) {
      return 4;
    }
    switch (this.rank) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
    }
    return 5;
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.onClick = function (__s37param0) {
    __s1param0.prototype.onClick.call(this, __s37param0);
    var __s37local0 = this.getAllianceId();
    if (__s37local0 >= 0) {
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(__dep_export_CastleAllianceInfoDialog.CastleAllianceInfoDialog, new __dep_export_CastleAllianceInfoDialogProperties.CastleAllianceInfoDialogProperties(__s37local0), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.onMouseDown = function (__s40param0) {
    this.setDownState(true);
    this.setMouseOverState(false);
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.onMouseUp = function (__s42param0) {
    this.setDownState(false);
    if (this._isMouseOver) {
      this.setMouseOverState(true);
    }
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.onMouseOver = function (__s45param0) {
    __s1param0.prototype.onMouseOver.call(this, __s45param0);
    this._isMouseOver = true;
    this.setMouseOverState(true);
    __dep_export_CastleComponent.CastleComponent.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f_1.BasicCustomCursor.CURSOR_CLICK);
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.onMouseOut = function (__s47param0) {
    __s1param0.prototype.onMouseOut.call(this, __s47param0);
    this._isMouseOver = false;
    this.setMouseOverState(false);
    this.setDownState(false);
    __dep_export_CastleComponent.CastleComponent.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f_1.BasicCustomCursor.CURSOR_ARROW);
  };
  return CastleAllianceBattlegroundEventDialogRankingAllianceListItem;
}(__dep_export_AModernHighscoreComponentItem.AModernHighscoreComponentItem);
exports.CastleAllianceBattlegroundEventDialogRankingAllianceListItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleAllianceInfoDialog = require("gge-module:export_CastleAllianceInfoDialog");
