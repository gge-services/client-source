Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem() {
    var __s3local0 = this;
    __s3local0._isMouseOver = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem, __s1param0);
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.fill = function () {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.rank));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_name, new __dep_exact_92d05af59ee2ff30_1.TextVO(this.vo.playerName));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_level, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.vo.playerLevel));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_points, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.points));
    if (this.itemMc.txt_currentPoints) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_currentPoints, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.vo.currentInfluencePoints));
    }
    this.itemMc.mc_indicator.gotoAndStop(this.getPrefixFrame());
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.setDownState(false);
    this.setMouseOverState(false);
    this.itemMc.mouseChildren = false;
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.itemMc.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.itemMc.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.removeEventListener = function () {
    this.itemMc.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.itemMc.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    __s1param0.prototype.removeEventListener.call(this);
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.setDownState = function (__s14param0) {
    this.itemMc.mc_downState.visible = __s14param0;
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.setMouseOverState = function (__s16param0) {
    this.itemMc.mc_mouseOver.visible = __s16param0;
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.onMouseDown = function (__s18param0) {
    this.setDownState(true);
    this.setMouseOverState(false);
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.onMouseUp = function (__s20param0) {
    this.setDownState(false);
    if (this._isMouseOver) {
      this.setMouseOverState(true);
    }
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.onMouseOver = function (__s23param0) {
    __s1param0.prototype.onMouseOver.call(this, __s23param0);
    this._isMouseOver = true;
    this.setMouseOverState(true);
    __dep_export_CastleComponent.CastleComponent.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.onMouseOut = function (__s25param0) {
    __s1param0.prototype.onMouseOut.call(this, __s25param0);
    this._isMouseOver = false;
    this.setMouseOverState(false);
    this.setDownState(false);
    __dep_export_CastleComponent.CastleComponent.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.onClick = function (__s27param0) {
    __s1param0.prototype.onClick.call(this, __s27param0);
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(this.vo.playerID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype.getPrefixFrame = function () {
    if (this.vo.playerName == __dep_export_CastleModel.CastleModel.userData.userName && (!(this.rank >= 1) || !(this.rank <= 3))) {
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
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype, "vo", {
    get: function () {
      return this.data.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype, "rank", {
    get: function () {
      return this.data.rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem.prototype, "points", {
    get: function () {
      return this.data.points;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
