Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_AModernHighscoreComponentItem = require("gge-module:export_AModernHighscoreComponentItem");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function SeasonLeagueMainDialogRanksItem(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._showPoints = false;
    __s3local0._isMouseOver = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueMainDialogRanksItem, __s1param0);
  SeasonLeagueMainDialogRanksItem.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.disp.mc_gold.mc_icon.gotoAndStop(1);
    this.disp.mc_silver.mc_icon.gotoAndStop(2);
    this.disp.mc_bronze.mc_icon.gotoAndStop(3);
    this._promotionIcon = new __dep_export_SeasonLeaguePromotionIconComponent.SeasonLeaguePromotionIconComponent(this.disp.mc_promotion, __dep_export_SeasonLeaguePromotionIconComponent.SeasonLeaguePromotionIconComponent.TYPE_SMALL, new __s0local1(60, 40));
  };
  SeasonLeagueMainDialogRanksItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.setDownState(false);
    this.setMouseOverState(false);
  };
  SeasonLeagueMainDialogRanksItem.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  SeasonLeagueMainDialogRanksItem.prototype.removeEventListener = function () {
    this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    __s1param0.prototype.removeEventListener.call(this);
  };
  SeasonLeagueMainDialogRanksItem.prototype.fillContentWithAny = function () {
    __s1param0.prototype.fillContentWithAny.call(this);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, this.rank >= 0 ? new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.rank) : new __dep_exact_92d05af59ee2ff30_1.TextVO("-")).autoFitToBounds = true;
    this.disp.mc_indicator.gotoAndStop(this.getPrefixFrame());
  };
  SeasonLeagueMainDialogRanksItem.prototype.fillContentWithData = function () {
    __s1param0.prototype.fillContentWithData.call(this);
    var __s15local0 = this.getRawOwnerInfo();
    if (Array.isArray(__s15local0)) {
      var __s15local1 = this.data[3];
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s15local0[1])).autoFitToBounds = true;
      if (this.disp.txt_points) {
        __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, this.getPointsTextVO()).autoFitToBounds = true;
      }
      this._promotionIcon.setVisibility(false);
      this.disp.mc_promotionTooltip.visible = false;
      this.fillMedalContent(this.disp.mc_gold, __s15local1.KLMO[0][1]);
      this.fillMedalContent(this.disp.mc_silver, __s15local1.KLMO[1][1]);
      this.fillMedalContent(this.disp.mc_bronze, __s15local1.KLMO[2][1]);
    } else {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s15local0.N)).autoFitToBounds = true;
      if (this.disp.txt_points) {
        __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, this.getPointsTextVO()).autoFitToBounds = true;
      }
      this._promotionIcon.setVisibility(true);
      this._promotionIcon.updateWithNewVO(__dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getPromotion(__s15local0.KLRID));
      this.disp.mc_promotionTooltip.visible = true;
      this.disp.mc_promotionTooltip.toolTipText = this._promotionIcon.vo ? this._promotionIcon.vo.getNameTextId() : null;
      this.fillMedalContent(this.disp.mc_gold, __s15local0.KLMO[0][1]);
      this.fillMedalContent(this.disp.mc_silver, __s15local0.KLMO[1][1]);
      this.fillMedalContent(this.disp.mc_bronze, __s15local0.KLMO[2][1]);
    }
  };
  SeasonLeagueMainDialogRanksItem.prototype.fillContentWithEmpty = function () {
    __s1param0.prototype.fillContentWithEmpty.call(this);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30_1.TextVO("???")).autoFitToBounds = true;
    if (this.disp.txt_points) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new __dep_exact_92d05af59ee2ff30_1.TextVO(this._showPoints ? "???" : "")).autoFitToBounds = true;
    }
    this._promotionIcon.updateWithNewVO(null);
    this.disp.mc_promotionTooltip.toolTipText = null;
    this.disp.mc_promotionTooltip.visible = false;
    this.fillMedalContent(this.disp.mc_gold, 0);
    this.fillMedalContent(this.disp.mc_silver, 0);
    this.fillMedalContent(this.disp.mc_bronze, 0);
  };
  SeasonLeagueMainDialogRanksItem.prototype.setDownState = function (__s24param0) {
    this.disp.mc_downState.visible = __s24param0;
  };
  SeasonLeagueMainDialogRanksItem.prototype.setMouseOverState = function (__s26param0) {
    this.disp.mc_mouseOver.visible = __s26param0;
  };
  SeasonLeagueMainDialogRanksItem.prototype.fillMedalContent = function (__s28param0, __s28param1) {
    var __s28local0 = __s28param1 > 0;
    __s28param0.visible = __s28param1 > 0;
    if (__s28local0) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s28param0.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s28param1)).autoFitToBounds = true;
    }
  };
  SeasonLeagueMainDialogRanksItem.prototype.getPoints = function () {
    return __dep_exact_f855840627e6e145.int(this.data ? this.data[1] : 0);
  };
  SeasonLeagueMainDialogRanksItem.prototype.getRawOwnerInfo = function () {
    if (this.data) {
      return this.data[2];
    } else {
      return null;
    }
  };
  SeasonLeagueMainDialogRanksItem.prototype.getPlayerId = function () {
    return __dep_exact_f855840627e6e145.int(this.data ? this.data[2].OID : -1);
  };
  SeasonLeagueMainDialogRanksItem.prototype.getPrefixFrame = function () {
    var __s39local0 = this.getRawOwnerInfo();
    if (__s39local0 && __s39local0.OID == __dep_export_CastleModel.CastleModel.userData.playerID) {
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
  SeasonLeagueMainDialogRanksItem.prototype.getPointsTextVO = function () {
    var __s43local0 = this.getPoints();
    if (this._showPoints) {
      if (__s43local0 >= 0) {
        return new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s43local0);
      } else {
        return new __dep_exact_92d05af59ee2ff30_1.TextVO("-");
      }
    } else {
      return new __dep_exact_92d05af59ee2ff30_1.TextVO("");
    }
  };
  SeasonLeagueMainDialogRanksItem.prototype.isAllianceInfo = function () {
    var __s49local0 = this.getRawOwnerInfo();
    return Array.isArray(__s49local0);
  };
  SeasonLeagueMainDialogRanksItem.prototype.onMouseDown = function (__s51param0) {
    this.setDownState(true);
    this.setMouseOverState(false);
  };
  SeasonLeagueMainDialogRanksItem.prototype.onMouseUp = function (__s53param0) {
    this.setDownState(false);
    if (this._isMouseOver) {
      this.setMouseOverState(true);
      if (this.isAllianceInfo()) {
        var __s53local0 = this.getRawOwnerInfo();
        var __s53local1 = __dep_exact_f855840627e6e145.int(__s53local0 ? __s53local0[0] : -1);
        if (__s53local1 >= 0) {
          __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(__dep_export_CastleAllianceInfoDialog.CastleAllianceInfoDialog, new __dep_export_CastleAllianceInfoDialogProperties.CastleAllianceInfoDialogProperties(__s53local1), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
        }
      } else {
        var __s53local2 = this.getPlayerId();
        if (__s53local2 >= 0) {
          __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(__s53local2), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
        }
      }
    }
  };
  SeasonLeagueMainDialogRanksItem.prototype.onMouseOver = function (__s60param0) {
    __s1param0.prototype.onMouseOver.call(this, __s60param0);
    this._isMouseOver = true;
    this.setMouseOverState(true);
    __dep_export_CastleComponent.CastleComponent.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
  };
  SeasonLeagueMainDialogRanksItem.prototype.onRollOut = function (__s62param0) {
    __s1param0.prototype.onRollOut.call(this, __s62param0);
    this._isMouseOver = false;
    this.setMouseOverState(false);
    this.setDownState(false);
    __dep_export_CastleComponent.CastleComponent.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(SeasonLeagueMainDialogRanksItem.prototype, "showPoints", {
    get: function () {
      return this._showPoints;
    },
    set: function (__s66param0) {
      this._showPoints = __s66param0;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueMainDialogRanksItem;
}(__dep_export_AModernHighscoreComponentItem.AModernHighscoreComponentItem);
exports.SeasonLeagueMainDialogRanksItem = __s0local2;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
var __dep_export_SeasonLeaguePromotionIconComponent = require("gge-module:export_SeasonLeaguePromotionIconComponent");
var __dep_export_CastleAllianceInfoDialogProperties = require("gge-module:export_CastleAllianceInfoDialogProperties");
var __dep_export_CastleAllianceInfoDialog = require("gge-module:export_CastleAllianceInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
