Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_AModernHighscoreComponentItem = require("gge-module:export_AModernHighscoreComponentItem");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleAllianceBattlegroundEventDialogRankingPlayerListItem(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._isMouseOver = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattlegroundEventDialogRankingPlayerListItem, __s1param0);
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.disp.mouseChildren = false;
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.setDownState(false);
    this.setMouseOverState(false);
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.removeEventListener = function () {
    this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    __s1param0.prototype.removeEventListener.call(this);
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.fillContentWithAny = function () {
    __s1param0.prototype.fillContentWithAny.call(this);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, this.rank >= 0 ? new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.rank) : new __dep_exact_92d05af59ee2ff30_1.TextVO("-")).autoFitToBounds = true;
    this.disp.mc_indicator.gotoAndStop(this.getPrefixFrame());
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.fillContentWithData = function () {
    __s1param0.prototype.fillContentWithData.call(this);
    var __s15local0 = this.getPlayerInfo();
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.shownRank)).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s15local0.N)).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_level, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s15local0.L)).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_allianceName, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s15local0.AN)).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.data[1])).autoFitToBounds = true;
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.setItemIndicatorSearchedName = function () {
    this.disp.mc_indicator.gotoAndStop(4);
  };
  Object.defineProperty(CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype, "shownRank", {
    get: function () {
      var __s19local0 = __dep_exact_f855840627e6e145.int(this.rank);
      var __s19local1 = __dep_exact_f855840627e6e145.int(this.data ? this.data[4] : 0);
      if (__s19local1 == 0) {
        return __s19local0;
      } else {
        return __s19local1;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.fillContentWithEmpty = function () {
    __s1param0.prototype.fillContentWithEmpty.call(this);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30_1.TextVO("???")).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_level, new __dep_exact_92d05af59ee2ff30_1.TextVO("???")).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_allianceName, new __dep_exact_92d05af59ee2ff30_1.TextVO("???")).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new __dep_exact_92d05af59ee2ff30_1.TextVO("???")).autoFitToBounds = true;
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.setDownState = function (__s25param0) {
    this.disp.mc_downState.visible = __s25param0;
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.setMouseOverState = function (__s27param0) {
    this.disp.mc_mouseOver.visible = __s27param0;
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.getPlayerInfo = function () {
    if (this.data) {
      return this.data[2];
    } else {
      return null;
    }
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.getPlayerId = function () {
    var __s33local0 = this.getPlayerInfo();
    return __dep_exact_f855840627e6e145.int(__s33local0 ? __s33local0.OID : -1);
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.getPrefixFrame = function () {
    var __s35local0 = this.getPlayerInfo();
    if (__s35local0 && __s35local0.OID == __dep_export_CastleModel.CastleModel.userData.playerID && (!(this.shownRank >= 1) || !(this.shownRank <= 3))) {
      return 4;
    }
    switch (this.shownRank) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
    }
    return 5;
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.onClick = function (__s39param0) {
    __s1param0.prototype.onClick.call(this, __s39param0);
    var __s39local0 = this.getPlayerId();
    if (__s39local0 >= 0) {
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(__s39local0), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.onMouseDown = function (__s42param0) {
    this.setDownState(true);
    this.setMouseOverState(false);
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.onMouseUp = function (__s44param0) {
    this.setDownState(false);
    if (this._isMouseOver) {
      this.setMouseOverState(true);
    }
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.onMouseOver = function (__s47param0) {
    __s1param0.prototype.onMouseOver.call(this, __s47param0);
    this._isMouseOver = true;
    this.setMouseOverState(true);
    __dep_export_CastleComponent.CastleComponent.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.onMouseOut = function (__s49param0) {
    __s1param0.prototype.onMouseOut.call(this, __s49param0);
    this._isMouseOver = false;
    this.setMouseOverState(false);
    this.setDownState(false);
    __dep_export_CastleComponent.CastleComponent.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
  };
  return CastleAllianceBattlegroundEventDialogRankingPlayerListItem;
}(__dep_export_AModernHighscoreComponentItem.AModernHighscoreComponentItem);
exports.CastleAllianceBattlegroundEventDialogRankingPlayerListItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
