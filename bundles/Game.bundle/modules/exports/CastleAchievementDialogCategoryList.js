Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __s0local0 = createjs.MouseEvent;
var __dep_export_TouchScrollHelper = require("gge-module:export_TouchScrollHelper");
var __s0local1 = function (__s1param0) {
  function CastleAchievementDialogCategoryList(__s3param0) {
    var __s3local0 = this;
    __s3local0.currentTopIndex = 0;
    __s3local0._refHeight = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._touchScrollHelper = new __dep_export_TouchScrollHelper.TouchScrollHelper();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAchievementDialogCategoryList, __s1param0);
  CastleAchievementDialogCategoryList.prototype.show = function (__s5param0) {
    this.achievementSeries = __dep_export_CastleModel.CastleModel.castleAchievementData.getAchievementSeriesByCategory(__s5param0[0]);
    this.currentTopIndex = 0;
    this.refreshList();
    this.sublayerDisp.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel_0));
    __s1param0.prototype.show.call(this, __s5param0);
    this.initBasicButtons([this.sublayerDisp.btn_up, this.sublayerDisp.btn_down]);
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile) {
      this._touchScrollHelper.setup(this.sublayerDisp);
      this.sublayerDisp.addEventListener(__s0local0.PRESS_MOVE, this.bindFunction(this.handleTouchScrooll));
      this._refHeight = this.sublayerDisp.height / 4;
    }
  };
  CastleAchievementDialogCategoryList.prototype.refreshList = function () {
    for (var __s8local0 = 0; __s8local0 < CastleAchievementDialogCategoryList.VISIBLE_ITEMS; ++__s8local0) {
      var __s8local1 = this.sublayerDisp["achv_item" + __s8local0];
      if (this.currentTopIndex + __s8local0 >= this.achievementSeries.length) {
        __s8local1.visible = false;
      } else {
        __s8local1.visible = true;
        var __s8local2 = this.achievementSeries[this.currentTopIndex + __s8local0];
        var __s8local3 = "achievementDesc_" + __s8local2.achievementSeriesID + (__s8local2.useSingularTextID() ? "_singular" : "");
        var __s8local4 = __dep_exact_92d05af59ee2ff30_1.Localize.text(__s8local3, __s8local2.generateDescriptionParameter());
        if (__s8local2.achievementInProgress.unlocksDifficulty > 0) {
          __s8local4 += " " + __dep_exact_92d05af59ee2ff30_1.Localize.text("achievementSingleStep_" + __s8local2.achievementInProgress.achievementID);
        }
        if (__s8local1.ifirstRefresh) {
          __s8local1.itxt_name.textContentVO.stringValue = __s8local2.nameString;
          __s8local1.itxt_desc.textContentVO.stringValue = __s8local4;
          __s8local1.itxt_level.textContentVO.textId = "building_level";
          __s8local1.itxt_level.textContentVO.textReplacements = [__s8local2.level];
          __s8local1.itxt_points.textContentVO.numberValue = __s8local2.achievementInProgress.achievementPoints;
        } else {
          __s8local1.ifirstRefresh = true;
          __s8local1.itxt_name = this.textFieldManager.registerTextField(__s8local1.txt_name, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s8local2.nameString));
          __s8local1.itxt_name.mouseEnabled = false;
          __s8local1.itxt_desc = this.textFieldManager.registerTextField(__s8local1.txt_desc, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s8local4));
          __s8local1.itxt_desc.mouseEnabled = false;
          __s8local1.itxt_level = this.textFieldManager.registerTextField(__s8local1.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("building_level", [__s8local2.level]));
          __s8local1.itxt_level.mouseEnabled = false;
          __s8local1.itxt_level.autoFitToBounds = true;
          __s8local1.itxt_points = this.textFieldManager.registerTextField(__s8local1.txt_points, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s8local2.achievementInProgress.achievementPoints));
          __s8local1.itxt_points.mouseEnabled = false;
          __s8local1.itxt_points.autoFitToBounds = true;
        }
        __s8local1.mc_progressBar.scaleX = Math.max(Math.min(__s8local2.achievementInProgress.totalCurrentProgress / __s8local2.achievementInProgress.totalMaxProgress, 1), 0);
        __s8local1.mc_done.visible = __s8local2.isSerieFinished;
        __s8local1.mc_points_tooltip.toolTipText = {
          t: "points",
          p: [__s8local2.achievementInProgress.achievementPoints]
        };
        if (__s8local2.achievementInProgress.hasYellowBar) {
          __s8local1.mc_progressBar.visible = true;
          __s8local1.mc_noProgressBar.visible = false;
          __s8local1.mc_progressBarOverlay.toolTipText = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s8local2.achievementInProgress.totalCurrentProgress), new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s8local2.achievementInProgress.totalMaxProgress)]);
          if (__s8local2.hideIconText) {
            __s8local1.imc_achievement_value = this.textFieldManager.registerTextField(__s8local1.mc_achievement_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
          } else {
            __s8local1.imc_achievement_value = this.textFieldManager.registerTextField(__s8local1.mc_achievement_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(Number(__s8local2.getYellowBarString()), true));
          }
        } else {
          __s8local1.mc_progressBar.visible = false;
          __s8local1.mc_noProgressBar.visible = true;
          __s8local1.mc_progressBarOverlay.toolTipText = null;
          __s8local1.imc_achievement_value = this.textFieldManager.registerTextField(__s8local1.mc_achievement_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
        }
        __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s8local1.mc_iconHolder);
        __s8local1.mc_iconHolder.addChild(__s8local2.displayDisp);
        __s8local1.mc_iconHolder.mouseChildren = false;
        if (__s8local2.currentSeriesStep == 1) {
          __s8local1.mc_medal.gotoAndStop(1);
        } else if (__s8local2.isSerieFinished) {
          __s8local1.mc_medal.gotoAndStop(3);
        } else {
          __s8local1.mc_medal.gotoAndStop(2);
        }
        this.checkArrows();
      }
    }
  };
  CastleAchievementDialogCategoryList.prototype.hide = function () {
    this.sublayerDisp.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel_0));
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile) {
      this._touchScrollHelper.dispose();
      this.sublayerDisp.removeEventListener(__s0local0.PRESS_MOVE, this.bindFunction(this.handleTouchScrooll));
      this._refHeight = 0;
    }
    __s1param0.prototype.hide.call(this);
  };
  CastleAchievementDialogCategoryList.prototype.onClick = function (__s27param0) {
    __s1param0.prototype.onClick.call(this, __s27param0);
    switch (__s27param0.target) {
      case this.sublayerDisp.btn_up:
        this.scrollUp();
        break;
      case this.sublayerDisp.btn_down:
        this.scrollDown();
    }
  };
  CastleAchievementDialogCategoryList.prototype.handleTouchScrooll = function (__s30param0) {
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s30param0)) {
      var __s30local0 = __s30param0.stageY - this._touchScrollHelper.touchStageRefPoint.y;
      if (Math.abs(__s30local0) > this._refHeight) {
        if (__s30local0 > 0) {
          this.scrollUp();
        } else {
          this.scrollDown();
        }
        this._touchScrollHelper.touchStageRefPoint.y = __s30param0.stageY;
      }
    }
  };
  CastleAchievementDialogCategoryList.prototype.onMouseWheel_0 = function (__s36param0) {
    __s1param0.prototype.onMouseOut.call(this, __s36param0);
    if (__s36param0.delta < 0) {
      this.scrollUp();
    } else if (__s36param0.delta > 0) {
      this.scrollDown();
    }
  };
  CastleAchievementDialogCategoryList.prototype.scrollUp = function () {
    if (!(this.currentTopIndex <= 0)) {
      this.currentTopIndex = __dep_exact_f855840627e6e145.int(Math.max(0, this.currentTopIndex - 1));
      this.refreshList();
    }
  };
  CastleAchievementDialogCategoryList.prototype.scrollDown = function () {
    if (!(this.currentTopIndex >= this.achievementSeries.length - CastleAchievementDialogCategoryList.VISIBLE_ITEMS)) {
      this.currentTopIndex = __dep_exact_f855840627e6e145.int(Math.min(this.achievementSeries.length - CastleAchievementDialogCategoryList.VISIBLE_ITEMS, this.currentTopIndex + 1));
      this.refreshList();
    }
  };
  CastleAchievementDialogCategoryList.prototype.checkArrows = function () {
    this.sublayerDisp.btn_down.visible = this.currentTopIndex + CastleAchievementDialogCategoryList.VISIBLE_ITEMS < this.achievementSeries.length;
    this.sublayerDisp.btn_up.visible = this.currentTopIndex > 0;
  };
  Object.defineProperty(CastleAchievementDialogCategoryList.prototype, "sublayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleAchievementDialogCategoryList.__initialize_static_members = function () {
    CastleAchievementDialogCategoryList.VISIBLE_ITEMS = 3;
  };
  return CastleAchievementDialogCategoryList;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleAchievementDialogCategoryList = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
__s0local1.__initialize_static_members();
